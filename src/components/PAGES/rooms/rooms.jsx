import React from "react";
import "./rooms.css";

import Container from "../../UI/container/container";
import bookingData from "../../STORE/bookingData.json";
import Footer from "../../UI/footer/footer";

const Rooms = (props) => {
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
        <div className="row book-room">
          {bookingData.map((rooms) => (
            <div className="col-md-4 mx-auto mt-5" key={rooms.id}>
              <div className="card border-0 shadow">
                <img src={rooms.img} className="img-fluid" alt="Room" />
                <div className="card-body pb-5">
                  <h5 className="card-title text-center">{rooms.name}</h5>
                  <p className="card-text">$ {rooms.price}</p>
                  <div className="text-center">
                    <button
                      className="btn"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Book
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header border-0 text-center">
                <h5 className="modal-title" id="exampleModalLabel">
                  Book a Reservation
                </h5>
                <button
                  type="button"
                  className="btn-close fw-bold text-danger"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form></form>
              </div>
              <div className="modal-footer border-0">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Rooms;
