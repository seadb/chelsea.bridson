import React, {PropTypes} from 'react'
import styles from './styles.css';

const Entry = ({name, image, description, technologies, github, url}) => (
    <div className={styles.entry} >
      <div className={styles.entryImage} >
        <a href={url}>
          <img src={'public/img/'+image}/>
        </a>
        <b>{name}</b>
        <p>{description}</p>
        <p>{technologies}</p>
        <a href={"https://github.com/"+github}>
          <i className="fa fa-github" aria-hidden="true"></i> {github}
        </a>
      </div>
    </div>
)

Entry.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  technologies: PropTypes.string,
  github: PropTypes.string,
  url: PropTypes.string
}

export default Entry
