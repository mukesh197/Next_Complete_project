import { Post, User } from "./models"
import { connectToDb } from "./utlies"




// const users=[
//     {id:1,name:"John"},
//     {id:2,name:"Jane"},
// ]

// const posts=[
//     {id:1,title:"Post 1",body:".........",userId:1},
//     {id:2,title:"Post 2",body:".........",userId:1},
//     {id:3,title:"Post 3",body:".........",userId:2},
//     {id:4,title:"Post 4",body:".........",userId:2},
// ]

const Data =[
    {
        id:"01",
        userId:"321",
        title:"Hello world",
        desc:"Description",
        slug:"hello-world",
        img:"https://images.pexels.com/photos/13804085/pexels-photo-13804085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id:"02",
        userId:"322",
        title:"Hello world React",
        desc:"Description",
        slug:"hello-world-react"
    },
    {
        id:"03",
        userId:"323",
        title:"Hello world Angular",
        desc:"Description",
        slug:"hello-world-ang"
    }
]


export const getPosts=async ()=>{
    try{
  await connectToDb()
  const posts=await Post.find()
//   console.log("Get post data===",posts)
  return posts

    }catch(error){
        console.log(error);
      
    }
}


export const getPost=async (slug)=>{
    //  console.log("Get post dat====a"+slug) 
    try{
       await connectToDb()
        const post=await Post.findOne({slug})
        return post
        
        
      
          }catch(error){
              console.log(error);
            
          }
       
    // return posts.find((post)=>post.id===parseInt(id))
}


export const getUser=async (id)=>{
    try{
        connectToDb()
        const user=await User.findById(id)
        console.log("Get post data===",user)
        return user
      
          }catch(error){
              console.log(error);
            
          }

    // return users.find((user)=>user.id===parseInt(id))
}


export const getUsers=async ()=>{
    try{
        connectToDb()
        const users=await User.find()
        console.log("Get User Data",users)
        return users
      
          }catch(error){
              console.log(error);
            
          }
}