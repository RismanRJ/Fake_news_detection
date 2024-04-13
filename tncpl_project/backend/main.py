from flask import Flask,request,jsonify
from flask_cors import CORS, cross_origin
import requests
from bs4 import BeautifulSoup 
import nltk
from nltk.corpus import stopwords 
from nltk.tokenize import word_tokenize, sent_tokenize
from nltk.stem.porter import PorterStemmer 
import pandas as pd
import re
import time
import numpy as np
import seaborn as sns
from tqdm import tqdm
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
import joblib
import pathlib
import textwrap
from googletrans import Translator
import google.generativeai as genai

 
nltk.download('punkt')
textModel = joblib.load('fake_news.pkl')
tfidf_vectorizer = joblib.load('tf.pkl')

app = Flask(__name__,static_folder='./fake_news_detector/dist',static_url_path='/')
CORS(app)
API_URL = "https://api-inference.huggingface.co/models/google/gemma-7b"

headers = {"Authorization": "Bearer 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"}
translator=Translator()


def to_markdown(text):
  text = text.replace('•', '  *')
  return Markdown(textwrap.indent(text, '> ', predicate=lambda _: True))

genai.configure(api_key=' AIzaSyD9HLV6fF42V8yOHFWk5S9-OJxmMbgpzKE')
aimodel = genai.GenerativeModel('gemini-pro')

# @app.after_request
@cross_origin(
    origins='*',  # Allow requests from any origin
    methods=['GET', 'POST', 'OPTIONS'],  # Specify allowed HTTP methods
    headers=None,  # Allow all headers
    supports_credentials=False,  # Disable credentials (cookies) support
    max_age=None,  # No maximum age for preflight requests
)
@app.route("/linkanalyze",methods=['POST'])
def  handleNewsAccuracy ():
    if request.method=='POST':
            link = request.get_json()
            link1= link.get('link')
            print(link1)
            data =  requests.get(link1)
            # soap = BeautifulSoup(data.content,'html.parser')
            # print(data)
            return jsonify({
            'status':'success',
            'data':data.status_code

             })
        

@app.route('/analyze_text',methods=['POST'])
def handleTextNewsAccuracy():
    if request.method=='POST':
        textData= request.get_json()
        recievedText=textData.get('text')
        input_tfidf=tfidf_vectorizer.transform([recievedText])
        prediction = textModel.predict(input_tfidf)[0]
        per=textModel.predict_proba(input_tfidf)[0]
        print(per[0])
        print(per[1])
             
        print(prediction)
        # print(recievedText)
        return jsonify({
            'status':'success',
            'true':per[1],
            'false':per[0]
        })      
    

# summaraizer
@app.route('/text',methods=['POST'])
def handleText():
    if request.method=='POST':
        
        try:
            requestedData= request.get_json()
            text= requestedData.get('text')
            stopWords = set(stopwords.words("english")) 
            # print(text)
            words = word_tokenize(text) 
            freqTable = dict()
            for word in words:
                word= word.lower()
                if word in stopWords:
                    continue
                if word in freqTable:
                    freqTable[word]+=1
                else:
                    freqTable[word]=1

            sentences = sent_tokenize(text) 
            sentenceValue = dict() 
            for sentence in sentences:
                for word,freq in freqTable.items():
                    if word in sentence.lower():
                        if sentence in sentenceValue:
                            sentenceValue[sentence]+=freq
                        else:
                            sentenceValue[sentence]= freq
            
            sumValues=0
            for sentence in sentenceValue:
                sumValues+= sentenceValue[sentence]

            average = int(sumValues/len(sentenceValue))

            summary=''
            for sentence in sentences:
                if(sentence in sentenceValue) and (sentenceValue[sentence]>(1.2*average)):
                    summary+=" "+ sentence
                    
            print('text method called')

            # print(summary)

            return jsonify({
                'status':'success',
                'text':summary
            }),201




        except:
            return jsonify({
                'status':'error',
                'mesaage':"Unable to summaraize"
            })


# chatbot
@app.route('/chatbot',methods=['POST'])
def chatbot():
    if request.method=='POST':
        data= request.get_json()
        inputText= data.get('input')

        chat = aimodel.start_chat(history=[])
        response= chat.send_message(inputText)

        print(response.text)

        return jsonify({
            'status':'success',
            'data':response.text
        })
       


	


# translator
@app.route('/translate',methods=['POST'])
def translate():
    if request.method=='POST':
        data=request.get_json()
        text=data.get('text')
        target_lang=data.get('target_language')
        print(target_lang)
        try:
            translation=translator.translate(text,dest=target_lang)
            print(translation.text)
            return  jsonify({
                'status':'success',
                'text':translation.text
            })
        except Exception as e:
            return jsonify({
                'status':'error',
                'text':e
            })
          
        


@app.route('/analyze_file',methods=['post'])
def analyzeFile():
    if request.method=='POST':
        data=request.get_json()
        path=data.get('path')
        text=""
        with open(path,"rb") as f:
             reader = PyPDF2.PdfFileReader(f)
             for page_num in range(reader.numPages):
                 page = reader.getPage(page_num)
                 text += page.extractText()
        

        input_tfidf=tfidf_vectorizer.transform([text])
        prediction = textModel.predict(input_tfidf)[0]
        per=textModel.predict_proba(input_tfidf)[0]
        return jsonify({
            'status':'success',
            'text':text,
            'true':per[1],
            'false':per[0]
        })
            
                 



@app.route("/")
def index():
    return app.send_static_file('index.html')




if __name__ == '__main__':
    app.run(debug=True)