import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import VendingMachine from "./VendingMachine";

function BdayCakePretz() {
  return (
    <div>
      <h1>The Best Pretzel Flavor EVER: Birthday Cake Pretz</h1>
      <img
        src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnd3N3J1OHVqd2wxNjNzYjUwMDFkZmQzYWRucmZlMWlocGRkbXlycyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/8L0Pky6C83SzkzU55a/giphy.webp"
        alt="404 dead pac-man ghost"
      ></img>
      <Link to="/">Back Home</Link>
      {/* <Routes>
        <Route path="/" element={<VendingMachine />} />
      </Routes> */}
    </div>
  );
}

export default BdayCakePretz;
