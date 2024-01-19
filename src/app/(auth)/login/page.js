import LoginForm from '@/Component/LoginForm/LoginForm'
import { handlerGithubLogin } from '@/lib/action'
import { auth, signIn } from '@/lib/auth'
import styles from "./login.module.css"
import { useRouter } from 'next/navigation'

async function Loginpage() {

  // const session=await auth()

  // console.log("This is Session Data :-",session)
    
  // const handlerGithubLogin=async()=>{
  //   "use server"
  //  await signIn("github")
  // }
  // const route=useRouter()

  // auth?.user?.idAdmin && route.push()

  return (
    <div className={styles.login_main_wraper}>
    <div className={styles.login_wraper}>
    <form action={handlerGithubLogin}>
    <button className={styles.github}>Login with Github</button>
    </form>
    
    <LoginForm/>
    </div>
    
    </div>
  )
}

export default Loginpage