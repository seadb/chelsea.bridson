import React from 'react'
import style from '../styles.css';

const Window = (props) => (
  <div className={style.window} >
    <div className={style.topbar}>
      <div className={style.filler}>
      </div>
      <div className={style.title}>
        {props.title}
      </div>
      <div className={style.controls}>
        <a href="/#/">
          <i className="fa fa-times" aria-hidden="true"></i>
        </a>
      </div>
    </div>
    <div className={style.content} >
      {props.children}
    </div>
  </div>
)

//<i className="fa fa-minus" aria-hidden="true"></i>&nbsp;&nbsp;
export default Window
