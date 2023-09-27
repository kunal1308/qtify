import React from 'react';
import styles from "./NavBar.module.css";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
// import Search1 from "../Search/Search1";

const NavBar = ({data}) => {
  return (
    <nav className={styles.navbar}>
        <Logo />
        <Search placeholder="Search an album of your choice" data={data}/>
        {/* <Search1 data={data}/> */}
        <Button children="Give Feedback" />
    </nav>
  )
}

export default NavBar;