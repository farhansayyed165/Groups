import { useState } from 'react'
import Navbar from './components/Navbar'
import BG from "./assets/background.jpg"
import Post from './components/Post'
import PostNav from './components/PostNav'
import {posts} from "./posts"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <main>
      <section className='w-100 overflow-hidden h-100 postion-relative bg-dark' style={{height:"500px"}}>
        <div className=''></div>
        <div className='w-100 d-flex justify-content-center position-absolute z-3' >
          <div className='w-75 topBody text-white'>
            <h1>Computer Engineering</h1>
            <p className=''> 142,765 Computer Engineers follow this</p>
          </div>
        </div>
        <img src={BG} alt="" className='w-100 object-fit-cover bg-dark z-1' style={{maxHeight:"500px", opacity:"100%", mixBlendMode:"overlay"}}/>
      </section>
      <PostNav></PostNav>
      <section className='d-flex justify-content-center flex-column align-items-center w-100 mb-5'>
        {
          posts.map((post, i)=>{
            return <Post data={post} key={i}/>
          })
        }
      </section>

      </main>
    </>
  )
}

export default App
