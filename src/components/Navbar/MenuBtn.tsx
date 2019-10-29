import React from "react";
import { FaAlignRight } from "react-icons/fa";

type BtnProps = {
  handleToggle: () => void;
};

const Btn: React.FC<BtnProps> = ({ handleToggle }) => (
  <button
    type="button"
    className="nav__btn"
    onClick={handleToggle}
    data-testid="menu"
  >
    <FaAlignRight className="nav__icon" />
  </button>
);

export default Btn;
