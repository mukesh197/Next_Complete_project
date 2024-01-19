import React from 'react'
import styles from "./adminpost.module.css"
import { getPosts } from '@/lib/data'
import Image from 'next/image'
import { deletPost } from '@/lib/action'

async function AdminPost() {
    const posts=await getPosts();

//    const deletPostWithId=async (id)=>{
//     "use server"
//     return deletPost.bind(null,id)
//    }


  return (
    <div className={styles.container}>

    <h1>Posts</h1>
    {posts.map((post)=>(
        <div className={styles.post} key={post.id} >
        <div  className={styles.detail}>
          <Image src={post.img || "/noAvatar.png"} alt='' width={50} height={50}/>
          <span className={styles.postTitle}>{post.title}</span>
        </div>
        <form action={deletPost}>
          <input type='hidden' name='id' value={post.id}/>
          <button className={styles.postButton}>Delete</button>
        </form>
        </div>
    ))}
    
    </div>
  )
}

export default AdminPost