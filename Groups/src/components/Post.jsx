import React, { useState } from 'react'
import { AiOutlineEye } from "react-icons/ai"
import { BsShareFill } from "react-icons/bs"
import { CiLocationOn } from "react-icons/ci"

function Post({ data }) {
  return (
    <div className=' border post border-2 py-2 my-2' style={{ border: "solid gray" }}>
      <div>
        {data.img && <img src={data.img} alt="" className='w-100' />}
      </div>
      <div className='' style={{ paddingLeft: "10px" }}>
        <p className='fw-medium m-0 my-2 mb-3'>{data.type}</p>
        <h4 className='post-heading'>{data.title}</h4>
        <div className='d-flex justify-content-start'>
          {data.content && <p className='post-content text-muted fw-normal'>{data.content}</p>}
          {data.date && <p className='post-content  fw-medium'>{data.date}</p>}
          {data.job && <p className='post-content fw-medium'>{data.job}</p>}
          {data.location && <span className='d-flex' style={{ marginLeft: "10px" }}>
            <CiLocationOn size={20} />
            <p className='post-content  fw-medium' >{data.location}</p>
          </span>}
        </div>
        <div className='d-flex w-100 justify-content-between mt-3'>
          <div className=' d-flex'>
            <img src={data.user.avatar} alt="" className='me-2' style={{ width: "30px", height: "30px" }} />
            <div className=''>
              <p style={{ width: "150px" }} className='p-0 m-0'>{data.user.username}</p>
              <span className='d-flex d-md-none  align-items-center justify-content-start'>
                <AiOutlineEye />
                <p className='m-0 fw-normal text-muted font'>1.4k views</p>
              </span>
            </div>
          </div>
          <div className='d-flex  align-items-center justify-content-center me-3'>
            <span className='d-md-flex d-none align-items-center justify-content-center me-3'>
              <AiOutlineEye />
              <p className='m-0 fw-normal text-muted font'>1.4k views</p>
            </span>
            <BsShareFill className="p-1 rounded" size={25} style={{ background: "#E9ECEF" }} />
          </div>
        </div>
      </div>
    </div>

  )
}

export default Post