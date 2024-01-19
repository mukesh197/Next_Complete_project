import Image from 'next/image'
import React from 'react'
import styles from './about.module.css'

const AboutPage = () => {
  return (
    <div className={styles.about_main_wrapper}>
          <div className={styles.about_content}>
            <h2 className={styles.about_subtitle}>About Agency..!</h2>
            <h1 className={styles.about_title}>we create digital ideas that are bigger,bolder,braver and better.</h1>
              <p className={styles.about_desc}>we create digital ideas that are bigger, bolder,braver and better. we belive in good ideas flexibility and precission We're world's oure specia; tream best consulting  finance solution provider. wode range of web and software development services.</p>

                <div className={styles.about_boxes}>
                  <div className={styles.box}>
                  <h1>10 K+</h1>
                  <p>Year of Experience</p>
                  </div>
                  <div className={styles.box}>
                  <h1>234 K+</h1>
                  <p>People reached</p>
                  </div>
                  <div className={styles.box}>
                  <h1>5 K+</h1>
                  <p>Services and Plugin</p>
                  </div>
                </div>

          </div>
          <div className={styles.about_image}>
           <Image src="/about.png" alt='' fill className={styles.about_image}/>
          </div>
    
    </div>
  )
}

export default AboutPage