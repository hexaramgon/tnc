import Switch from '../CustomAssets/Switch'
import React, { useState, useEffect } from 'react';
import Dropdown from '../CustomAssets/Dropdown';

const Home = () => {


  const [test, settest] = useState("test");
  const [unit, setUnit] = useState(undefined);
  const [water, setWater] = useState(undefined);




  useEffect(() => {
    var delayInMilliseconds = 100; //1 second
    setTimeout(function() {
      settest("test-2")
    }, delayInMilliseconds);    }
 , [test]);

    
    return (
      <div className="home-wrapper" id={test}>
        <Switch></Switch>
        <div className="outer-question">
          <h2>How much do you spend on electricity?</h2>
          <div className="row-wrapper">
            <div className="left-home-input">
              <p>Amount</p>
              <input className="text-input" placeholder = "1070" type="text" id="fname" name="fname"/>
            </div>
            <div className="right-home-input">
              <p>Unit</p>
              <Dropdown
                placeholder={"$/YEAR"} 
                options={["$/YEAR", "$/MONTH", "$/WEEK", "$/DAY"]}
                value={unit}
                onChange={u => setUnit(u)}>
              </Dropdown>
            </div>
          </div>
        </div>

        <hr style={{width:"100%", marginBottom:"2rem"}}></hr>

        <div className="outer-question">
          <h2>What is your household water consumption?</h2>
          <div className="row-wrapper">
            <div className="left-home-input">
            <p>Liter Per Day</p>
              <Dropdown
                placeholder={"148 L (AVERAGE FOR 1 PERSON HOUSEHOLD)"} 
                options={["$/YEAR", "$/MONTH", "$/WEEK", "$/DAY"]}
                value={water}
                onChange={w => setWater(w)}>
              </Dropdown>
            </div>
          </div>
        </div>
        <hr style={{width:"100%", marginBottom:"2rem"}}></hr>


        <div className="outer-question">
          <h2>How large is your living space?</h2>
          <div className="row-wrapper">
            <div className="left-home-input">
            <p>Total Square Footage</p>
            <input className="text-input" placeholder = "1850" type="text" id="fname" name="fname"/>
            </div>
          </div>
        </div>
      </div>
    );
}


export default Home;



function HomeInput({question, unit1, unit2,}) {
  <div>
    <h3>{question}</h3>
    <div className="row-wrapper">
      <p></p>
    </div>

    </div>
}