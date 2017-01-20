import React from 'react'
import Pdf from 'react-pdf'
import Window from '../app/components/Window'
import styles from './styles.css'
import basestyles from '../app/styles.css'

const Resume = () => (
  <Window title="Resume">
      <div>
        <div className={styles.resume}>
          <a href="/public/cv.pdf" target="_blank">
            <div>
              <Pdf file="/public/cv.pdf" scale="1.5"/>
            </div>
          </a>
        </div>
      </div>
    </Window>
  )

export default Resume
