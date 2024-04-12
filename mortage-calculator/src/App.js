import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [principal, setPrincipal] = useState(0);
  const [interest, setInterest] = useState(0);
  const [year, setYear] = useState(0);
  const[emi,setEmi]=useState(0);

  const handleChange = (e) => {
    const id = e.target.id;
    const value = parseInt(e.target.value);    
    if(id==='principal'){
      setPrincipal(value);
    }else if(id==='interest'){
      setInterest(value);
    }
    else if(id==='year'){
      setYear(value);
    }
  }


  //P(r(r+1)^n/((1+r)^n)-1))
  const calculatEMI=()=>{
   let r=interest;
   if(principal && interest && year){
    r=r/12/100;
    const calPow=Math.pow(1+r,year*12);
    const amount=principal*((r*calPow)/(calPow-1));
    setEmi(Math.round(amount));
   }
  }

  // useEffect(()=>{
  //   calculatEMI();
  // },[principal,interest,year])


  return (
    <div className="container">
      <h1>Mortgage Calculator</h1>
      <div>
        <p>Principal loan amount</p>
        <input type='number'
          id='principal'
          onChange={handleChange}
        />
      </div>
      <div>
        <p>Interest rate</p>
        <input type='number'
          id='interest'
          onChange={handleChange}
        />
      </div>
      <div>
        <p>Length of loan</p>
        <input type='number'
          id='year'
          onChange={handleChange}
        />
      </div>
        <button onClick={()=>{calculatEMI()}} className='calculate'>Calculate</button>
        <div className="horizontal-line"></div>
        <h4>Your monthly mortage payment will be ${emi}</h4>
    </div>
  );
}

export default App;
