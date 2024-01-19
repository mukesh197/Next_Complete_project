"use server"

import { revalidatePath } from "next/cache"
import { Post, User } from "./models"
import { connectToDb } from "./utlies"
import { signIn, signOut } from "./auth"
import bcrypt from "bcryptjs"

export const sayHello=async()=>{
    
    console.log("Hello This is Action")
}

export const addPost=async(prevState,formdata)=>{
  
    const {title,desc,slug,userId}=Object.fromEntries(formdata)

    console.log("Hello This is Action",title,desc,slug,userId)

    try{
        connectToDb()

        const newPost=new Post({title,desc,slug,userId})
        await newPost.save()
        console.log("save to DB");
        revalidatePath("/blog")
        revalidatePath("/admin")

    }catch(error){
        console.log(error)
        return {error:"Something went wrong"}
    }
}


export const addUser=async(prevState,formdata)=>{
  
    const {username,email,password,img}=Object.fromEntries(formdata)

    // console.log("Hello This is Action",title,desc,slug,userId)

    try{
        connectToDb()

        const newUser=new User({username,email,password,img})
        await newUser.save()
        console.log("save to DB");
        revalidatePath("/admin")

    }catch(error){
        console.log(error)
        return {error:"Something Went Wrong"}
    }
}



export const deletUser=async(formdata)=>{
  


    // console.log("Hello This is Action",title,desc,slug,userId)

    const {id}=Object.fromEntries(formdata)

    try{
        connectToDb()
        await  Post.deleteMany({userId:id})
        await  User.findByIdAndDelete(id)
        await newPost.save()
        console.log("Delete from DB");
        revalidatePath("/blog")

    }catch(error){
        console.log(error)
        return {error:"Something Went Wrong"}
    }
}


export const deletPost=async(formdata)=>{
  


    // console.log("Hello This is Action",title,desc,slug,userId)

    const {id}=Object.fromEntries(formdata)

    try{
        connectToDb()

        await  Post.findByIdAndDelete(id)
        console.log("Delete from DB");
        revalidatePath("/blog")
        revalidatePath("/adming")

    }catch(error){
        console.log(error)
        return {error:"Something went wrong"}
    }
}


 export const handlerGithubLogin=async()=>{
   "use server"
   await signIn("github")
  }

 export const handleLogout=async()=>{
   
    await signOut()
   }

export const register=async (previousState,formdata)=>{
    const {username,email,img,password,cpassword}=Object.fromEntries(formdata)

    if(password !== cpassword){return {error:"Password do not Match"}}

    const salt=await bcrypt.genSalt(10)
    const hashedPassword=await bcrypt.hash(password,salt)
    try{
        connectToDb()

        const user=await User.findOne({username})

        if(user){
              return {error:"UserName already Exist"}
        }

        const newuser=new User({
            username,email,password:hashedPassword,img
        })

        newuser.save()
        console.log("User save in Database");

        return {success:true}


    }catch(error){

    }
}


export const login=async (previousState,formdata)=>{
    const {username,password}=Object.fromEntries(formdata)
    // if(password !== cpassword){return "Password do not Match"}
    try{
        
        await signIn("credentials",{username,password})

    }catch(error){

        if(error.message.includes("CredentialsSignin")){
        return {error:"Login Credential Not Match"}


        }

        throw error

    }
}