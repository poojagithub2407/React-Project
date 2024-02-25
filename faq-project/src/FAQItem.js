import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLessThan } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function FAQItem({ faqData, index }) {
     const [isShow, setIsShow] = useState(false);
     const handleClick = () => {
          setIsShow((isShow) => !isShow)
     }
     useEffect(() => {
          if (index === 0) {
               setIsShow(true)
          }
     }, []);

     return (
          <div className="item-container">
               <div className='d-flex justify-content-between'>
                    <div className='faqQues'>{faqData.question}</div>
                    <div className='circle-icon'><FontAwesomeIcon className={isShow ? 'arrow' : 'null'} icon={faLessThan} onClick={handleClick} /></div>
               </div>
               {isShow && <div className='faqAns'>{faqData.answer}</div>}
          </div>
     )
}

export default FAQItem