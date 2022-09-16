import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

import Container from "../../UI/container/container";
import Footer from "../../UI/footer/footer";
import AboutImage from "../../../assets/images/about-image.jpeg";
import rooms from "../../STORE/roomsData.json";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import { BiSpa } from "@react-icons/all-files/bi/BiSpa";
import { RiRestaurant2Line } from "@react-icons/all-files/ri/RiRestaurant2Line";
import { FaSwimmingPool } from "@react-icons/all-files/fa/FaSwimmingPool";
import { CgGym } from "@react-icons/all-files/cg/CgGym";
import { MdLocalLaundryService } from "@react-icons/all-files/md/MdLocalLaundryService";

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
            <Link to="/rooms" rel="noopener noreferrer">
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

        <section className="mt-5 rooms">
          <h2 className="text-center">Rooms & Services</h2>
          <Splide
            aria-label="room"
            options={{
              fixedWidth: "400px",
              // perPage: 3,
              focus: "center",
              autoplay: true,
              type: "loop",
            }}
          >
            {rooms.map((room) => (
              <SplideSlide key={room.id}>
                <div className="img-card">
                  <img src={room.img} className="img-fluid" alt="A Room" />
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </section>
        <section className="services slider-area">
          <div className="d-md-flex justify-content-between text-center wrapper">
            <div className="item">
              <RiRestaurant2Line className="service-icon" />
              <h5>Bar & Restaurant</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="item">
              <BiSpa className="service-icon" />
              <h5>Spa</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="item">
              <FaSwimmingPool className="service-icon" />
              <h5>Pool</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="item">
              <CgGym className="service-icon" />
              <h5>Gym</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="item">
              <MdLocalLaundryService className="service-icon" />
              <h5>Laundry</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </section>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
