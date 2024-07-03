import React from "react";
import { Link } from "react-router-dom";
function Reeses() {
  return (
    <div>
      <h1>Chocolate & Peanut Butter BFFS Reeses</h1>
      <img
        src="https://media1.giphy.com/media/u1kixTDeM1zfLg9zXE/200.webp?cid=790b7611w7rxaawjtif2wlorvm19v5vs69orrdn4npmqqcl7&ep=v1_gifs_search&rid=200.webp&ct=g"
        alt="fridge full of reeses"
      ></img>
      <Link to="/">Back Home</Link>
    </div>
  );
}

export default Reeses;
