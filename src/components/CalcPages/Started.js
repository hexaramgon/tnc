import React, { useState, useEffect } from 'react';
import Dropdown from '../CustomAssets/Dropdown';
import ReactTooltip from 'react-tooltip';
import questionicon from '../../svgs/question.svg'



const Started = ({nextPage, funcs}) => {

  // These Hooks are used to change the visual portion of the data selection
  const [animation, setAnimation] = useState("");
  const [people, setPeople] = useState(undefined);
  const [income, setIncome] = useState(undefined);
  const [location, setLocation] = useState('');



  // The Following Functions handle in changing the values that the API will pass in by
  // having an array of all the different functions to do so

  function changepeople(p) {
    const peoplefunc = funcs[2]
    setPeople(p)
    peoplefunc(p)
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


  function transitionDelay() {
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
          <div className='tooltip-row'>
            <h3>How many people live in your household??</h3>
            <img className='tooltip-icon' src={questionicon} data-tip="Enter the total number of adults and children in your household. If you only want to calculate your personal carbon footprint, then select 1 and enter your personal consumption in the calculator, such as just your share of energy bills or driving." />
          </div>          <Dropdown 
            placeholder={"SELECT NUMBER OF PEOPLE"} 
            options={['1', '2', '3', '4', '5', '5+']}
            value={people}
            onChange={p => changepeople(p)}
          ></Dropdown>
          <div className='tooltip-row'>
            <h3>What is your gross annual household income?</h3>
            <img className='tooltip-icon' src={questionicon} data-tip="Entering income helps the calculator provide appropriate default values and a comparison to similar households. This information is private even for users that share their profile publicly." />
            <ReactTooltip type="dark" place='right'/>
          </div>
          <Dropdown 
            placeholder={"SELECT INCOME"} 
            options={['< 10K', '10K', '2OK', '3OK', '4OK', '50K', '60K', '70K', '80K', '90K', '100K', '100K+']}
            value={income}
            onChange={i => changeIncome(i)}
          ></Dropdown>
          <br></br>
          <div className="col-wrapper" style={{alignItems: "center"}}>
            <button className="default-button" onClick={() => transitionDelay()}>NEXT</button>
          </div>
        </div>
      );
  }


export default Started;
