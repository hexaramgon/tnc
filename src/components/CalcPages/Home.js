import Switch from '../CustomAssets/Switch'
import React, { useState, useEffect } from 'react';
import Dropdown from '../CustomAssets/Dropdown';
import ReactTooltip from 'react-tooltip';
import questionicon from '../../svgs/question.svg'



const Home = () => {


  const [animation, setAnimation] = useState("animation");
  const [unit, setUnit] = useState(undefined);
  const [water, setWater] = useState(undefined);
  const [homeToggle, setHomeToggle] = useState(true)




  useEffect(() => {
    var delayInMilliseconds = 100; //1 second
    setTimeout(function() {
      setAnimation("animation-2")
    }, delayInMilliseconds);    }
 , [animation]);


    
    return (
      <div id={animation}>
        <div style={{display:'flex', justifyContent:'center', width:'100%', height:'120px'}}>
         <Switch toggler={setHomeToggle} toggle={homeToggle}></Switch>  
         </div>
         {homeToggle ? <HomeSimple></HomeSimple> : <HomeAdvanced></HomeAdvanced>}     
       </div>
    );
}


export default Home;



function HomeSimple({unit, setUnit, water, setWater}) {

  return (
  <div >
    <div className="outer-question">
      <div className="row-wrapper">
      <h2>How much do you spend on electricity?</h2>
      <img style={{marginLeft:"1rem"}} src={questionicon} data-tip="To calculate your total electricity usage or costs, review your monthly electricity bills. Each bill will tell you how many kilowatt hours you have used in the month at what cost." />
      <ReactTooltip clickable={true} effect="solid" type="info" offset={{top:"-30px"}}/>
      </div>
      <div className="row-wrapper">
        <div className="left-home-input">
          <p>Amount</p>
          <input className="text-input" placeholder = "1070" type="text" id="fname" name="fname"/>
        </div>
        <div className="right-home-input">
          <p>Frequency</p>
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
  )
}


function HomeAdvanced() {
  return (
  <div>
    <div className="outer-question">
      <h2>How much do you spend on electricity?</h2>
      <div className="row-wrapper">
        <div className="left-home-input">
          <p>Amount</p>
          <input className="text-input" placeholder = "1070" type="text" id="fname" name="fname"/>
        </div>
        <div className="right-home-input">
          <p>Frequency</p>
          <Dropdown
            placeholder={"$/YEAR"} 
            options={["$/YEAR", "$/MONTH", "$/WEEK", "$/DAY"]}
            // value={unit}
            // onChange={w => setWater(w)}
            >
          </Dropdown>
        </div>
      </div>
    </div>
    <hr style={{width:"100%", marginBottom:"2rem"}}></hr>  
    <div className="outer-question">
      <h2> What percentage was purcahsed through a clean energy program? </h2>
      <div className="row-wrapper">
        <div className="left-home-input">
          <p>Percentage</p>
          <input className="text-input" placeholder = "0" type="text" id="fname" name="fname"/>
        </div>
      </div>
      
    <hr style={{width:"100%", marginBottom:"2rem"}}></hr>

    <div className="outer-question">
      <h2>How much do you spend on natural gas?</h2>
      <div className="row-wrapper">
        <div className="left-home-input">
          <p>Amount</p>
          <input className="text-input" placeholder = "550" type="text" id="fname" name="fname"/>
        </div>
        <div className="right-home-input">
          <p>Unit</p>
          <Dropdown
            placeholder={"$/YEAR"} 
            options={["$/YEAR", "$/MONTH", "$/WEEK", "$/DAY"]}
            // value={unit}
            // onChange={u => setUnit(u)}
            >
          </Dropdown>
        </div>
      </div>
    </div>

    <hr style={{width:"100%", marginBottom:"2rem"}}></hr>

<div className="outer-question">
  <h2>How much do you spend on heating oil and other fuels?</h2>
  <div className="row-wrapper">
    <div className="left-home-input">
      <p>Amount</p>
      <input className="text-input" placeholder = "200" type="text" id="fname" name="fname"/>
    </div>
    <div className="right-home-input">
      <p>Unit</p>
      <Dropdown
        placeholder={"$/YEAR"} 
        options={["$/YEAR", "$/MONTH", "$/WEEK", "$/DAY"]}
        // value={unit}
        // onChange={u => setUnit(u)}
        >
      </Dropdown>
    </div>
  </div>
  </div>

  <hr style={{width:"100%", marginBottom:"2rem"}}></hr>  
    <div className="outer-question">
      <h2> What is your household water consumption? </h2>
      <div className="row-wrapper">
        <div className="left-home-input">
          <p>Liters Per Day</p>
          <Dropdown
            placeholder={"242(AVERAGE FOR 1 PERSON HOUSEHOLD)"} 
            options={["$/YEAR", "$/MONTH", "$/WEEK", "$/DAY"]}
            // value={unit}
            // onChange={u => setUnit(u)}
            >
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

    
    </div>
  );
}