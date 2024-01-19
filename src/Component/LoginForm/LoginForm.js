

"use client"
import {useFormState} from 'react-dom'

import React, { useEffect } from 'react'
import { login } from '@/lib/action'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import styles from "./loginform.module.css"
function LoginForm() {
    const [state,formAction]=useFormState(login,undefined)

    const router=useRouter()
  
    // useEffect(()=>{
    //   state?.success && router.push("/login")
    // },[state?.successd,router])
  
    return (
   
        
      <form action={formAction} className={styles.form}>
        
      <input type="text" placeholder='Username' name='username'/>
   
      <input type="password" placeholder='passowrd' name='password'/>
    
      <button>Login</button>
      {state?.error}
      <Link href="/register">{"Don't have an account"} <b> : Register</b></Link>
      </form>
      
    
    )
}

export default LoginForm