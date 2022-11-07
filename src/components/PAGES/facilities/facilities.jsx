import React, { useState, useEffect } from "react";
import "./facilities.css";

import Container from "../../UI/container/container";
import Footer from "../../UI/footer/footer";

import axios from "axios";

const Facilities = () => {
  const [facilities, setFacilities] = useState([]);

  useEffect(() => {
    try {
      const url = `https://633af58be02b9b64c61be56a.mockapi.io/Facilities`;
      axios.get(url).then((response) => {
        setFacilities(response.data);
      });
    } catch (error) {}
  }, []);

  return (
    <div>
      <div className="facilities-hero">
        <div className="text-container">
          <h1 className="display-2">
            Hotels can be so much more than a place to rest your head, <br />
            Let us show you what we mean
          </h1>
        </div>
      </div>
      <Container>
        <div className="row facilities">
          {facilities.map((facility) => (
            <div className="col-md-4 mx-auto mt-5" key={facility.id}>
              <div className="card border-0 shadow">
                <img
                  src={facility.img}
                  className="img-fluid h-50"
                  alt="Facility"
                />
                <div className="card-body pb-5">
                  <h5 className="card-title text-center">{facility.name}</h5>
                  <p>{facility.description}</p>
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

export default Facilities;
