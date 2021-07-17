import styles from "../styles/style.module.scss";
import Image from "next/image";
import { useState, useEffect } from "react";
const Navbar = () => {
  const {
    container,
    button,
    header,
    header__container,
    header__a,
    header__li,
    header__logo,
    header__nav,
    header__ul,
    header__buttons,
    header__signin,
    header__signup,
    header__menu,
    show,
  } = styles;
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);
  return (
    <header className={open ? `${header} ${show}` : `${header}`}>
      <div className={`${header__container} ${container}`}>
        <h1 className={header__logo}>Fiber</h1>
        <div className={header__menu} onClick={() => setOpen(!open)}>
          <Image src="/images/Hamburger Menu.svg" width={24} height={20} />
        </div>
        <nav className={header__nav}>
          <ul className={header__ul}>
            <li className={header__li}>
              <a className={header__a} href="#">
                Community
              </a>
            </li>
            <li className={header__li}>
              <a className={header__a} href="#">
                Features
              </a>
            </li>
            <li className={header__li}>
              <a className={header__a} href="#">
                Pricing
              </a>
            </li>
          </ul>
        </nav>
        <div className={header__buttons}>
          <a href="#" className={`${header__signin} `}>
            Sign In
          </a>
          <a href="#" className={`${header__signup} ${button}`}>
            Sign Up
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
