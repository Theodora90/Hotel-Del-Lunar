import React, { useState, useEffect } from "react";
import "./booking-form.css";
import Modal from "../modal/modal";
import axios from "axios";

const Bookings = (props) => {
  const [booked, setBooked] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [date, setDate] = useState("");
  const [roomId, setRoomId] = useState(props.id);
  const [roomName, setRoomName] = useState(props.name);
  const [roomPrice, setRoomPrice] = useState(props.price);

  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  const handleBooking = () => {
    try {
      const url = `https://633af58be02b9b64c61be56a.mockapi.io/Booked`;
      axios.post(url, {
        ...booked,
      });
    } catch (error) {}
  };

  return (
    <Modal>
      <div>
        <form>
          <div className="mb-3">
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              placeholder="Full Name"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Email"
            />
          </div>
          <div className="mb-3">
            <input
              type="tel"
              id="phone"
              name="phone"
              className="form-control"
              placeholder="Phone Number"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="Date"
              id="date"
              name="date"
              className="form-control"
              placeholder="Date"
              onChange={handleChange}
            />
          </div>
          <div className="d-grid gap-2">
            <button onClick={handleBooking}>Make Reservation</button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default Bookings;
