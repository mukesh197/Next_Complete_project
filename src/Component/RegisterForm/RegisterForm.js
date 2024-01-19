"use client"
import {useFormState} from 'react-dom'

import React, { useEffect } from 'react'
import styles from "./registerform.module.css"
import { register } from '@/lib/action'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

function RegisterForm() {

  const [state,formAction]=useFormState(register,undefined)

  const router=useRouter()

  useEffect(()=>{
    state?.success && router.push("/login")
  },[state?.successd,router])

  return (
 
      
    <form action={formAction} className={styles.form}>
      
    <input type="text" placeholder='Username' name='username'/>
    <input type="text" placeholder='Email' name='email'/>
    <input type="password" placeholder='passowrd' name='password'/>
    <input type="password" placeholder='Confirm Password' name='cpassword'/>
    <button>Register</button>
    {state?.error}
    <Link href="/login">Have a account ? <b>Login</b></Link>
    </form>
    
  
  )
}

export default RegisterForm