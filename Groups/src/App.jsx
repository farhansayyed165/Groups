import { useState } from 'react'
import Navbar from './components/Navbar'
import BG from "./assets/background.jpg"
import Post from './components/Post'
import PostNav from './components/PostNav'
import { posts } from "./posts"
import { CiLocationOn } from "react-icons/ci"
import { MdModeEditOutline } from "react-icons/md"
import { CiCircleInfo } from "react-icons/ci"
import CreateAccount from './components/CreateAccount'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  const [edit, setEdit] = useState(false)
  const [login, setLogin] = useState(false)
  const [createAcc, setCreateAcc] = useState(false)
  const [signin, setSignIn] = useState(false)
  return (
    <>
      <Navbar />
      {/* <CreateAccount></CreateAccount>
      {
        signin && <></>
      } */}
      <main className='w-100'>
        <section className='w-100 overflow-hidden h-100 postion-relative bg-dark' style={{ height: "500px" }}>
          <div className=''></div>
          <div className='w-100 d-flex justify-content-center position-absolute ' style={{zIndex:2}} >
            <div className='w-75 topBody text-white'>
              <h1>Computer Engineering</h1>
              <p className=''> 142,765 Computer Engineers follow this</p>
            </div>
          </div>
          <img src={BG} alt="" className='w-100 object-fit-cover bg-dark ' style={{ maxHeight: "500px", opacity: "100%", mixBlendMode: "overlay", zIndex:1 }} />
        </section>
        <PostNav></PostNav>
        <section className='w-75 d-flex justify-content-center align-content-center mx-auto'>
          <section className='d-flex justify-content-center w-100 mb-5 position-relative'>
            <div className='d-flex align-items-center flex-column'>
              {
                posts.map((post, i) => {
                  return <Post data={post} key={i} />
                })
              }
            </div>
            <div className='sticky-top mt-4 ' style={{ position: "-webkit-sticky", width: "240px", height: '300px', top: "140px" }}>
              <div className='d-flex align-items-center border-bottom border-2 pb-2  mb-5'  >
                <CiLocationOn size={20} className='me-2' />
                <p className=''>Noida, India</p>
                <MdModeEditOutline className='ms-5' />
              </div>
              <div className='d-flex'>
                <CiCircleInfo size={55} className='info' />
                <p className=' text-muted ms-2' style={{ fontSize: "12px" }}>Your location will help us serve better and extend a personalised experience.</p>
              </div>
            </div>
          </section>
        </section>

      </main>
    </>
  )
}

export default App
