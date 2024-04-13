import { HStack, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navbar = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Fake News Detection",
      link: "/news",
    },
    {
      name: "Summaraizer",
      link: "/summary",
    },
    {
      name: "Explore News",
      link: "/today_news",
    },
    {
      name: "Report",
      link: "/report",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Terms and Conditions",
      link: "/terms",
    },
  ];
  return (
    <nav
      className="navbar navbar-expand-lg bg-black text-light "
      role="navigation"
    >
      <div className="container-fluid">
        <NavLink className="navbar-brand text-white  " to="/">
          <HStack>
            <Image
              src="src/assets/logo.jpg"
              h={"3.5rem"}
              borderRadius={"2rem"}
              border={"2px solid white"}
            />
            <Heading size={"lg"} as={"h5"} aria-label="NewsGuard">
              NewsGuard
            </Heading>
          </HStack>
        </NavLink>
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon "></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
            {navbar.map((val, index) => (
              <li key={index} className="nav-item px-md-2 p-2">
                <NavLink className="p-2" aria-current={val.name} to={val.link}>
                  {val.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
