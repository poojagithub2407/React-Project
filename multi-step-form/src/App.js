import React from 'react';
import './App.css';
import MultipleStepForm from './MultipleStepForm';

function App() {
  const formData = [
    {
      id: "name",
      label: "Name",
      inputType: "text",
      placeholder: "Your Name...",
      buttonType: "Next",

    },
    {
      id: "email",
      label: "Email Id",
      inputType: "email",
      placeholder: "Your Email Id...",

    },
    {
      id: "dob",
      label: "Date of Birth",
      inputType: "date",
      placeholder: "Your Date of Birth...",

    },
    {
      id: "password",
      label: "Password",
      inputType: "password",
      placeholder: "Your Password...",

    }
  ];

  return (
    <div className="App">
      <MultipleStepForm formData={formData} />
    </div>

  );
}

export default App;
