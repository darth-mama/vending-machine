import React from "react";
import { Link } from "react-router-dom";
function Twix() {
  return (
    <div>
      <h1>Chocolaty, Cookie, Gooey Twix</h1>
      <img
        src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTN6cWVoZHBtNXJmbGkydmM0dXg3MTcxdTh0aXMzcTA1dXYzZW1sZyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ei9pMw3x3MYVhtlBla/200.webp"
        alt="Twix bars broken in half"
      ></img>
      <Link to="/">Back Home</Link>
    </div>
  );
}

export default Twix;
