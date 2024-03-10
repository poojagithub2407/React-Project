import React,{useState} from 'react'
import FormContainer from './FormContainer';

function MultipleStepForm({formData}) {
     const [formValues, setFormValues] = useState({
          name: '',
          email: '',
          dob: '',
          password: '',
        });
        const [formIndex, setFormIndex] = useState(0);
        const [isSubmitted, setSubmitted] = useState(false);
      
        const handleChange = (e) => {
          const { id, value } = e.target;
          setFormValues({ ...formValues, [id]: value });
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
          if (formIndex === formData.length - 1) {
            console.log('form submitted');
            setSubmitted(true);
          }
          else {
            setFormIndex(id => id + 1);
          }
      
        };
      
        const handleBack = (e) => {
          e.preventDefault();
          setFormIndex(formIndex - 1);
        };  return (
          <div>
          {!isSubmitted ? (
            <form className="container" onSubmit={handleSubmit}>
              {formIndex > 0 && <a href='/' onClick={handleBack}>Back</a>}
              <label>{formData[formIndex].label}</label>
              <input
                type={formData[formIndex].inputType}
                id={formData[formIndex].id}
                placeholder={formData[formIndex].placeholder}
                value={formValues[formData[formIndex].id]}
                onChange={handleChange}
              />
              <button type="submit">
                {formIndex === formData.length - 1 ? 'Submit' : 'Next'}
              </button>
            </form>
          ) : (
           <FormContainer formValue={formValues}/>
          )}
          </div>
  )
}

export default MultipleStepForm;