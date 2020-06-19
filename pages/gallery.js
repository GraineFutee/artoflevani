import Navbar from "../components/Navbar";
import Album from "../components/Album";

export default function Gallery() {
  return (
    <section
      className="hero is-fullheight is-dark is-bold"
      style={{ boxShadow: "5px 5px 5px 5px #d1ccc0" }}
    >
      <Navbar />
      <div className="hero-body" style={{ padding: "0" }}>
        <div className="container">
          <div className="columns is-gapless">
            <div className="column">
              <Album album="Cityscape" pictures="8" date="10/2019" />
            </div>
            <div className="column">
              <Album album="Landscape" pictures="23" date="03/2019" />
            </div>
            <div className="column">
              <Album album="Portraits" pictures="15" date="08/2019" />
            </div>
          </div>
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
