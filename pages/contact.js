import fs from "fs";
import path from "path";

import Navbar from "../components/Navbar";
import PricingTable from "../components/PricingTable";
import Footer from "../components/Footer";
import { useState } from "react";

export async function getStaticProps() {
  const galleryDirectory = path.join(process.cwd(), "public/images/gallery");
  const folders = fs.readdirSync(galleryDirectory);
  return {
    props: {
      folders,
    },
  };
}

export default function Contact(props) {
  const [height, setHeight] = useState("2000px");
  const [pricingTables] = useState([
    {
      name: "Portrait Photography",
      description: "glamor, couples, family, animals",
      deals: [
        {
          name: "Small",
          color: "is-warning",
          currency: "Kr",
          price: "1500",
          featuresValues: [
            "1 Location",
            "20 Unedited photos",
            "10 Light photoshopped",
            "2 Photoshopped",
            "1 Professional retouching",
          ],
        },
        {
          name: "Medium",
          color: "is-info",
          currency: "Kr",
          price: "2000",
          featuresValues: [
            "2 - 3 Location",
            "50 Unedited photos",
            "20 Light photoshopped",
            "5 Photoshopped",
            "2 Professional retouching",
          ],
        },
        {
          name: "Large",
          color: "is-danger",
          currency: "Kr",
          price: "4000",
          featuresValues: [
            "4 + Location",
            "All (100 +) Unedited photos",
            "50 Light photoshopped",
            "10 Photoshopped",
            "5 Professional retouching",
          ],
        },
      ],
    },
    {
      name: "Wedding Photography",
      description:
        "Taking picture during all the ceremonie according to the deal",
      deals: [
        {
          name: "Small",
          color: "is-warning",
          currency: "Kr",
          price: "6500",
          featuresValues: [
            "4 Hours of work",
            "All Unedited photos",
            "100 Light photoshopped",
            "10 Photoshopped",
            "5 Professional retouching",
          ],
        },
        {
          name: "Medium",
          color: "is-info",
          currency: "Kr",
          price: "10000",
          featuresValues: [
            "8 Hours of work",
            "All Unedited photos",
            "150 Light photoshopped",
            "20 Photoshopped",
            "10 Professional retouching",
          ],
        },
        {
          name: "Large",
          color: "is-danger",
          currency: "Kr",
          price: "13000",
          featuresValues: [
            "12 Hours of work",
            "All Unedited photos",
            "200 Light photoshopped",
            "50 Photoshopped",
            "15 Professional retouching",
          ],
        },
      ],
    },
  ]);
  // const [activePricingTable, setActivePricingTable] = useState(
  //   pricingTables[0]
  // );
  // function switchPricingTable(value) {
  //   setHeight("0px");
  //   setTimeout(() => {
  //     setActivePricingTable(pricingTables[value]);
  //     setHeight("2000px");
  //   }, 1150);
  // }
  return (
    <>
      <section
        className="hero is-bold"
        style={{
          backgroundColor: "#2c3e50",
          backgroundImage: `url(/images/contactBackground/index.jpg)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <Navbar page="contact" albums={props.folders} />
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-2 has-text-white">Prices</h1>
            <div className="container">
              {/* <div className="select">
                <select
                  onChange={(event) => {
                    switchPricingTable(event.target.value);
                  }}
                >
                  {pricingTables.map((pricingTable, index) => (
                    <option value={`${index}`} key={index}>
                      {pricingTable.name}
                    </option>
                  ))}
                </select>
              </div> */}
              <div
                className="container is-fluid"
                style={{
                  overflow: "hidden",
                  maxHeight: height,
                  transition: "max-height 1.15s ease-in-out",
                }}
              >
                {pricingTables.map((pricingTable) => (
                  <PricingTable data={pricingTable} />
                ))}
              </div>
            </div>
            <hr />
            <h1 className="title is-2 has-text-white">Contact</h1>
            <div className="columns">
              <div className="column is-1"></div>
              <div className="column is-8">
                <div
                  className="columns box"
                  style={{ backgroundColor: "rgba(47, 53, 66, 0.8)" }}
                >
                  <div className="column is-6 has-text-white">
                    <p className="title is-6 has-text-white">Contact Info</p>
                    <hr />
                    <div className="content container is-fluid">
                      <p>
                        <b className="heading has-text-white">Name </b>
                        <b> Levani</b>
                      </p>
                      <p>
                        <b className="heading has-text-white">Surname </b>
                        <b> Levanidze</b>
                      </p>
                      <p>
                        <b className="heading has-text-white">Phone </b>
                        <b> 43 45 65 32 76</b>
                      </p>
                      <p>
                        <b className="heading has-text-white">E-mail </b>
                        <b> ArtofLevanidze@gmail.com</b>
                      </p>
                    </div>
                    {/* <form>
                  <div className="field">
                    <div className="control">
                      <input
                        className="input is-dark"
                        type="text"
                        placeholder="Name"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input
                        className="input is-dark"
                        type="text"
                        placeholder="E-mail"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <textarea
                        className="textarea is-dark"
                        placeholder="Message"
                      ></textarea>
                    </div>
                  </div>
                  <button className="button is-info">Send</button>
                </form> */}
                  </div>
                  <div className="column">
                    <figure className="image">
                      <img
                        className="is-rounded"
                        src="/images/profil.jpg"
                        style={{
                          border: "3px solid white",
                          boxShadow:
                            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                        }}
                      />
                    </figure>
                  </div>
                </div>
              </div>
              <div className="column"></div>
            </div>
          </div>
        </div>
        <Footer color="white" />
      </section>
    </>
  );
}
