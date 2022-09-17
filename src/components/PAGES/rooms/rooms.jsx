import React from "react";
import "./rooms.css";

import Container from "../../UI/container/container";
import one from "../../../assets/images/rooms.jpeg";

const Rooms = () => {
  return (
    <div>
      <div className="room-hero">
        <div className="text-container">
          <h1 className="display-2">
            Hotels can be so much more than a place to rest your head, <br />
            Let us show you what we mean
          </h1>
        </div>
      </div>
      <Container>
        <div className="row mt-5">
          <div className="col-lg-6">
            <div class="card">
              <img src={one} class="card-img-top" alt="Room" />
              <div class="card-body">
                <h5 class="card-title text-center">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div class="card">
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Rooms;
