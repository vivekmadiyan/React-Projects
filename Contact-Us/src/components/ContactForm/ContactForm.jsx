import Button from "../Button/Button"
import styles from "./ContactForm.module.css"
import React from 'react'
import { FaMessage } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

function ContactForm() {
  return (
    <section className={styles.container}>
      
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
        <Button 
        text="VIA SUPPORT CHAT" icon={<FaMessage  fontSize="24px" />}
         />
          <Button
        text="VIA CALL" icon={<IoCall fontSize="24px" />}
         />
          
        </div>
        <Button 
        isOutline={true}
        text="VIA EMAIL FORM" icon={< MdEmail fontSize="24px" />}
         />
         <form >
      <div className={styles.form_control}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" />

      </div>
      <div className={styles.form_control}>
      <label htmlFor="email">E-mail</label>
       <input type="email" name="email" />

      </div>
      <div className={styles.form_control}>
      <label htmlFor="text">Text</label>
       <textarea name="text" />

      </div>
      <div><Button 

text="Submit Button " /></div>
      

         </form>
        
      </div>
      <div className={styles.contact_image}></div>
    </section>
  )
}

export default ContactForm
