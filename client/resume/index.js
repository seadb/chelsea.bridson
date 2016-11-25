import React from 'react'
import Pdf from 'react-pdf'
import styles from './styles.css'

const Resume = () => (
    <div className={styles.resume}>
      <Pdf file="/public/cv.pdf"/>
    </div>
  )

export default Resume
