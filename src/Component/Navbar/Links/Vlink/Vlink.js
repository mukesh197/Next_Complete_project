"use client"
import Link from 'next/link'
import styles from './vlink.module.css'
import { usePathname } from 'next/navigation'

function Vlink({item}) {
    const pathName=usePathname();
    console.log("PathName data =====",pathName)
    console.log("PathName data =====",item.path)
  return (
        
        <Link href={item.path} key={item.id} className={`${styles.nav_item} ${pathName === item.path && styles.active} `}>{item.title}</Link>
        
  )
}

export default Vlink