
import pandas as pd 
import seaborn as sns
from tqdm import tqdm 
import re 
import nltk 
import joblib
nltk.download('punkt') 
nltk.download('stopwords') 
from nltk.corpus import stopwords 
from nltk.tokenize import word_tokenize 
from nltk.stem.porter import PorterStemmer 
from sklearn.model_selection import train_test_split 
from sklearn.feature_extraction.text import TfidfVectorizer,CountVectorizer
from sklearn.metrics import accuracy_score 
from sklearn.linear_model import LogisticRegression 
data = pd.read_csv('newdataset1.csv')
data.head()

# data = data.drop([ "subject","date"], axis = 1)
drop_columns=['title','text','class']
data= data.dropna(subset=drop_columns)
print(data.isnull().sum())
data = data.sample(frac=1) 
data.reset_index(inplace=True) 
data.drop(["index"], axis=1, inplace=True) 
def preprocess_text(text_data): 
    preprocessed_text = [] 
      
    for sentence in tqdm(text_data): 
        sentence = re.sub(r'[^\w\s]', '', sentence) 
        preprocessed_text.append(' '.join(token.lower() 
                                  for token in str(sentence).split() 
                                  if token not in stopwords.words('english'))) 
  
    return preprocessed_text


# preprocessed_review = preprocess_text(data['text'].values) 
# data['text'] = data['text']
# # x=data['title']+" "+data['text']
x_train, x_test, y_train, y_test = train_test_split(data['text'],  
                                                    data['class'],  
                                                    test_size=0.25)
vectorization = TfidfVectorizer() 
x_train = vectorization.fit_transform(x_train) 
x_test = vectorization.transform(x_test)
model = LogisticRegression() 
model.fit(x_train, y_train) 
  
# testing the model 
print(accuracy_score(y_train, model.predict(x_train))) 
print(accuracy_score(y_test, model.predict(x_test))) 

joblib.dump(model,'fake_news.pkl')
joblib.dump(vectorization,'tf.pkl')