import { addPost, deletPost, sayHello } from '@/lib/action'
import React from 'react'

function ServerAction() {

  const actionInComponent=async ()=>{
    "use server"
    console.log("This is also work")
  }


  return (
    <div>
      <form action={addPost}>
        <input type='text' placeholder='Title' name='title'/>
        <input type='text' placeholder='desc' name='desc'/>
        <input type='text' placeholder='slug' name='slug'/>
        <input type='text' placeholder='userid' name='userId'/>
      
        <button style={{padding:"20px"}}>Add New Post</button>
      </form>

      <form action={deletPost}>
      
       <input type='text' placeholder='Post Id' name='id'/>
       <button>Delete</button>
      
      </form>


    </div>
  )
}

export default ServerAction