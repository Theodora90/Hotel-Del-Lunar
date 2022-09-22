import React, { useState } from "react";
import "./rooms.css";

import Container from "../../UI/container/container";
import bookingData from "../../STORE/bookingData.json";
import Footer from "../../UI/footer/footer";
// import Pagination from "../../UI/pagination/pagination";
import Bookings from "../../UI/forms/booking-form";
import Currency from "../../UI/forms/currency-form";

const Rooms = (props) => {
  const [roomId, setRoomId] = useState();
  const [roomName, setRoomName] = useState();
  const [roomPrice, setRoomPrice] = useState();

  const handleThousandSeparator = (price) => {
    const currency = "$";
    return (
      currency + " " + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    );
  };

  const handleDefaultCurrency = () => {
    var myHeaders = new Headers();
    myHeaders.append("apikey", "CcqkvcIb1iisj0nIxTscjUrRHQ7lqkIK");

    var requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };

    var one = "EUR";
    var two = "GBP";
    var money = "25";

    fetch(
      `https://api.apilayer.com/exchangerates_data/convert?to=${one}&from=${two}&amount=${money}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  const handleBookingData = (id, name, price) => {
    setRoomId(id);
    setRoomName(name);
    setRoomPrice(price);
  };

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
        <Currency />
        <Bookings id={roomId} name={roomName} price={roomPrice} />
        <div className="row book-room">
          {bookingData.map((room) => (
            <div className="col-md-4 mx-auto mt-5" key={room.id}>
              <div className="card border-0 shadow">
                <img src={room.img} className="img-fluid" alt="Room" />
                <div className="card-body pb-5">
                  <h5 className="card-title text-center">{room.name}</h5>
                  <p>{room.description}</p>
                  <p className="card-text text-center">
                    {handleThousandSeparator(room.price)}
                  </p>
                  <div className="text-center">
                    <button
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={() => {
                        handleBookingData(room.id, room.name, room.price);
                      }}
                    >
                      Book
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Rooms;
