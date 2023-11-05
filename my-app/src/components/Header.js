import logo from "../assets/investment-calculator-logo.png";
import style from "./header.module.css";
function Header() {
  return (
    <div className={style.header}>
      <img src={logo} alt="logo" />
      <p className={style.headerHeading}>Investment Calculator</p>
    </div>
  );
}

export default Header;
