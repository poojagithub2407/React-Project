import React, { useEffect, useState } from 'react'

function List({ faqItem, index }) {
  const[isShow,setIsShow]=useState(index===0);
  const toggleShow=()=>{
    setIsShow(!isShow);
  }
  //  useEffect(()=>{
  //   if(index===0){
  //   setIsShow(true)
  //   }
  //  },[index])
  return (
    <div className='container border p-3'>
      <div className='row'>
        <div className='col-md-4'><button onClick={toggleShow}>{'>'}</button></div>
        <div className='col-md-4'>{faqItem.question}</div>
        {isShow &&<div>{faqItem.answer}</div>}
      </div>
    </div>
  )
}

export default List