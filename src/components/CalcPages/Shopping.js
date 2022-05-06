import React, { useState, useEffect } from 'react';
import Slider from '../CustomAssets/Range';
import Switch from '../CustomAssets/Switch';


//Shopping Page for the Calculator. 
const Shopping = () => {

  const [animation, setAnimation] = useState("animation");
  const [shopToggle, setShopToggle] = useState(true)



  useEffect(() => {
    var delayInMilliseconds = 100; //1 second
    setTimeout(function() {
      setAnimation("animation-2")
    }, delayInMilliseconds);    }
 , [animation]);
    
    return (
      <div className="shopping-wrapper" id={animation}>
         <Switch toggler={setShopToggle} toggle={shopToggle}></Switch>  
        {shopToggle ? <HomeSimple></HomeSimple> : <HomeAdvanced></HomeAdvanced> }
      </div>
    );
}


export default Shopping;


function HomeSimple() {


  const [unit1, setUnit1] = useState(2600)
  const [unit2, setUnit2] = useState(660)
  const [unit3, setUnit3] = useState(214)




  return (
    <div >
      <h2>In a given month, about how much do you spend on the following?</h2>
      <div style={{width:"100%"}}>
      <Slider
          unit={"/month"}
          avg={2600}
          title={"PERSONAL (CLOTHING,MEDICAL)"}
          setval={setUnit1}
          val = {unit1}
        ></Slider>
        <hr></hr>
        <Slider
          unit={"/month"}
          avg={660}
          title={"HOME (FURNITURE,TECHNOLOGY)"}
          setval={setUnit2}
          val = {unit2}
        ></Slider>
        <hr></hr>
        <Slider
          unit={"/month"}
          avg={214}
          title={"CAR"}
          setval={setUnit3}
          val = {unit3}>
          </Slider>
      </div>
    </div>
  );
}



function HomeAdvanced() {

  return (
    <div >
      <h2>In a given month, about how much do you spend on the following?</h2>
      <div className="outer-question">
        <h4>Personal</h4>
        <div className="row-wrapper">
          <div className ="col-wrapper half-width">
            <p>Clothing</p>
            <input className="text-input" placeholder = "464" type="text" id="fname" name="fname"/>
          </div>
          <div className ="col-wrapper half-width">
            <p>Medical</p>
            <input className="text-input" placeholder = "1140" type="text" id="fname" name="fname"/>
          </div>
        </div>
        <div className="row-wrapper">
          <div className ="col-wrapper half-width">
            <p>Entertainment</p>
            <input className="text-input" placeholder = "277" type="text" id="fname" name="fname"/>
          </div>
          <div className ="col-wrapper half-width">
            <p>Personal Care</p>
            <input className="text-input" placeholder = "138" type="text" id="fname" name="fname"/>
          </div>
        </div>
        <div className="row-wrapper">
          <div className ="col-wrapper half-width">
            <p>Personal buisness and finance</p>
            <input className="text-input" placeholder = "450" type="text" id="fname" name="fname"/>
          </div>
          <div className ="col-wrapper half-width">
            <p>Organizations and Charity</p>
            <input className="text-input" placeholder = "131" type="text" id="fname" name="fname"/>
          </div>
        </div>
      </div>

      <div className="outer-question">
        <h4>Home</h4>
        <div className="row-wrapper">
          <div className ="col-wrapper half-width">
            <p>Furniture and Appliances</p>
            <input className="text-input" placeholder = "464" type="text" id="fname" name="fname"/>
          </div>
          <div className ="col-wrapper half-width">
            <p>Technology</p>
            <input className="text-input" placeholder = "1140" type="text" id="fname" name="fname"/>
          </div>
        </div>
        <div className="row-wrapper">
          <div className ="col-wrapper half-width">
            <p>Office Supplies</p>
            <input className="text-input" placeholder = "277" type="text" id="fname" name="fname"/>
          </div>
        </div>
      </div>


      <div className="outer-question">
        <h4>Car</h4>
        <div className="row-wrapper">
          <div className ="col-wrapper half-width">
            <p>Auto Parts</p>
            <input className="text-input" placeholder = "464" type="text" id="fname" name="fname"/>
          </div>
          <div className ="col-wrapper half-width">
            <p>Car Maintenance</p>
            <input className="text-input" placeholder = "1140" type="text" id="fname" name="fname"/>
          </div>
        </div>
      </div>

    </div>
  );
}
