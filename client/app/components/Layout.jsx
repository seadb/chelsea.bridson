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
    <div className={styles.window} >
      <div className={styles.topbar}>
        <i className="fa fa-minus" aria-hidden="true"></i>&nbsp;&nbsp;
        <i className="fa fa-times" aria-hidden="true"></i>
      </div>
      <div className={styles.content} >
        {props.children}
      </div>
    </div>
  </div>
)

export default Layout
