import React from "react";

export default function Album(props) {
  return (
    <div
      className="is-size-5"
      style={{ margin: "10px" }}
      style={{ zIndex: "10" }}
    >
      <a
        className={`has-text-${props.color}`}
        href="https://www.facebook.com/levanidze"
        target="_blank"
        rel="noreferrer noopener"
      >
        <i style={{ margin: "5px" }} className="fab fa-facebook"></i>
      </a>
      <a
        className={`has-text-${props.color}`}
        href="https://www.instagram.com/artoflevanidze/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <i style={{ margin: "5px" }} className="fab fa-instagram"></i>
      </a>
      <a
        className={`has-text-${props.color}`}
        href="https://500px.com/levanidze"
        target="_blank"
        rel="noreferrer noopener"
      >
        <i style={{ margin: "5px" }} className="fab fa-500px"></i>
      </a>
      <i
        className={`has-text-${props.color} is-size-7 is-pulled-right`}
        style={{ margin: "5px", marginRight: "15px" }}
      >
        <b>&copy;</b> Levani Levanidze
      </i>
    </div>
  );
}
