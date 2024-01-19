import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  // throw new Error("")
  return (
    <>
    <div className={styles.home_main_wraper}>
  

         <div className={styles.home_text_container}>
         <h1 className={styles.title}>Creative Thoughts Agency.</h1>
         <p className={styles.desc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has ...</p>

         <div className={styles.home_button}>
          <button className={styles.home_button_learn}>Learn More....</button>
          <button className={styles.home_contect}>Contect</button>
         
         </div>

         <div className={styles.home_brands}>
          <Image src="/brands.png" alt='' fill className={styles.home_brand_img} />
         </div>

         
         </div>
         <div className={styles.home_image_container}>
          <Image src="/hero.gif" alt='' fill className={styles.home_hero_img}/>
         </div>

    </div>
    
    </>
  )
}
