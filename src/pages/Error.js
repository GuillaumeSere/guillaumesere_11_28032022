import { Link } from "react-router-dom";
import "../styles/error.css";

function Error() {
  return (
    <div className="error_page">
      <div className="error_number">404</div>
      <div className="error_text">
        Oups! La page que vous demandez n'existe pas.
      </div>
      <Link to="/">Retourner sur la page d'acceuil</Link>
    </div>
  );
}

export default Error;