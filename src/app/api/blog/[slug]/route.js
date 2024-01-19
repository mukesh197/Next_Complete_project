import { Post } from "@/lib/models"
import { connectToDb } from "@/lib/utlies"
import { NextResponse } from "next/server"



export const GET=async (request,{params})=>{

       const {slug}=params

    try{
        connectToDb()
         const post=await Post.findOne({slug})
         return NextResponse.json(post)


    }catch(error){
        console.log(error)
        throw new Error("Faild to Fetch Post")
    }
}

export const DELET=async (request,{params})=>{

    const {slug}=params

 try{
     connectToDb()
      const delet=await Post.deleteOne({slug})
      return NextResponse.json(delet)


 }catch(error){
     console.log(error)
     throw new Error("Faild to Delete Post")
 }
}