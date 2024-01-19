import { auth } from '@/lib/auth'
import Hlink from './Links/Hlink/Hlink'
import styles from './navbar.module.css'
import Link from 'next/link'

async function Navbar() {

    const session=await auth()

    console.log("This is Logout Session",session);

  return (
    <>
    
    <nav className={styles.navbar_wrapper}>
      <div className={styles.navbar_logo}>
       <h2>Logo</h2>
      </div>

      <div className={styles.navbar_item}>
       
         <Hlink session={session}/>
      
      </div>
    
    </nav>
    
    </>
  )
}

export default Navbar