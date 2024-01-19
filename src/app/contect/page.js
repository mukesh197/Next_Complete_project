import React from 'react'
import styles from "./contect.module.css"
import Image from 'next/image'

function Contect() {
  return (
    <div className={styles.contect_main_wraper}>
      <div className={styles.contect_image_cont}>
        <Image src={"/contact.png"} alt=''  height={400} width={400} className={styles.contect_img} />
      </div>

      |<div className={styles.contect_form_cont}>
        <form action='' className={styles.contect_form}>
          <div className={styles.content_input_box}>
            <input type='text' placeholder='Name and Surname' />
          </div>

          <div className={styles.content_input_box}>
            <input type='text' placeholder='Email Address' />
          </div>

          <div className={styles.content_input_box}>
            <input type='text' placeholder='Phone Number' />
          </div>

          <div className={styles.content_input_box}>
            <textarea name='' id='' cols="30" rows="10" placeholder='Message' />
          </div>

          <button className={styles.contect_form_button}>Send</button>

        </form>
      </div>


    </div>
  )
}

export default Contect