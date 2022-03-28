import Banner from "../components/Banner";
import "../styles/home.css";
import bannerHome from "../assets/banner_home.png";
import { data } from "../data/data";
import Thumb from "../components/Thumb";

function Home() {
  return (
    <div className="main">
      <Banner urlImg={bannerHome} texte="Chez vous, partout et ailleurs" />
      <div className="thumb_container">
        {data.map((data) => {
          return (
            <Thumb
              title={data.title}
              cover={data.cover}
              key={data.id}
              id={data.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;