import React, { Suspense } from 'react'
import styles from './admin.module.css'
import AdminPost from '@/Component/AdminPost/AdminPost'
import AdminPostForm from '@/Component/AdminPostForm/AdminPostForm'
import AdminUser from '@/Component/AdminUser/AdminUser'
import AdminUserForm from '@/Component/AdminUserForm/AdminUserForm'

function Adminpage() {
  return (
    <div className={styles.container}>
       <div className={styles.row}>
       <div className={styles.col}>
       <Suspense fallback={<div>Loading....</div>}>
       <AdminPost/>
       </Suspense>
       
       </div>
       <div className={styles.col}>
       
       <Suspense fallback={<div>Loading....</div>}>
       <AdminPostForm/>
       </Suspense>
       
       </div>
       </div>



       <div className={styles.row}>
       <div className={styles.col}>
       <Suspense fallback={<div>Loading....</div>}>
       <AdminUser/>
       </Suspense>
       
       </div>
       <div className={styles.col}>
       
       <Suspense fallback={<div>Loading....</div>}>
       <AdminUserForm/>
       </Suspense>
       
       </div>
       </div>
    
    
    </div>
  )
}

export default Adminpage