import React from 'react'
import Styles from "./Card.module.css"

export const Card = ({date,logo,heading,subheading,device,paint}) => {
  return (
    <div style={{backgroundColor:{paint}}} className={Styles.box}>Card
       <div className={Styles.flexed}>
       <p>{date}</p>
        <img className={Styles.img} src={logo} alt="logo"/>
       </div>
       <button className={Styles.button}>{heading}</button>
       <h3>{subheading}</h3>
       <p>{device}</p>
    </div>
  )
}
