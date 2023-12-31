import React from 'react'
import DownArrow from "../assets/caret-down-fill.svg"
import joinicon from "../assets/join.svg"


function PostNav() {
    return (
        <>
            {/* md nav */}
            <nav className='d-md-none d-flex'>

            </nav>

            {/* lg nav */}
            <nav className='sticky-top z-1' style={{top:"30px"}}>

                <nav className=' w-100 d-md-flex  d-none justify-content-center lg-nav  bg-white pb-2'>
                    <div className='d-flex justify-content-between w-75' style={{ marginTop: "3rem", width: "" }}>
                        <div className='d-flex  lg-nav-sections'>
                            <p className='text-black border-bottom border-3 border-black '>All Posts(32)</p>
                            <p>Article</p>
                            <p>Event</p>
                            <p>Education</p>
                            <p>Job</p>
                        </div>
                        <div>

                        </div>
                        <div>
                            <div className='d-flex '>
                                <button className='d-flex bg-body-secondary align-items-center justify-content-center border-0 p-0 rounded me-5' style={{ minWidth: "140px" }}><p className=' me-2'>Write a Post</p> <img src={DownArrow} style={{ width: "20px" }} className='m-0' alt="" /></button>
                                <button className='bg-primary d-flex border-0 align-items-center justify-content-center rounded p-2 '><img src={joinicon} alt="" /> <p className='text-white  me-2' style={{ minWidth: "100px" }}>Join Group</p></button>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className='w-75 '>

                </div>
            </nav>
        </ >
    )
}

export default PostNav