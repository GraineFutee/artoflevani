import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <section
        className="hero is-danger is-bold"
        style={{ boxShadow: "5px 5px 5px 5px #d1ccc0" }}
      >
        <Navbar page="contact" />
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-2">Prices</h1>
            <div className="container">
              <h2 className="title is-5">Package 1</h2>
              <p className="subtitle is-6">
                Portrait Photography{" "}
                <small>(glamor, couples, family, animals)</small>
              </p>
              <div className="pricing-table is-comparative">
                <div className="pricing-plan is-features">
                  <div className="plan-header">Features</div>
                  <div className="plan-price">
                    <span className="plan-price-amount">&nbsp;</span>
                  </div>
                  <div className="plan-items">
                    <div className="plan-item">Location</div>
                    <div className="plan-item">Unedited photos</div>
                    <div className="plan-item">Light photoshopped</div>
                    <div className="plan-item">Photoshopped</div>
                    <div className="plan-item">Professional retouching</div>
                  </div>
                  <div className="plan-footer"></div>
                </div>

                <div className="pricing-plan is-warning is-active">
                  <div className="plan-header">Small</div>
                  <div className="plan-price">
                    <span className="plan-price-amount">
                      <span className="plan-price-currency">Kr</span>1500
                    </span>
                  </div>
                  <div className="plan-items">
                    <div className="plan-item" data-feature="Location">
                      1
                    </div>
                    <div className="plan-item" data-feature="Unedited photos">
                      20
                    </div>
                    <div
                      className="plan-item"
                      data-feature="Light photoshopped"
                    >
                      10
                    </div>
                    <div className="plan-item" data-feature="Photoshopped">
                      2
                    </div>
                    <div
                      className="plan-item"
                      data-feature="Professional retouching"
                    >
                      1
                    </div>
                  </div>
                </div>

                <div className="pricing-plan is-info">
                  <div className="plan-header">Medium</div>
                  <div className="plan-price">
                    <span className="plan-price-amount">
                      <span className="plan-price-currency">Kr</span>2000
                    </span>
                  </div>
                  <div className="plan-items">
                    <div className="plan-item" data-feature="Location">
                      2 - 3
                    </div>
                    <div className="plan-item" data-feature="Unedited photos">
                      50
                    </div>
                    <div
                      className="plan-item"
                      data-feature="Light photoshopped"
                    >
                      20
                    </div>
                    <div className="plan-item" data-feature="Photoshopped">
                      5
                    </div>
                    <div
                      className="plan-item"
                      data-feature="Professional retouching"
                    >
                      2
                    </div>
                  </div>
                </div>

                <div className="pricing-plan is-danger">
                  <div className="plan-header">Large</div>
                  <div className="plan-price">
                    <span className="plan-price-amount">
                      <span className="plan-price-currency">Kr</span>4000
                    </span>
                  </div>
                  <div className="plan-items">
                    <div className="plan-item" data-feature="Location">
                      4 +
                    </div>
                    <div className="plan-item" data-feature="Unedited photos">
                      All (100 +)
                    </div>
                    <div
                      className="plan-item"
                      data-feature="Light photoshopped"
                    >
                      50
                    </div>
                    <div className="plan-item" data-feature="Photoshopped">
                      10
                    </div>
                    <div
                      className="plan-item"
                      data-feature="Professional retouching"
                    >
                      5
                    </div>
                  </div>
                </div>
              </div>
              <h2 className="title is-5">Package 2</h2>
              <p className="subtitle is-6">Wedding Photography</p>
              <div className="pricing-table is-comparative">
                <div className="pricing-plan is-features">
                  <div className="plan-header">Features</div>
                  <div className="plan-price">
                    <span className="plan-price-amount">&nbsp;</span>
                  </div>
                  <div className="plan-items">
                    <div className="plan-item">Hours of work</div>
                    <div className="plan-item">Unedited photos</div>
                    <div className="plan-item">Light photoshopped</div>
                    <div className="plan-item">Photoshopped</div>
                    <div className="plan-item">Professional retouching</div>
                  </div>
                  <div className="plan-footer"></div>
                </div>

                <div className="pricing-plan is-warning">
                  <div className="plan-header">Small</div>
                  <div className="plan-price">
                    <span className="plan-price-amount">
                      <span className="plan-price-currency">Kr</span>6500
                    </span>
                  </div>
                  <div className="plan-items">
                    <div className="plan-item" data-feature="Location">
                      4
                    </div>
                    <div className="plan-item" data-feature="Unedited photos">
                      All
                    </div>
                    <div
                      className="plan-item"
                      data-feature="Light photoshopped"
                    >
                      100
                    </div>
                    <div className="plan-item" data-feature="Photoshopped">
                      10
                    </div>
                    <div
                      className="plan-item"
                      data-feature="Professional retouching"
                    >
                      5
                    </div>
                  </div>
                </div>

                <div className="pricing-plan is-info is-active">
                  <div className="plan-header">Medium</div>
                  <div className="plan-price">
                    <span className="plan-price-amount">
                      <span className="plan-price-currency">Kr</span>10000
                    </span>
                  </div>
                  <div className="plan-items">
                    <div className="plan-item" data-feature="Location">
                      8
                    </div>
                    <div className="plan-item" data-feature="Unedited photos">
                      All
                    </div>
                    <div
                      className="plan-item"
                      data-feature="Light photoshopped"
                    >
                      150
                    </div>
                    <div className="plan-item" data-feature="Photoshopped">
                      20
                    </div>
                    <div
                      className="plan-item"
                      data-feature="Professional retouching"
                    >
                      10
                    </div>
                  </div>
                </div>

                <div className="pricing-plan is-danger">
                  <div className="plan-header">Large</div>
                  <div className="plan-price">
                    <span className="plan-price-amount">
                      <span className="plan-price-currency">Kr</span>13000
                    </span>
                  </div>
                  <div className="plan-items">
                    <div className="plan-item" data-feature="Location">
                      12
                    </div>
                    <div className="plan-item" data-feature="Unedited photos">
                      All
                    </div>
                    <div
                      className="plan-item"
                      data-feature="Light photoshopped"
                    >
                      200
                    </div>
                    <div className="plan-item" data-feature="Photoshopped">
                      50
                    </div>
                    <div
                      className="plan-item"
                      data-feature="Professional retouching"
                    >
                      15
                    </div>
                  </div>
                </div>
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
                <form>
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
                </form>
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
