import React from 'react'
import GroupsLogo from "../assets/whole.svg"
import DownArrow from "../assets/caret-down-fill.svg"
import {BiSearchAlt2} from "react-icons/bi"

function Navbar() {
    return (
        <nav className='d-flex justify-content-between align-items-center fw-medium py-2 px-5 mt-2'>
            <img src={GroupsLogo} alt="" />
            <div className='d-flex border border-2 rounded-pill py-1 align-items-center px-2  justify-content-center' style={{backgroundColor:"#F2F2F2"}}>
            <BiSearchAlt2 color='gray' size={20} ></BiSearchAlt2>
            <input 
            type="text"
            placeholder='Search for your favorite groups in ATG'
            className='text-center rounded border-0 fw-medium pl-0 ml-0' style={{width:"300px", backgroundColor:"transparent"}}
            />
            </div>
            <div className='d-flex'>
                <p className='p-0 m-0'>Create account.
                    <span className='fw-bold text-primary'> It's free!</span>
                </p>
                <img src={DownArrow} alt="" className='mx-2 px-1'/>
            </div>

        </nav>
    )
}

export default Navbar