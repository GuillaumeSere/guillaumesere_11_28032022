import { Link } from "react-router-dom";

function Thumb({ id, cover, title }) {
  return (
    <div className="thumb" key={id}>
      <Link to={`housing/${id}`}>
        <img src={cover} alt={title} className="thumb_img" />
        <p className="thumb_title">{title}</p>
      </Link>
    </div>
  );
}
export default Thumb;