import fs from "fs";
import path from "path";

import Navbar from "../../components/Navbar";
import Album from "../../components/Album";
import Footer from "../../components/Footer";

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  const galleryDirectory = path.join(process.cwd(), "public/images/gallery");
  const folders = fs.readdirSync(galleryDirectory);
  const albums = folders.map((folder) => {
    return {
      name: folder,
      pictures:
        fs.readdirSync(
          path.join(process.cwd(), `public/images/gallery/${folder}`)
        ).length - 1,
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
      className="hero is-fullheight is-bold"
      style={{
        backgroundColor: "#2c3e50",
        backgroundImage: `url(/images/galleryBackground/index.jpg)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
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
      <Footer color="white" />
    </section>
  );
}
