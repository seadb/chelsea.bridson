import React from 'react'
import Routes from '../components/Routes';
import Logo from '../components/Logo';
import Nav from '../components/Nav';
import styles from '../styles.css';

const Layout = (props) => (
  <div className={styles.layout}>
    <div className={styles.header} >
      <Logo />
      <Nav/>
    </div>
    {props.children}
  </div>
)

export default Layout
