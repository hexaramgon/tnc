import React, { useState, useEffect } from 'react';
import Dropdown from '../CustomAssets/Dropdown';
import ReactTooltip from 'react-tooltip';
import questionicon from '../../svgs/question.svg'
import LocationAutocomplete from 'location-autocomplete';




const Started = ({APIgrab, nextPage}) => {

  // These Hooks are used to change the visual portion of the data selection
  // If hook has API behind, that hook is sued to send data to API.
  const [animation, setAnimation] = useState("");
  const [income, setIncome] = useState(0);
  const [apiIncome, setApiIncome] = useState(1);
  const [location, setLocation] = useState("");
  const [apiLocation, setApiLocation] = useState("");
  const [mode, setMode] = useState(1);
  const [people, setPeople] = useState(0);
  const [initialized, setInit] = useState(false);


  // The Following Functions handle in changing the values that the API will pass in by
  // having an array of all the different functions to do so

  //This loads in any values that were previosully initialzied by the user.
  useEffect(() => {
    setInit(true)
    localStorage.clear();
  }, [initialized]);

  //This takes in user input for location and parses it to be able to pass to the API.
  function changeLocation(l) {
    setLocation(l);
    const zipcode = /[\d]{5}/;
    const output = zipcode.exec(l);
    const city = /(\w\s*)+/;
    const other = city.exec(l);
    if (output) {
      setApiLocation(output);
      setMode(1)
      return;
    } 
    else if (other) {
      setApiLocation(other[0]);
      setMode(3);
      return;
    }
    else{
        return;
    }
  }

  //This takes in user input for Income and parses it to be able to pass to the API.
  function changeIncome(i) {
    setIncome(i)
    switch(i){
      default:
        setApiIncome(1);
        break;
      case '<10K':
        setApiIncome(2);
        break;
      case '10K':
        setApiIncome(3);
        break;
      case '20K':
        setApiIncome(4);
        break;
      case '30K':
        setApiIncome(5);
        break;
      case '40K':
        setApiIncome(6);
        break;
      case '50K':
        setApiIncome(7);
        break;
      case '60K':
        setApiIncome(8);
        break;
      case '70K':
        setApiIncome(8);
        break;
      case '80K':
        setApiIncome(9);
        break;
      case '90K':
        setApiIncome(9);
        break;
      case '100K':
        setApiIncome(10);
        break;
      case '100K+':
        setApiIncome(11);
        break;
    }
  }

  //This function is responsible for animating out and passing values to API
  function transitionDelay() {
      var delayInMilliseconds = 250; //1 second
      if (location !== "" & people !== 0 & income !== 0){
        setAnimation("animation");
        let inputs = ["input_income", "input_location", "input_size", "input_location_mode"];
        let values = [apiIncome, apiLocation, people, mode];
        APIgrab(inputs, values)
        setTimeout(function() {
          nextPage()
        }, delayInMilliseconds);
    }
  };
    
      return (
        <div className="wrapper" id = {animation}>
          <ReactTooltip/>
            <h1>Get Started</h1>
            <p>Start by telling us about your household. We'll use this to fill in the calculator with some assumptions about your footprint. You can adjust as you go to see how you compare.</p>
            <h3>Where do you live?</h3>
            {/* <LocationAutocomplete
              className="text-input"
              googleAPIKey="AIzaSyCoRUrrbKw_g7wg7PnU-UOtoin0EYEihKQ"
              onChange={e => changeLocation(e.target.value)}
              placeholder = "Enter City or Zip Code" 
              onDropdownSelect={e => changeLocation(e.input.value)}
              componentRestrictions={{country : ['USA']}}
            ></LocationAutocomplete> */}
            <input className="text-input" 
            value={location}
            onInput={e => changeLocation(e.target.value)} 
            placeholder = "Enter Zip Code" 
            type="text" id="location" 
            name="location" 
            />
            <div className='tooltip-row'>
              <h3>How many people live in your household??</h3>
              <img alt = "" className='tooltip-icon' style={{top:"10%"}} src={questionicon} data-tip="Enter the total number of adults and children in your household. If you only want to calculate your personal carbon footprint, then select 1 and enter your personal consumption in the calculator, such as just your share of energy bills or driving." />
            </div>          <Dropdown 
              placeholder={"SELECT NUMBER OF PEOPLE"} 
              options={['1', '2', '3', '4', '5', '5+']}
              value={people}
              onChange={p => setPeople(p)}
            ></Dropdown>
            <div className='tooltip-row'>
              <h3>What is your gross annual household income?</h3>
              <img alt = "" className='tooltip-icon'  style={{top:"10%"}} src={questionicon} data-tip="Entering income helps the calculator provide appropriate default values and a comparison to similar households. This information is private even for users that share their profile publicly." />
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
