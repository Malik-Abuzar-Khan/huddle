import React from "react"
import styles from './Header.module.scss'
import Logo from '../../assests/images/logo.svg'

const Header = () => {
  return (
    <header className={styles.header}>
      <div><img src={Logo} alt={`${Logo}`} className={styles.logo}/></div>
      <div>
        <button className={styles.try_btn}>Try it Free</button>
      </div>
    </header>
  );
};

export default Header;
