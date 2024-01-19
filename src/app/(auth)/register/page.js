import React from 'react'
import styles from "./register.module.css"
import RegisterForm from '@/Component/RegisterForm/RegisterForm'


function Register() {
  return (
    <div className={styles.register_main_wrapper}>
      <div className={styles.register_wraper}>
      <RegisterForm/>
      </div>
    
    
    </div>
  )
}

export default Register