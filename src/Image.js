import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import birds from "./bg.png";

export default function Image() {
  return (
    <div className="Image">
      {" "}
      <img src={birds} alt="birds" className="img-fluid" />
    </div>
  );
}
