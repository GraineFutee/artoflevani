import fs from "fs";
import path from "path";

import Navbar from "../../components/Navbar";
import Album from "../../components/Album";

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  const galleryDirectory = path.join(process.cwd(), "public/images/gallery");
  const folders = fs.readdirSync(galleryDirectory);
  folders.splice(0, 1);
  const albums = folders.map((folder) => {
    return {
      name: folder,
      pictures:
        fs.readdirSync(
          path.join(process.cwd(), `public/images/gallery/${folder}`)
        ).length - 2,
    };
  });
  return {
    props: {
      albums,
    },
  };
}

export default function Gallery(props) {
  return (
    <section
      className="hero is-fullheight is-warning is-bold"
      style={{ boxShadow: "5px 5px 5px 5px #d1ccc0" }}
    >
      <Navbar page="gallery" />
      <div className="hero-body" style={{ padding: "0" }}>
        <div className="container">
          <div className="columns is-gapless is-multiline">
            {props.albums.map((album) => (
              <div className="column is-one-third" key={album.name}>
                <Album album={album.name} pictures={album.pictures} />
              </div>
            ))}
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
