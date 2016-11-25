import React, { PropTypes, Component } from 'react';
import Entry from './entry'
import styles from './styles.css';


const Portfolio = () => ( 
  <div className={"row "+styles.portfolio} >
    <div className="col-xs-12 col-sm-6">
    <Entry
      name="Hennasea"
      image="hennasea.png"
      description="Web application created for my self-founded henna business."
      technologies="React, Node, Express, Webpack"
      github="seadb/hennasea"
      url="http://hennasea.net"
      />
    </div>
    <div className="col-xs-12 col-sm-6">
    <Entry
      name="Marquette Local Food"
      image="marquette-local-food.png"
      description="Virtual directory for local food vendors in Marquette"
      technologies="React + Redux, Node, Express, Webpack"
      github="seadb/marquette-food"
    />
    </div>
  </div>
)

export default Portfolio;
