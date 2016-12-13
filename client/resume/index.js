import React from 'react'
import Pdf from 'react-pdf'
import styles from './styles.css'

const Resume = () => (
    <div className={styles.resume}>
      <a href="/public/cv.pdf" target="_blank">
        <i className="fa fa-download" aria-hidden="true"></i>
        <div>
          <Pdf file="/public/cv.pdf" scale="1.5"/>
        </div>
      </a>
    </div>
  )

export default Resume
