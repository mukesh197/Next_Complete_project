import React from 'react'
import styles from "./blog.module.css"
import PostCard from '@/Component/postCard/PostCard'
import { getPosts } from '@/lib/data'
// import { getPosts } from '../../../lib/data'


// const getData=async ()=>{

//    let res=await fetch("https://jsonplaceholder.typicode.com/posts")
//   //  let res=await fetch("https://jsonplaceholder.typicode.com/posts",{cache:"no-store"})
//   //  let res=await fetch("https://jsonplaceholder.typicode.com/posts",{next:{revalidate:3600}})

//    if(!res.ok){
//     throw new Error("Some Thing Went Wrong")
//    }

//    return res.json()

// }


const getData=async ()=>{

  let res=await fetch(`http://localhost:3000/api/blog`)
  if(!res.ok){
   throw new Error("Some Thing Went Wrong")
  }

  return res.json()

}

async function Blog() {



  // const posts=await getPosts()
  const posts=await getData()

  return (
    <div className={styles.blog_main_wraper}>

   
    {posts.map(post=>(
      
      <div className={styles.post} key={post.id}>
      <PostCard  post={post} />
      </div>

    ))}
    
    </div>

    
   
     
    
      
       
       
    

  )
}

export default Blog