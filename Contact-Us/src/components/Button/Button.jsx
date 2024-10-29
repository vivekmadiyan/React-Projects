import React from 'react'

import { FaMessage } from "react-icons/fa6";
import styles from "./Button.module.css";

function Button(props) {
    console.log(props);
  return (
    <button className={props.isOutline ? styles.outline_btn:styles.primary_btn}>
     
      {props.icon}
      {props.text}
    </button>
  )
}

export default Button
