import fs from "fs";
import path from "path";
import React, { useEffect, useState } from "react";

import Navbar from "../components/Navbar";

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  const backgroundsImgDirectory = path.join(
    process.cwd(),
    "public/images/backgrounds"
  );
  const images = fs.readdirSync(backgroundsImgDirectory);

  return {
    props: {
      images,
    },
  };
}

export default function Home(props) {
  const [listBackgrounds] = useState(props.images);
  const [background, setBackground] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("background changed");
      if (background > listBackgrounds.length - 2) setBackground(0);
      else setBackground(background + 1);
    }, 3333);
    return () => clearInterval(interval);
  }, [background, listBackgrounds]);

  return (
    <section
      id="welcome"
      className="hero is-fullheight welcome"
      style={{
        backgroundColor: "#2c3e50",
        backgroundImage: `url(/images/backgrounds/${listBackgrounds[background]})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        WebkitTransition: "background-image 3s ease-in-out",
        transition: "background-image 3s ease-in-out",
        // transition: "background-image 2s",
      }}
    >
      <Navbar />
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title has-text-white is-1">Art of Levani </h1>
        </div>
      </div>
      <div className="title is-5 has-text-white" style={{ margin: "10px" }}>
        <i style={{ margin: "5px" }} className="fab fa-facebook"></i>
        <i style={{ margin: "5px" }} className="fab fa-instagram"></i>
        <i style={{ margin: "5px" }} className="fab fa-500px"></i>
      </div>
    </section>
  );
}
