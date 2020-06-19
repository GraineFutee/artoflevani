import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <>
      <section
        className="hero is-dark is-bold"
        style={{ boxShadow: "5px 5px 5px 5px #d1ccc0" }}
      >
        <Navbar />
        <div className="hero-body">
          <div className="container">
            <h1 className="title has-text-white is-1">Prices & Contact</h1>
          </div>
        </div>
      </section>
      <section>
        <h1 className="title is-2">Prices</h1>
        <div className="container">
          <h2 className="title is-5">Package 1</h2>
          <p className="subtitle is-6">
            Portrait Photography{" "}
            <small>(glamor, couples, family, animals)</small>
          </p>
          <div class="pricing-table is-comparative">
            <div class="pricing-plan is-features">
              <div class="plan-header">Features</div>
              <div class="plan-price">
                <span class="plan-price-amount">&nbsp;</span>
              </div>
              <div class="plan-items">
                <div class="plan-item">Location</div>
                <div class="plan-item">Unedited photos</div>
                <div class="plan-item">Light photoshopped</div>
                <div class="plan-item">Photoshopped</div>
                <div class="plan-item">Professional retouching</div>
              </div>
              <div class="plan-footer"></div>
            </div>

            <div class="pricing-plan is-warning is-active">
              <div class="plan-header">Small</div>
              <div class="plan-price">
                <span class="plan-price-amount">
                  <span class="plan-price-currency">Kr</span>1500
                </span>
              </div>
              <div class="plan-items">
                <div class="plan-item" data-feature="Location">
                  1
                </div>
                <div class="plan-item" data-feature="Unedited photos">
                  20
                </div>
                <div class="plan-item" data-feature="Light photoshopped">
                  10
                </div>
                <div class="plan-item" data-feature="Photoshopped">
                  2
                </div>
                <div class="plan-item" data-feature="Professional retouching">
                  1
                </div>
              </div>
            </div>

            <div class="pricing-plan is-info">
              <div class="plan-header">Medium</div>
              <div class="plan-price">
                <span class="plan-price-amount">
                  <span class="plan-price-currency">Kr</span>2000
                </span>
              </div>
              <div class="plan-items">
                <div class="plan-item" data-feature="Location">
                  2 - 3
                </div>
                <div class="plan-item" data-feature="Unedited photos">
                  50
                </div>
                <div class="plan-item" data-feature="Light photoshopped">
                  20
                </div>
                <div class="plan-item" data-feature="Photoshopped">
                  5
                </div>
                <div class="plan-item" data-feature="Professional retouching">
                  2
                </div>
              </div>
            </div>

            <div class="pricing-plan is-danger">
              <div class="plan-header">Large</div>
              <div class="plan-price">
                <span class="plan-price-amount">
                  <span class="plan-price-currency">Kr</span>4000
                </span>
              </div>
              <div class="plan-items">
                <div class="plan-item" data-feature="Location">
                  4 +
                </div>
                <div class="plan-item" data-feature="Unedited photos">
                  All (100 +)
                </div>
                <div class="plan-item" data-feature="Light photoshopped">
                  50
                </div>
                <div class="plan-item" data-feature="Photoshopped">
                  10
                </div>
                <div class="plan-item" data-feature="Professional retouching">
                  5
                </div>
              </div>
            </div>
          </div>
          <h2 className="title is-5">Package 2</h2>
          <p className="subtitle is-6">Wedding Photography</p>
          <div class="pricing-table is-comparative">
            <div class="pricing-plan is-features">
              <div class="plan-header">Features</div>
              <div class="plan-price">
                <span class="plan-price-amount">&nbsp;</span>
              </div>
              <div class="plan-items">
                <div class="plan-item">Hours of work</div>
                <div class="plan-item">Unedited photos</div>
                <div class="plan-item">Light photoshopped</div>
                <div class="plan-item">Photoshopped</div>
                <div class="plan-item">Professional retouching</div>
              </div>
              <div class="plan-footer"></div>
            </div>

            <div class="pricing-plan is-warning">
              <div class="plan-header">Small</div>
              <div class="plan-price">
                <span class="plan-price-amount">
                  <span class="plan-price-currency">Kr</span>1500
                </span>
              </div>
              <div class="plan-items">
                <div class="plan-item" data-feature="Location">
                  4
                </div>
                <div class="plan-item" data-feature="Unedited photos">
                  All
                </div>
                <div class="plan-item" data-feature="Light photoshopped">
                  100
                </div>
                <div class="plan-item" data-feature="Photoshopped">
                  10
                </div>
                <div class="plan-item" data-feature="Professional retouching">
                  5
                </div>
              </div>
            </div>

            <div class="pricing-plan is-info is-active">
              <div class="plan-header">Medium</div>
              <div class="plan-price">
                <span class="plan-price-amount">
                  <span class="plan-price-currency">Kr</span>2000
                </span>
              </div>
              <div class="plan-items">
                <div class="plan-item" data-feature="Location">
                  8
                </div>
                <div class="plan-item" data-feature="Unedited photos">
                  All
                </div>
                <div class="plan-item" data-feature="Light photoshopped">
                  150
                </div>
                <div class="plan-item" data-feature="Photoshopped">
                  20
                </div>
                <div class="plan-item" data-feature="Professional retouching">
                  10
                </div>
              </div>
            </div>

            <div class="pricing-plan is-danger">
              <div class="plan-header">Large</div>
              <div class="plan-price">
                <span class="plan-price-amount">
                  <span class="plan-price-currency">Kr</span>4000
                </span>
              </div>
              <div class="plan-items">
                <div class="plan-item" data-feature="Location">
                  12
                </div>
                <div class="plan-item" data-feature="Unedited photos">
                  All
                </div>
                <div class="plan-item" data-feature="Light photoshopped">
                  200
                </div>
                <div class="plan-item" data-feature="Photoshopped">
                  50
                </div>
                <div class="plan-item" data-feature="Professional retouching">
                  15
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <h1 className="title is-2">Contact</h1>

        <div className="columns">
          <div className="column is-1"></div>
          <div className="column">
            <p className="title is-6">Contact Info</p>
            <div className="content">
              <p>Phone : 43 45 65 32 76</p>
              <p>E-mail : ArtofLevanidze@gmail.com</p>
            </div>
            <form>
              <div class="field">
                <div class="control">
                  <input class="input is-dark" type="text" placeholder="Name" />
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input
                    class="input is-dark"
                    type="text"
                    placeholder="E-mail"
                  />
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <textarea
                    class="textarea is-dark"
                    placeholder="Message"
                  ></textarea>
                </div>
              </div>
              <button className="button is-info">Send</button>
            </form>
          </div>
          <div className="column">
            <figure className="image is-1by1">
              <img
                className="is-rounded"
                src="/images/backgrounds/joan-villalon-otG-Gi4ebDo-unsplash.jpg"
              />
            </figure>
          </div>
          <div className="column is-1"></div>
        </div>
        <div className="title is-5 has-text-white" style={{ margin: "10px" }}>
          <i style={{ margin: "5px" }} className="fab fa-facebook"></i>
          <i style={{ margin: "5px" }} className="fab fa-instagram"></i>
          <i style={{ margin: "5px" }} className="fab fa-500px"></i>
        </div>
      </section>
    </>
  );
}
