import React from "react";
import ahad from "../assets/images/ahad.jpg";

function Hero() {
  let heroImg = true;
  return (
    <div>
      <h2>This is Hero Page</h2>

      {(() => {
        if (heroImg) {
          return <img src={ahad} alt="Ahad" height={300} />;
        } else {
          return <p>There is no hero image</p>;
        }
      })()}
    </div>
  );
}

export default Hero;
