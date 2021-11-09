import React, { useState, useEffect } from 'react';
import Slider from '../CustomAssets/Range';
import Switch from '../CustomAssets/Switch';


//Shopping Page for the Calculator. 
const Shopping = () => {

  const [test, settest] = useState("test");


  useEffect(() => {
    var delayInMilliseconds = 100; //1 second
    setTimeout(function() {
      settest("test-2")
    }, delayInMilliseconds);    }
 , [test]);
    
    return (
      <div className="shopping-wrapper" id={test}>
        <Switch></Switch>
        <h2>In a given month, about how much do you spend on the following?</h2>
        <div style={{width:"100%"}}>
        <Slider
            unit={"/month"}
            avg={2600}
            title={"PERSONAL (CLOTHING,MEDICAL)"}
          ></Slider>
          <hr></hr>
          <Slider
            unit={"/month"}
            avg={660}
            title={"HOME (FURNITURE,TECHNOLOGY)"}
          ></Slider>
          <hr></hr>
          <Slider
            unit={"/month"}
            avg={214}
            title={"CAR"}>
            </Slider>
        </div>

      </div>
    );
}


export default Shopping;