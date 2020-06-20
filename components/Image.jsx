import React, { useState } from "react";
import Link from "next/link";

export default function Album(props) {
  const [opacity, setOpacity] = useState("0");
  return (
    <figure className="image" style={{ padding: "0.3rem" }}>
      <img src={`/images/gallery/${props.album}/${props.image}`} />
      <div
        className="hero-body is-overlay"
        onMouseEnter={() => {
          setOpacity("0.6");
        }}
        onMouseLeave={() => {
          setOpacity("0");
        }}
        style={{
          backgroundColor: "#303952",
          opacity: opacity,
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        <div className="has-text-centered has-text-white">
          <p>
            <b>{props.name}</b>
          </p>
        </div>
      </div>
    </figure>
  );
}
