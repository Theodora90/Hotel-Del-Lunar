import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

import Container from "../../UI/container/container";
import AboutImage from "../../../assets/images/about-image.jpeg";

const Home = () => {
  return (
    <div>
      <div className="hero-img">
        <div className="action-container">
          <h1 className="display-2">
            Escape to a place where you can <br /> relax and unwind, rejuvenate,
            and reconnect
          </h1>
          <div className="text-center pt-5">
            <Link to="/rooms" target="_blank" rel="noopener noreferrer">
              Book a reservation
            </Link>
          </div>
        </div>
      </div>
      <Container>
        <div className="row mt-5 home-about">
          <div className="col-lg-6 mx-auto mt-4">
            <h3>Hotel Del Lunar</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              facere adipisci minima architecto porro voluptatibus molestiae ut
              vel qui tenetur similique veritatis exercitationem sint
              doloremque, esse possimus? Rem, odio molestiae? Porro natus, sequi
              reiciendis, accusantium illo veritatis laudantium et odit a omnis
              enim. Minus amet quidem aperiam earum repellendus facilis
              quibusdam, nisi corrupti aut eum facere assumenda, modi,
              necessitatibus natus. Eaque maxime consectetur, nesciunt, vel
              labore natus explicabo dicta excepturi dolores officiis officia
              soluta aut quibusdam ipsam dignissimos ex aspernatur ad animi, sit
              veniam nobis corrupti aliquam voluptate. Debitis, provident.
              Quidem veniam nihil ullam laboriosam, ex repudiandae ad asperiores
              quaerat dolor. Esse modi dolores maxime voluptates vitae
              reprehenderit quod, facere molestias perferendis consequuntur
              ratione, placeat voluptate deleniti iusto eligendi! Eaque!
            </p>
          </div>
          <div className="col-lg-5 d-flex align-items-center">
            <img src={AboutImage} className="img-fluid" alt="Hotel Lobby" />
          </div>
        </div>

        <section></section>
      </Container>
    </div>
  );
};

export default Home;