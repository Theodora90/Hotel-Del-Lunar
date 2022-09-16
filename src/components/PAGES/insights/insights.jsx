import React from "react";
import "./insights.css";
// import { Link } from "react-router-dom";

import AboutImage from "../../../assets/images/insight-hero.jpeg";
import MissionImage from "../../../assets/images/image-five.jpg";
import Ceo from "../../../assets/images/ceo.jpeg";
import Cos from "../../../assets/images/cos.jpeg";
import Hoo from "../../../assets/images/hoo.jpeg";
import Container from "../../UI/container/container";
import Footer from "../../UI/footer/footer";

const Insight = () => {
  return (
    <div>
      <div className="insight-hero">
        <div className="text-container">
          <h1 className="display-2">
            Just another day in paradise, <br /> Luxury has a new address
          </h1>
        </div>
      </div>
      <Container>
        <div className="row insight-about">
          <div className="col-lg-6 mx-auto mt-4">
            <h3>Hotel Del Lunar</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
              saepe voluptatum provident. Veritatis iure ad neque ipsam rerum
              aut dignissimos ea quidem, laboriosam sed, corrupti, consectetur
              totam libero porro repellendus.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
              saepe voluptatum provident. Veritatis iure ad neque ipsam rerum
              aut dignissimos ea quidem, laboriosam sed, corrupti, consectetur
              totam libero porro repellendus.
            </p>
          </div>
          <div className="col-lg-5 mx-auto d-flex align-items-center">
            <img src={AboutImage} className="img-fluid" alt="Hotel Lobby" />
          </div>
        </div>
        <div className="row insight-about">
          <div className="col-lg-5 mx-auto d-flex align-items-center">
            <img src={MissionImage} className="img-fluid" alt="Hotel Lobby" />
          </div>
          <div className="col-lg-6 mx-auto mt-4">
            <div className="mb-1">
              <h3>Mission</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
                saepe voluptatum provident. Veritatis iure ad neque ipsam rerum
                aut dignissimos ea quidem, laboriosam sed, corrupti, consectetur
                totam libero porro repellendus.
              </p>
            </div>

            <div className="mt-1">
              <h3>Vision</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
                saepe voluptatum provident. Veritatis iure ad neque ipsam rerum
                aut dignissimos ea quidem, laboriosam sed, corrupti, consectetur
                totam libero porro repellendus.
              </p>
            </div>
          </div>
        </div>
        <section className="our-staffs">
          <div className="row">
            <h4>Our Team</h4>
            <div className="col-lg-4 mx-auto">
              <div className="staff">
                <img src={Ceo} className="img-fluid" alt="A Man" />
                <h6 className="h4">Ceo</h6>
                <p>Jeremiah Amaukwu</p>
              </div>
            </div>
            <div className="col-lg-4 mx-auto">
              <img src={Cos} className="img-fluid" alt="A Woman" />
              <h6 className="h4">Chief of Staff</h6>
              <p>Sandra Jones</p>
            </div>
            <div className="col-lg-4 mx-auto">
              <img src={Hoo} className="img-fluid" alt="A Woman" />
              <h6 className="h4">Head of Operations</h6>
              <p>Regina Elliot </p>
            </div>
          </div>
        </section>
      </Container>
      <Footer />
    </div>
  );
};

export default Insight;
