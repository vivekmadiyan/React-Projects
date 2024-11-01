import Button from "../Button/Button"
import styles from "./ContactForm.module.css"
import React, { useState } from 'react'
import { FaMessage } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import {} from "react";

function ContactForm() {
  const[name,setName]=useState("Vivek");
  const[email,setEmail]=useState("Vivek@gmail.com");
  const[text,settext]=useState("Vivek@gmail.com");
 

 const onSubmit=(event)=>{
  event.preventDefault();

  setName(event.target[0].value);
  setEmail(event.target[1].value);
  settext(event.target[2].value);
  console.log({
    name,email,text
  })
 
};
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
         <form onSubmit={onSubmit} >
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
       <textarea name="text" rows="8" />

      </div>
      <div><Button 

text="Submit Button " /></div>
      
    <div>
      {
        name + " " + email + " " + text
      }
    </div>
         </form>
        
      </div>
      <div className={styles.contact_image}>
        <img src="./Images/contact.svg" alt="contact-image" height="450px"/>
      </div>
    </section>
  )
}

export default ContactForm
