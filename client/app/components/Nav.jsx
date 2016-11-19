import React, { Component } from 'react';
import styles from '../styles.css';

const Nav = () => (
  <div className={styles.nav} >
    <a href="/#/portfolio">Portfolio</a>
    <a href="/#/resume">Resume</a>
    <a href="/#/contact">Contact</a>
  </div>
);

export default Nav
