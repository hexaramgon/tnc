import Switch from '../CustomAssets/Switch'
import React, { useState, useEffect } from 'react';
import Dropdown from '../CustomAssets/Dropdown';
import ReactTooltip from 'react-tooltip';
import questionicon from '../../svgs/question.svg'



const Home = () => {


  const [animation, setAnimation] = useState("animation");
  const [homeToggle, setHomeToggle] = useState(true)




  useEffect(() => {
    var delayInMilliseconds = 100; //1 second
    setTimeout(function() {
      setAnimation("animation-2")
    }, delayInMilliseconds);    }
 , [animation]);


    
    return (
      <div id={animation}>
        <ReactTooltip type="dark" place='right'/>
        <div style={{display:'flex', justifyContent:'center', width:'100%', height:'120px'}}>
         <Switch toggler={setHomeToggle} toggle={homeToggle}></Switch>  
         </div>
         {homeToggle ? <HomeSimple></HomeSimple> : <HomeAdvanced></HomeAdvanced>}     
       </div>
    );
}


export default Home;



function HomeSimple({unit, setUnit, water, setWater}) {

  const [unit1, setUnit1] = useState("")
  const [water1, setWater1] = useState("")



  return (
  <div >
    <div className="outer-question">
      <div className="row-wrapper">
      <div className='tooltip-row'>
        <h2>How much do you spend on electricity?</h2>
        <img alt = "" className='tooltip-icon' src={questionicon} data-tip="To calculate your total electricity usage or costs, review your monthly electricity bills. Each bill will tell you how many kilowatt hours you have used in the month at what cost."></img>
      </div>
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
            value={unit1}
            onChange={u => setUnit1(u)}>
          </Dropdown>
        </div>
      </div>
    </div>
    <hr style={{width:"100%", marginBottom:"2rem"}}></hr>

    <div className="outer-question">
    <div className='tooltip-row'>
        <h2> What is your household water consumption? </h2>
        <img alt = "" className='tooltip-icon' src={questionicon} data-tip="Average household water consumption: 242 liters/ day
          1-person household: 148 liters/day
          2-person household: 242 liters/day
          3-person household: 261 liters/day
          4-person household: 299 literes/day
          5-person household: 337 liters/day"></img>
      </div>
        <div className="row-wrapper">
        <div className="left-home-input">
        <p>Liter Per Day</p>
          <Dropdown
            placeholder={"148 L (AVERAGE FOR 1 PERSON HOUSEHOLD)"} 
            options={["$/YEAR", "$/MONTH", "$/WEEK", "$/DAY"]}
            value={water1}
            onChange={w => setWater1(w)}>
          </Dropdown>
        </div>
      </div>
    </div>
    <hr style={{width:"100%", marginBottom:"2rem"}}></hr>
    <div className="outer-question">
      <div className='tooltip-row'>
        <h2>How large is your living space?</h2>
        <img alt = "" className='tooltip-icon' src={questionicon} data-tip="For a house, measure the length of a house and multiply it by the width of the house. If you have two stories, multiply by two. For an apartment or condo, first determine the area of each room by multiplying the length and width of each room. Add up the total area measurements for each room. This will give you the total area of your living space, all rooms combined."></img>
      </div>      
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


  const [unit2, setUnit2] = useState("")
  const [unit3, setUnit3] = useState("")
  const [unit4, setUnit4] = useState("")


  const [water2, setWater2] = useState("")

  return (
  <div>
    <div className="outer-question">
    <ReactTooltip type="dark" place='right'/>

      <div className='tooltip-row'>
        <h2>How much do you spend on electricity?</h2>
        <img alt = ""  className='tooltip-icon' src={questionicon} data-tip="To calculate your total electricity usage or costs, review your monthly electricity bills. Each bill will tell you how many kilowatt hours you have used in the month at what cost."></img>
      </div>      <div className="row-wrapper">
        <div className="left-home-input">
          <p>Amount</p>
          <input className="text-input" placeholder = "1070" type="text" id="fname" name="fname"/>
        </div>
        <div className="right-home-input">
          <p>Frequency</p>
          <Dropdown
            placeholder={"$/YEAR"} 
            options={["$/YEAR", "$/MONTH", "$/WEEK", "$/DAY"]}
            value={unit2}
            onChange={w => setUnit2(w)}
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
      <div className='tooltip-row'>
        <h2>How much do you spend on natural gas?</h2>
        <img alt = "" className='tooltip-icon' src={questionicon} data-tip="To calculate your total annual natural gas usage or costs, review your monthly utility bills. Each bill will tell you how many cubic metres you have used in the month at what cost."></img>
      </div>
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
            value={unit3}
            onChange={w => setUnit3(w)}
            >
          </Dropdown>
        </div>
      </div>
    </div>

    <hr style={{width:"100%", marginBottom:"2rem"}}></hr>

<div className="outer-question">
  <div className='tooltip-row'>
    <h2>How much do you spend on heating oil and other fuels?</h2>
    <img alt = ""  className='tooltip-icon' src={questionicon} data-tip="To calculate your total annual usage or cost of heating oil or other fuels to heat your home, review your monthly bills for heating oil or other home heating fuels. Each bill will tell you how many litres of oil were delivered to you each month at what cost."></img>
  </div>
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
        value={unit4}
        onChange={w => setUnit4(w)}
        >
      </Dropdown>
    </div>
  </div>
  </div>

  <hr style={{width:"100%", marginBottom:"2rem"}}></hr>  
    <div className="outer-question">
      <div className='tooltip-row'>
        <h2> What is your household water consumption? </h2>
        <img alt = "" className='tooltip-icon' src={questionicon} data-tip="Average household water consumption: 242 liters/ day
          1-person household: 148 liters/day
          2-person household: 242 liters/day
          3-person household: 261 liters/day
          4-person household: 299 literes/day
          5-person household: 337 liters/day"></img>
      </div>
      <div className="row-wrapper">
        <div className="left-home-input">
          <p>Liters Per Day</p>
          <Dropdown
            placeholder={"242(AVERAGE FOR 1 PERSON HOUSEHOLD)"} 
            options={["$/YEAR", "$/MONTH", "$/WEEK", "$/DAY"]}
            value={water2}
            onChange={w => setWater2(w)}
            >
          </Dropdown>        
          </div>
      </div>
    </div>


    <hr style={{width:"100%", marginBottom:"2rem"}}></hr>
    <div className="outer-question">
      <div className='tooltip-row'>
        <h2>How large is your living space?</h2>
        <img alt = "" className='tooltip-icon' src={questionicon} data-tip="For a house, measure the length of a house and multiply it by the width of the house. If you have two stories, multiply by two. For an apartment or condo, first determine the area of each room by multiplying the length and width of each room. Add up the total area measurements for each room. This will give you the total area of your living space, all rooms combined."></img>
      </div>
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