import React from "react";
import "./intro.css";
import topmost from "../../assets/topmost.png";
import RedLine from "../RedLine/RedLine";

export default function Intro() {
  return (
    <section className="intro">
      <div className="bgImage">
        <div className="content">
          <img src={topmost} alt="Not found" />
          <RedLine />
          <h4>Super Gaming Laptop</h4>
          <p className="secondary-text">
            Designed For Masters
            <br /> Are you a Master?
          </p>
        </div>
      </div>
    </section>
  );
}
