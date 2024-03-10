import React from 'react';

function FormContainer({ formValue }) {
  return (
    <div>
      <div>
        <h1>Form Data</h1>
        <span>Name: {formValue.name}</span>
        <br />
        <span>Email Id: {formValue.email}</span>
        <br />
        <span>Date of Birth: {formValue.dob}</span>
        <br />
        <span>Password: {formValue.password}</span>
      </div>
    </div>
  );
}

export default FormContainer;
