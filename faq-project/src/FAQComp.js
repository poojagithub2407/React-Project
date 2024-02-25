import React from 'react'
import './App.css';
import FAQItem from './FAQItem';
function FAQComp() {
     const faqDatas = [
          {
               "question": "What is React?",
               "answer": "React is a JavaScript library for building user interfaces, developed by Facebook."
          },
          {
               "question": "What are the key features of React?",
               "answer": "Key features of React include virtual DOM, component-based architecture, JSX syntax, and uni-directional data flow."
          },
          {
               "question": "What is JSX?",
               "answer": "JSX is a syntax extension for JavaScript used with React. It allows developers to write HTML elements and structures in their JavaScript code."
          },
          {
               "question": "What is the purpose of state in React?",
               "answer": "State in React is used to store and manage component-specific data. It allows components to maintain and update their own data."
          }
     ]

     return (
          <div className="container">
          <h1>Frequently Asked Questions</h1>
               {
                    faqDatas.map((faqData, index) => { return <FAQItem faqData={faqData} index={index} /> }
                    )
               }
          </div>
     )
}

export default FAQComp