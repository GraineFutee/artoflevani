import React, { useState } from "react";

export default function Album(props) {
  const [opacity, setOpacity] = useState("0");
  const [scale, setScale] = useState("1");
  return (
    <figure
      className="image is-2by3"
      style={{
        backgroundColor: "#2c3e50",
        backgroundImage: `url(/images/gallery/${props.album}/index.jpg)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        margin: "2%",
        transform: `scale(${scale})`,
        transition: "transform 0.5s ease-in-out",
      }}
    >
      <div
        className="has-text-centered is-overlay"
        onMouseEnter={() => {
          setOpacity("0.7");
          setScale("1.05");
        }}
        onMouseLeave={() => {
          setOpacity("0");
          setScale("1");
        }}
        style={{
          background:
            "linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(48,57,82,0.6535801820728291) 50%, rgba(48,57,82,1) 100%)",
          opacity: opacity,
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        <p className="title has-text-white">{props.album}</p>
        <p>{props.pictures} Pictures</p>
        <p>{props.date}</p>
      </div>
    </figure>
  );
}
