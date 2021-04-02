import React, { useState } from "react";

import { Link } from "react-router-dom";

import Logo from "../components/Logo";
import Button from "./Button";

import Apper from "../pages/Apps";

const Navigation = (props) => {
  const [nav, setNav] = useState([
    { name: "Home", link: "/" },
    { name: "Verify-NIN", link: "/ninverification" },
    { name: "Register-NIN", link: "" },
    { name: "About us", link: "/about" },
    { name: "FAQS", link: "/faq" },
  ]);

  const [hamm, setHam] = useState(false);

  return (
    <nav className="nav-cont">
      <Logo color={"white"} />
      <div style={{ flex: "1" }}></div>

      <Link to="signin">
        <Button name={"login"} />
      </Link>
      <div style={{ width: "20px" }}></div>
      <Link to="signup">
        <Button name={"signup"} />
      </Link>
      {/* <div
        onClick={() => setHam(!hamm)}
        className={hamm === false ? "ham-cont" : "ham-cont open"}
      >
        <div className="ham"></div>
      </div> */}
    </nav>
  );
};
export default Navigation;
