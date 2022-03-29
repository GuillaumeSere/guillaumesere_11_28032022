import Banner from "../components/Banner";
import "../styles/about.css";
import BannerAbout from "../assets/banner_about.png";
import Dropdown from "../components/Dropdown";

const text = [
  "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
  "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
  "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
];

function About() {
  return (
    <div className="main">
      <Banner urlImg={BannerAbout} />
      <div className="main_content">
        <Dropdown title="Fiabilité" textecontent={text[0]} />
        <Dropdown title="Respect" textecontent={text[1]} />
        <Dropdown title="Service" textecontent={text[2]} />
        <Dropdown title="Responsabilité" textecontent={text[3]} />
      </div>
    </div>
  );
}

export default About;