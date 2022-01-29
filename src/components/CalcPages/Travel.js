import React, { useState, useEffect } from 'react';
import Dropdown from '../CustomAssets/Dropdown';
import trashicon from '../../svgs/trash-347.svg'


const Travel = () => {


  const [animation, setAnimation] = useState("animation");
  const [vehicles, setVehicles] = useState([0]);
  const [count, setCount] = useState(1);


  
  useEffect(() => {
      var delayInMilliseconds = 100; //1 second
      setTimeout(function() {
        setAnimation("animation-2")
      }, delayInMilliseconds);    }
   , [animation]);

  function addVehicle() {
    setVehicles([...vehicles, String(count)])
    setCount(count + 1)
  }

  function removeVehicle(index) {
    const newVehicles = [...vehicles]; //duplicates the old list (because we don't want to modify state directly)
    newVehicles.splice(index, 1);
    setVehicles(newVehicles);
  }

    
      return (
        <div className="travel-wrapper" id = {animation}>
          <h2>How do you get around?</h2>
          <h5 className="vehicle-sub-text">YOUR VEHICLES</h5>
          {vehicles.map((item, index) => <Vehicle key={item} index={index} removeVehicle={removeVehicle}></Vehicle>)}
          <button className="alternate-button" onClick={()=>addVehicle()}>+ ADD ANOTHER VEHICLE</button>
          <Plane></Plane>
          <p className="info-text">Note: Public transportation (e.g., bus, train) is assumed average for all users since its relative impact is small. </p>
        </div>
      );
    }


export default Travel;


function Vehicle ({index, removeVehicle}) {

  const [gas, setGas] = useState(undefined)
  const [freq, setFreq] = useState(undefined)

  return (
      <div className="vehicle-box">
        <div className="vehicle-delete-button"  onClick={()=>removeVehicle(index)}>
          <img alt = "" src={trashicon} className="trashicon" />
        </div>
        <h2>Vehicle {index + 1}</h2>
          <h3>Fuel Type</h3> 
          <Dropdown 
          placeholder={"GAS"} 
          options={["GAS", "ELECTRIC"]}
          value={gas}
          onChange={g => setGas(g)}
          >
          </Dropdown>       
          <h3>Miles Per Gallon</h3>        
          <input className="text-input" type="text" id="mpg" name="mpg"/>
          <div className="row-wrapper input-row">
            <div className="half-width">
              <h3>Miles Driven</h3>        
              <input className="text-input" type="text" id="md" name="md"/>
            </div>
            <div className="half-width">
              <h3>Frequency</h3>        
              <Dropdown 
              placeholder={"PER YEAR"} 
              options={["PER YEAR", "PER MONTH", "PER WEEK", "PER DAY"]}
              value={freq}
              onChange={f => setFreq(f)}
              ></Dropdown>       
            </div>
          </div>
      </div>
  )
}

function Plane () {
  return (
      <div className="vehicle-box">
        <h2>Flights</h2>
          <h3>Short one-way-flights &lt; 400 mi per year</h3>        
          <input className="text-input" type="text" id="shortfl" name="shortfl"/>
          <h3>Medium one-way flights 400-1500 mi per year</h3>        
          <input className="text-input" type="text" id="medfl" name="medfl"/>
          <h3>Long one-way flights 1500 - 3000 mi per year</h3>        
          <input className="text-input" type="text" id="longfl" name="longfl"/>
          <h3>Extended one-way flights &gt; 3000 mi per year</h3>        
          <input className="text-input" type="text" id="extfl" name="extfl"/>
      </div>
  )
}

