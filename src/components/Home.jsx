import { Opacity } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import web from "../bg.jpeg";
import Footer from "./Footer";
import "./Home.css";

const Home = () => {
  return (
    <section id="#header" className="home">
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-lg-12 order-1 order-lg-2 header-img"
            style={{
                backgroundImage: 'url('+web+')',
                backgroundSize: "cover",
                height: "100vh",
                paddingTop:"50px"
              }}
          >   
          <div className="txt">
            <h1>
                Feel Organized without the Effort with{" "}
                <strong className="bn">Mailbuzz</strong>{" "}
            </h1>
            <div className="my-3">
                <Link to="/">
                <button className="btn btn-primary get-started mb-5">
                  Get Started..
                </button>
                </Link>
            </div>     
          </div>  
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Home;
