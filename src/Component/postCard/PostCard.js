import React from 'react'
import styles from './postCard.module.css'
import Image from 'next/image'
import Link from 'next/link'

function PostCard({post}) {
  return (
    <div className={styles.postcard_main_wrapper}>
     <h2>Post Card</h2>
     <div className={styles.postcard_top}>
       <div className={styles.imgContainer}>
       {post.img &&   <Image src={post.img} alt='' fill  className={styles.postcard_img}/>}
       </div>
       <span className={styles.postcard_date}>01.01.2024</span>
     </div>


     <div className={styles.postcard_bottom}>
       <h1 className={styles.title}>{post.title}</h1>
       <p className={styles.desc}>{post.body}</p>
       <Link className={styles.postcard_link} href={`/blog/${post.slug}`}>Read More..</Link>
     </div>
    </div>
  )
}

export default PostCard