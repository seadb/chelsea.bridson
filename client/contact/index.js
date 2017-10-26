import React from 'react'
import styles from '../app/styles.css'
import Window from '../app/components/Window'


const Contact = () => (
  <Window
    title="Contact"
  >
    <h2 className={styles.cyan}>contact</h2>
    <i className="fa fa-envelope" aria-hidden="true"></i>
    <a href="mailto:chelsea@bridson.me" className={styles.padded} id="email">
      chelsea@bridson.me
    </a>
    <img src="public/img/clippy.svg"
         data-clipboard-target="#email"
         className={styles.svg}
         alt="Copy to Clipboard" 
         id="clipboard"
    />
    <br/>
    <i className={"fa fa-github "+styles.larger} aria-hidden="true"></i>
    <a href="https://github.com/seadb/" className={styles.padded} id="github">
      github.com/seadb
    </a>
    <br/>

    <i className="fa fa-linkedin" aria-hidden="true"></i>
    <a href="https://www.linkedin.com/in/chelseabridson" className={styles.padded}
    >
      linkedin.com/in/chelseabridson
    </a>
    <h2 className={styles.violet}>bio</h2>
    <p>
    I grew up in Lansing, Michigan.  I first became interested in 
    web development and design in High School, when I began creating simple
    layouts for webpages using HTML, CSS, and Photoshop and hosting
    them on Geocities. I later
    took the Web Development and Graphic Design classes offered at my school.  
    I planned to enter medical school after obtaining a Bachelor's Degree
    and was accepted into
    Lyman Briggs college at MSU.  After my first year of classes I started
    to explore other majors.  After taking an introductory programming class,
    I decided to pursue a career in Computer Science.  
    </p>

    <h2 className={styles.thistle}>interests</h2>
    <p>
    ASMR, ayurveda, bicycle mechanics, cycling, dream analysis, 
    environmentalism, guitar, infrastructure automation,
    locavorism, lucid dreaming, meditation, mehndi, mobile first, 
    philomath, reading books, single page applications, tarot, thrifting, 
    user experience, vocalist, volunteering, web development /design, yoga
    </p>

  </Window>
)

export default Contact
