import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutMe() {
  return (
    <>
      <section
        className="hero is-success is-bold"
        style={{ boxShadow: "5px 5px 5px 5px #d1ccc0" }}
      >
        <Navbar page="about_me" />
        <div className="hero-body">
          <div className="container">
            <div className="container">
              <div className="columns">
                <div className="column is-1"></div>
                <div className="column">
                  <figure
                    className="image is-4by5"
                    style={{
                      backgroundColor: "#2c3e50",
                      backgroundImage: `url(/images/gallery/Portraits/index.jpg)`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></figure>
                </div>
                <div className="column">
                  <div className="content is-small">
                    <p className="title is-6">Me</p>
                    <p>
                      Exquisite cordially mr happiness of neglected distrusts.
                      Boisterous impossible unaffected he me everything. Is fine
                      loud deal an rent open give. Find upon and sent spot song
                      son eyes. Do endeavor he differed carriage is learning my
                      graceful. Feel plan know is he like on pure. See burst
                      found sir met think hopes are marry among. Delightful
                      remarkably new assistance saw literature mrs favourable.
                    </p>
                    <p className="title is-6">contact</p>
                    <p>
                      <b>Mail. </b> ArtofLevanidze@gmail.com
                    </p>
                    <p>
                      <b>Tel. </b> 04 86 97 85 74
                    </p>
                    <p className="title is-6">Work</p>
                    <p>
                      Talking chamber as shewing an it minutes. Trees fully of
                      blind do. Exquisite favourite at do extensive listening.
                      Improve up musical welcome he. Gay attended vicinity
                      prepared now diverted. Esteems it ye sending reached as.
                      Longer lively her design settle tastes advice mrs off who.
                    </p>
                  </div>
                </div>
                <div className="column is-1"></div>
              </div>
              <h1 className="title is-4">Certifications</h1>
              <div className="columns">
                <div className="column">
                  <figure
                    className="image is-4by3"
                    style={{
                      backgroundColor: "#2c3e50",
                      backgroundImage: `url(/images/backgrounds/aditya-joshi-KWTdFcVbhgA-unsplash.jpg)`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></figure>
                </div>
                <div className="column">
                  <figure
                    className="image is-4by3"
                    style={{
                      backgroundColor: "#2c3e50",
                      backgroundImage: `url(/images/backgrounds/aditya-joshi-KWTdFcVbhgA-unsplash.jpg)`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></figure>
                </div>
                <div className="column">
                  <figure
                    className="image is-4by3"
                    style={{
                      backgroundColor: "#2c3e50",
                      backgroundImage: `url(/images/backgrounds/aditya-joshi-KWTdFcVbhgA-unsplash.jpg)`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></figure>
                </div>
                <div className="column">
                  <figure
                    className="image is-4by3"
                    style={{
                      backgroundColor: "#2c3e50",
                      backgroundImage: `url(/images/backgrounds/aditya-joshi-KWTdFcVbhgA-unsplash.jpg)`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></figure>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}
