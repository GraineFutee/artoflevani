import fs from "fs";
import path from "path";

import { useRouter } from "next/router";

import Navbar from "../../components/Navbar";
import Image from "../../components/Image";
import { useState } from "react";

// pages/blog/[slug].js
export async function getStaticPaths() {
  const galleryDirectory = path.join(process.cwd(), "public/images/gallery");
  const albums = fs.readdirSync(galleryDirectory);
  albums.splice(0, 1);
  let res = [];
  albums.map((album) => {
    res = [...res, { params: { album: album } }];
  });
  return {
    paths: res,
    fallback: true,
  };
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps(data) {
  const albumDirectory = path.join(
    process.cwd(),
    `public/images/gallery/${data.params.album}`
  );
  const images = fs.readdirSync(albumDirectory);
  images.splice(0, 1);
  let imageArray1 = [];
  let imageArray2 = [];
  let imageArray3 = [];
  let arrayNo = 1;
  images.map((image) => {
    switch (arrayNo) {
      case 1:
        imageArray1.push(image);
        break;

      case 2:
        imageArray2.push(image);
        break;

      case 3:
        imageArray3.push(image);
        break;

      default:
        break;
    }
    if (arrayNo !== 3) arrayNo++;
    else arrayNo = 1;
  });
  return {
    props: {
      images,
      imagesColumns: [imageArray1, imageArray2, imageArray3],
      album: data.params.album,
    },
  };
}

export default function Gallery(props) {
  const [imageModal, setImageModal] = useState("");
  const [modalActive, modalSwitch] = useState(false);
  return (
    <section
      className="hero is-fullheight is-warning is-bold"
      style={{ boxShadow: "5px 5px 5px 5px #d1ccc0" }}
    >
      <Navbar page="gallery" />
      <div className="hero-body" style={{ padding: "0" }}>
        <div className="container">
          <h1 className="title">{props.album}</h1>
          <div className="columns is-gapless">
            {props.imagesColumns.map((column, index) => (
              <div className="column" key={`column${index}`}>
                {column.map((image) => (
                  <a
                    key={image}
                    id={`${props.album}/${image}`}
                    onClick={(event) => {
                      setImageModal(
                        `/images/gallery/${event.currentTarget.id}`
                      );
                      modalSwitch(true);
                    }}
                  >
                    <Image album={props.album} image={image} name={image} />
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={`modal ${modalActive && "is-active"}`}>
        <div
          className="modal-background"
          onClick={() => modalSwitch(false)}
        ></div>
        <div className="modal-content">
          {/* <div className="columns is-gapless">
            <a>
              <div className="column is-1">
                <div
                  className="has-text-centered"
                  style={{
                    margin: "0",
                    position: "absolute",
                    top: "50%",
                    msTransform: "translateY(-50%)",
                    transform: "translateY(-50%)",
                  }}
                >
                  <p className="image">
                    <i class="fas fa-chevron-circle-left"></i>
                  </p>
                </div>
              </div>
            </a>
            <div className="column"> */}
          <p className="image">
            <img src={imageModal} alt="" />
          </p>
          {/* </div>
            <div className="column is-1">
              <div
                className="has-text-centered"
                style={{
                  margin: "0",
                  position: "absolute",
                  top: "50%",
                  msTransform: "translateY(-50%)",
                  transform: "translateY(-50%)",
                }}
              >
                <a>
                  <p className="image">
                    <i class="fas fa-chevron-circle-right"></i>
                  </p>
                </a>
              </div>
            </div>
          </div> */}
        </div>

        <button
          className="modal-close is-large"
          aria-label="close"
          onClick={() => modalSwitch(false)}
        ></button>
      </div>
      <div className="title is-5 has-text-white" style={{ margin: "10px" }}>
        <i style={{ margin: "5px" }} className="fab fa-facebook"></i>
        <i style={{ margin: "5px" }} className="fab fa-instagram"></i>
        <i style={{ margin: "5px" }} className="fab fa-500px"></i>
      </div>
    </section>
  );
}