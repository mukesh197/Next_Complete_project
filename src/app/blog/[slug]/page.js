// "use client"


import React, { Suspense } from 'react'
import styles from './blogpost.module.css'
import Image from 'next/image'
import PostUser from '@/Component/postUser/PostUser'
import { getPost } from '@/lib/data';




// const getData=async (slug)=>{

//   let res=await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)
//  //  let res=await fetch("https://jsonplaceholder.typicode.com/posts",{cache:"no-store"})
//  //  let res=await fetch("https://jsonplaceholder.typicode.com/posts",{next:{revalidate:3600}})

//   if(!res.ok){
//    throw new Error("Some Thing Went Wrong")
//   }

//   return res.json()

// }


const getData=async (slug)=>{

  let res=await fetch(`http://localhost:3000/api/blog/${slug}`)
  if(!res.ok){
   throw new Error("Some Thing Went Wrong")
  }

  return res.json()

}








async function BlogDynamicPage({params}) {
   
  console.log("++++",params);

  let {slug}=params

  let posts=await getData(slug)
  // let posts=await getPost(slug)




console.log("Get post data=======",posts);

  return ( 
    <div className={styles.blogpost_main_wrapper}>
          
    <div className={styles.blogpost_img_cont}>
    {  <Image src={posts?.img} fill alt='' className={styles.blogpost_img} />}
    </div>
    <div className={styles.blogpost_text_cont}> 
      <h1>{posts?.title}</h1>

        <div className={styles.blogpost_details}>
       
           
           
           <Suspense fallback={<div>Loading ...</div>}>
           <PostUser userId={posts?.userId}/>

          <div className={styles.blogpost_detail_text}>
            <span className={styles.blogpost_deatiltitle}>Author</span>
            <span className={styles.blogpost_deatilvalue}>jack Herney</span>
          </div>
          </Suspense>

          <div className={styles.blogpost_detail_text}>
          <span className={styles.blogpost_deatiltitle}>Published</span>
          <span className={styles.blogpost_deatilvalue}>01.02.2024</span>
        </div>
        
        </div>
       
       <div className={styles.blogpost_desc}>
        <p>{posts?.body}</p>
       
       </div>
    
    </div>

    
    </div>
  )
}

export default BlogDynamicPage