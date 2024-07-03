import React from "react";
import { Link } from "react-router-dom";

const VendingMachine = () => {
  return (
    <div className="VendingMachine">
      <h1>Feed Me!</h1>
      <img
        src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTR4bjhkdmF5NHVhcDFtdmg0cThkcmU4c2UzcWNvcDc5NjQzd292eCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/piwLYTTDYHYQzFEySf/giphy.webp"
        alt="baby mouse from T&J"
      />
      <h1>What do you want to eat?</h1>
      <h1>
        <Link to="/twix">twix</Link>
      </h1>
      <h1>
        <Link to="/reeses">reeses</Link>
      </h1>
      <h1>
        <Link to="/bdaycakepretz">bdaycakepretz</Link>
      </h1>
    </div>
  );
};
export default VendingMachine;
