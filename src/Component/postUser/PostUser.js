import React from 'react'
import styles from './postuser.module.css'
import { getUser } from '@/lib/data'
import Image from 'next/image'

const getData=async(userId)=>{
    const res=await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`,{cache:'no-store'})
    const dres=await res.json()
    console.log("this is user data",dres);

    if(!res.ok){
        throw new Error("Something went wrong")
    }

    // return res.json()
    return dres
}

async function PostUser({userId}) {
    // const user=await getData(userId)
    const user=await getUser(userId)
    console.log("Get user Data",user)
  return (
    <div className={styles.postuser_main_wrapper}>
    <div className={styles.postuser_image}>
       <Image className={styles.user_avtar} src={user?.img ? user.img : '/noavatar.png'} height={50} width={50}/>
    </div>
    
    <div className={styles.postuser_text}>
    <span className={styles.postuser_title}>User Name</span>
    <span className={styles.postuser_username}>herrr==={user?.username}</span>
    </div>
    
    </div>
  )
}

export default PostUser