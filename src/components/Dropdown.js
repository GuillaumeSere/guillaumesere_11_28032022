import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";

function Dropdown({ title, textecontent }) {
  const [isOpen, setIsOpen] = useState(false);

  return isOpen ? (
    <div className="dropdown">
      <div className="dropdown_top">
        <h4 className="dropdown_title">{title}</h4>
        <FaChevronUp
          className="dropdown_icon"
          id="chevron_up"
          onClick={() => setIsOpen(false)}
        />
      </div>
      <p className="dropdown_content">{textecontent}</p>
    </div>
  ) : (
    <div className="dropdown">
      <div className="dropdown_top">
        <h4 className="dropdown_title">{title}</h4>
        <FaChevronDown
          className="dropdown_icon"
          id="chevron_down"
          onClick={() => setIsOpen(true)}
        />
      </div>
      <p style={{ display: "none" }}>{textecontent}</p>
    </div>
  );
}

export default Dropdown;