import React from 'react'
import styles from '../app/styles.css'
import Window from '../app/components/Window'

const Contact = () => (
    <Window
      title="Contact"
    >
      <h2 className={styles.cyan}>contact</h2>
      <a href="mailto:chelsea@bridson.me">
        chelsea@bridson.me
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
			<p>
			I am a full stack developer and I have worked on a variety of projects 
			using all kinds of different techologies.
      I love creating feature rich user-interfaces with React, CSS, and HTML.
			I also have experience creating SQL database backed APIs with node, 
			Python, and Perl.
      </p>

      <h2 className={styles.thistle}>interests</h2>
      <p>
      ASMR, ayurveda, bicycle mechanics, clairvoyance, cycling, dream analysis, 
      environmentalism, guitar,
      locavorism, lucid dreaming, meditation, mehndi, philomath,
      reading books, tarot, thrifting, 
      vocalist, volunteering, web development /design, yoga
      </p>

    </Window>
    )

export default Contact
