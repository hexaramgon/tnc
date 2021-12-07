import React, { useState, useEffect } from 'react';
import Dropdown from '../CustomAssets/Dropdown';

const Started = ({nextPage, funcs}) => {


  const [animation, setAnimation] = useState("");
  const [people, setPeople] = useState(undefined);
  const [income, setIncome] = useState(undefined);
  const [location, setLocation] = useState('');



  function changepeople(p) {
    const sup = funcs[2]
    setPeople(p)
    sup(p)
  }

  function changeIncome(i) {
    const inco = funcs[1]
    setIncome(i)    
    switch(i){
      case '<10K':
        inco(2)
        break;
      case '10K':
        inco(3)
        break;
      case '20K':
        inco(4)
        break;
      case '30K':
        inco(5)
        break;
      case '40K':
        inco(6)
        break;
      case '50K':
        inco(7)
        break;
      case '60K':
        inco(8)
        break;
      case '70K':
        inco(8)
        break;
      case '80K':
        inco(9)
        break;
      case '90K':
        inco(9)
        break;
      case '100K':
        inco(10)
        break;
      case '100K+':
        inco(11)
        break;
    }
  }


  function tester() {
    setAnimation("animation");
      var delayInMilliseconds = 250; //1 second
      setTimeout(function() {
        const loc = funcs[0]
        loc(location)
        nextPage()
      }, delayInMilliseconds);
  };
    
      return (
        <div className="wrapper" id = {animation}>
          <h1>Get Started</h1>
          <p>Start by telling us about your household. We'll use this to fill in the calculator with some assumptions about your footprint. You can adjust as you go to see how you compare.</p>
          <h3>Where do you live?</h3>
          <input className="text-input" value={location} onInput={e => setLocation(e.target.value)} placeholder = "Enter City or Zip Code" type="text" id="location" name="location"/>
          <h3>How many people live in your household?</h3>
          <Dropdown 
            placeholder={"SELECT NUMBER OF PEOPLE"} 
            options={['1', '2', '3', '4', '5', '5+']}
            value={people}
            onChange={p => changepeople(p)}
          ></Dropdown>
          <h3>What is your gross annual household income?</h3>
          <Dropdown 
            placeholder={"SELECT INCOME"} 
            options={['< 10K', '10K', '2OK', '3OK', '4OK', '50K', '60K', '70K', '80K', '90K', '100K', '100K+']}
            value={income}
            onChange={i => changeIncome(i)}
          ></Dropdown>
          <br></br>
          <div className="col-wrapper" style={{alignItems: "center"}}>
            <button className="default-button" onClick={() => tester()}>NEXT</button>
          </div>
        </div>
      );
  }


export default Started;
