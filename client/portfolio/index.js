import React, { PropTypes, Component } from 'react';
import Entry from './entry'
import styles from './styles.css';


const Portfolio = () => ( 
  <div className={styles.portfolio} >
    <Entry
      name="Hennasea"
      image="hennasea.png"
      description="Web application created for my self-founded henna business."
      technologies="React, Node, Express, Webpack"
      github="seadb/hennasea"
      url="http://hennasea.net"
      />
    <Entry
      name="Marquette Local Food"
      image="marquette-local-food.png"
      description="Virtual directory for local food vendors in Marquette"
      technologies="React + Redux, Node, Express, Webpack"
      github="seadb/marquette-food"
    />
  </div>
)

export default Portfolio;
