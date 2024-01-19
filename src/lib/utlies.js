// import mongoose from "mongoose";

import mongoose from "mongoose";


const connection={}
export const connectToDb=async ()=>{
    console.log("Welcome Database file..");
    try{

      if(connection.isConnected){
        console.log("Using existing   connection ")
        return;
      }

     let db=  await mongoose.connect("mongodb://127.0.0.1:27017/test").then(()=>console.log("data base connection successfull")).catch(()=>console.log("data base connection fail"))
    //  connection.isConnected=db.connections[0].readyState
    // console.log("AAAAA+++++",db)
      

    }catch(error){
        console.log(error)
    }
}
