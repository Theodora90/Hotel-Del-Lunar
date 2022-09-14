import React from "react";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Slide = () => {
  return (
    <div>
      <Splide aria-label="My Favorite Images">
        <div className="img-card">
          <img src="" className="img-fluid" alt="A Room" />
        </div>
      </Splide>
    </div>
  );
};

export default Slide;
