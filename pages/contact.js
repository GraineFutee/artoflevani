import Navbar from "../components/Navbar";
import PricingTable from "../components/PricingTable";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Contact() {
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
  const [activePricingTable, setActivePricingTable] = useState(
    pricingTables[0]
  );
  function switchPricingTable(value) {
    setHeight("0px");
    setTimeout(() => {
      setActivePricingTable(pricingTables[value]);
      setHeight("2000px");
    }, 1150);
  }
  return (
    <>
      <section
        className="hero is-danger is-bold"
        // style={{
        //   backgroundColor: "#2c3e50",
        //   backgroundImage: `url(/images/backgrounds/joan-villalon-otG-Gi4ebDo-unsplash.jpg)`,
        //   backgroundPosition: "center",
        //   backgroundSize: "cover",
        //   backgroundRepeat: "no-repeat",
        //   backgroundAttachment: "fixed",
        // }}
      >
        <Navbar page="contact" />
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-2">Prices</h1>
            <div className="container">
              <div className="select">
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
              </div>
              <div
                className="container is-fluid"
                style={{
                  overflow: "hidden",
                  maxHeight: height,
                  transition: "max-height 1.15s ease-in-out",
                }}
              >
                <PricingTable data={activePricingTable} />
              </div>
            </div>
            <hr />
            <h1 className="title is-2">Contact</h1>

            <div className="columns box has-background-danger">
              <div className="column is-1"></div>
              <div className="column">
                <p className="title is-6">Contact Info</p>
                <div className="content">
                  <p>Phone : 43 45 65 32 76</p>
                  <p>E-mail : ArtofLevanidze@gmail.com</p>
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
                    src="/images/gallery/Portraits/index.jpg"
                  />
                </figure>
              </div>
              <div className="column is-1"></div>
            </div>
          </div>
        </div>
        <Footer color="white" />
      </section>
    </>
  );
}
