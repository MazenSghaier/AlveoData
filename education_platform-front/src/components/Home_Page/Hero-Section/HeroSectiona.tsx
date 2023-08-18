import React from "react";
import Button from "@mui/material/Button";

const HeroSectiona: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    position: "relative",
    margin: "2rem auto",
    width: "85%",
    padding: "4rem",
    display: "flex",
    justifyContent: "center", // Center horizontally
    alignItems: "center",
    borderRadius: "1rem",
    backgroundColor: "#35bbe3", // Set background color directly
  };

  const contentStyle: React.CSSProperties = {
    textAlign: "center",
    maxWidth: "600px", // Adjust for responsiveness
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: "#fff",
    color: "#35bbe3",
    borderRadius: "2rem",
    padding: "0.8rem 2rem",
  };

  return (
    <section>
      <div style={containerStyle}>
        <div style={contentStyle}>
          <h2 className="mb-6 text-2xl lg:text-5xl font-bold text-white">
            Anytime Anywhere <br /> Learn on your <br /> Suitable Schedule
          </h2>
          <p className="mb-8 text-sm lg:text-xl text-white">
            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
            Aut saepe voluptatum earum delectus <br /> deserunt id iste, quas
            officiis et repellat!
          </p>
          <div className="search">
            <Button style={buttonStyle}>Start Now</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectiona;
