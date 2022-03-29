import { useParams, Navigate } from "react-router-dom";
import "../styles/house.css";
import Dropdown from "../components/Dropdown";
import { data } from "../data/data";
import Carousel from "../components/Carousel";
import Ranking from "../components/Ranking";

function House() {

  let urlParams = useParams();

 
  const houseData = data.find((data) => data.id === urlParams.id);
 
  if( houseData == null){
   return <Navigate to="/error"/>
  }

  const arrayLenght = houseData.pictures.length;
  return (
    <div className="housing_main">
      <div className="picture_container">
        <Carousel index={0} array={houseData.pictures} lenght={arrayLenght} />
      </div>
      <div className="info_container">
        <div className="left_info">
          <h1 className="info_title">{houseData.title}</h1>
          <h2 className="info_location">{houseData.location}</h2>
          <ul className="tag_container">
            {houseData.tags.map((tag) => {
              return (
                <li key={tag} className="tag_el">
                  {tag}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="right_info">
          <div className="host">
            <h3 className="host_name">{houseData.host.name.split(" ")[0]}<br/>{houseData.host.name.split(" ")[1]}</h3>
            <div>
              <img
                src={houseData.host.picture}
                alt="host profile"
                className="host_picture"
              />
            </div>
          </div>
          <div>
            <Ranking rankingNumber={houseData.rating} />
          </div>
        </div>
      </div>
      <div className="accordeon_container">
        <div className="accordeon">
          <Dropdown title="Description" textecontent={houseData.description} />
        </div>
        <div className="accordeon">
          <Dropdown
            title="Équipements"
            textecontent={houseData.equipments.map((e) => {
              return (
                <li key={e} className="equipement_el">
                  {e}
                </li>
              );
            })}
          />
        </div>
      </div>
    </div>
  );
}

export default House;