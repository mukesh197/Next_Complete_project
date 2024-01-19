import React from 'react'
import styles from "./adminuser.module.css"
import { getUsers } from '@/lib/data'
import Image from 'next/image'
import { deletUser } from '@/lib/action'

async function AdminUser() {

   const users=await getUsers()

  return (
    <div className={styles.container}>
    
    <h1>Users</h1>
    {users.map((user)=>(
        <div className={styles.user} key={user.id} >
        <div  className={styles.detail}>
          <Image src="/noAvatar.png" alt='' width={50} height={50}/>
          <span className={styles.userName}>{user.username}</span>
        </div>
        <form action={deletUser}>
          <input type='hidden' name='id' value={user.id}/>
          <button className={styles.userButton}>DeleteUser</button>
        </form>
        </div>
    ))}
    
    
    </div>
  )
}

export default AdminUser