import fs from "fs";
import path from "path";
import React, { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
  const [background2, setBackground2] = useState(1);
  const [zIndex2, setZIndex2] = useState(2);
  const [opacity, setOpacity] = useState("1");

  useEffect(() => {
    const interval = setInterval(() => {
      setZIndex2(zIndex2 * -1);
      if (1 > zIndex2) {
        setOpacity("1");
        setTimeout(() => {
          if (background2 + 2 > listBackgrounds.length - 1) {
            if (background2 + 1 > listBackgrounds.length - 1) setBackground2(0);
            else setBackground2(background2 + 1);
          } else setBackground2(background2 + 2);
        }, 1000);
      } else {
        setOpacity("0");
        setTimeout(() => {
          if (background + 2 > listBackgrounds.length - 1) {
            if (background + 1 > listBackgrounds.length - 1) setBackground(0);
            else setBackground(background + 1);
          } else setBackground(background + 2);
        }, 1000);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [background, listBackgrounds, zIndex2, background2, opacity]);

  return (
    <section id="welcome" className="hero is-fullheight welcome">
      <section
        className="is-overlay"
        style={{
          backgroundColor: "#2c3e50",
          backgroundImage: `url(/images/backgrounds/${listBackgrounds[background]})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          zIndex: "2",
          opacity: opacity,
          transition: "opacity 1s ease-in-out",
        }}
      ></section>
      <section
        className="is-overlay"
        style={{
          backgroundColor: "#2c3e50",
          backgroundImage: `url(/images/backgrounds/${listBackgrounds[background2]})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          zIndex: "1",
        }}
      ></section>
      <Navbar />
      <div className="hero-body" style={{ zIndex: "10" }}>
        <div className="container has-text-centered">
          <h1 className="title has-text-white is-1">Art of Levani </h1>
        </div>
      </div>
      <Footer color="white" />
    </section>
  );
}
