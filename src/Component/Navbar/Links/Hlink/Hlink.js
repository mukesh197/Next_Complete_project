"use client"

import Link from "next/link"
import styles from "./hlink.module.css"
import Vlink from "../Vlink/Vlink"
import { useState } from "react"
import { handleLogout } from "@/lib/action"

 function Hlink({session}) {

  const [open,setOpen]=useState(false)

  const link=[
    {
        id:1,
        title:"Homepage",
        path:"/",
    },
    {
        id:2,
        title:"About",
        path:"/about"
    },
    {
        id:3,
        title:"Contect",
        path:"/contect"
    },
    {
        id:4,
        title:"Blog",
        path:"/blog"
    }
  ]

  // const session=true
  const isAdmin=true

  return (
    <>
    <div className={styles.link_wrapper}>

      {
        link.map((data)=>(
            
            <Vlink item={data} key={data.id}/>
             
          
        ))
      }{
        session?(
          <>
          { session.user?.isAdmin && ( <Vlink item={{title:"Admin",path:"/admin"}} ></Vlink>)}
          <form action={handleLogout}>
          <button className={styles.logout}>Logout</button>
          
          </form>
          </>

        ):(
          <Vlink item={{title:"Login",path:"/login"}}/>
        )
      }
    
    
    </div>

     <button className={styles.menuButton} onClick={()=>setOpen((prev)=>!prev)}>menu</button>
     {
      open && <div className={styles.mobile_link}>
       {
        link.map(data=>(
          <Vlink item={data} key={data.id}/>
        ))
       }
      
      </div>
     }


    </>
  )
}

export default Hlink