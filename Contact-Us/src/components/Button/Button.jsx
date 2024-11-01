import React from 'react'

import { FaMessage } from "react-icons/fa6";
import styles from "./Button.module.css";

function Button(props) {
  const {isOutline,text,icon,...rest}=props;
  return (
    <button {...rest}   className={props.isOutline ? styles.outline_btn:styles.primary_btn}>
     
      {icon}
      {text}
    </button>
  )
}

export default Button
