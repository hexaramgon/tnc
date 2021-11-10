import React, { useState, useEffect } from 'react';

import Slider from "../CustomAssets/Range";

const Food = () => {


  const [animation, setAnimation] = useState("animation");



  useEffect(() => {
    var delayInMilliseconds = 100; //1 second
    setTimeout(function() {
      setAnimation("animation-2")
    }, delayInMilliseconds);    }
 , [animation]);

    
      return (
        <div className="travel-wrapper" id = {animation}>
          <h2>How much does the average person in your household eat?</h2>
          <div>
          <Slider
            unit={"daily servings per person"}
            avg={0.9}
            title={"BEEF, PORK, LAMB, VEAL"}
          ></Slider>
          <hr></hr>
          <Slider
            unit={"daily servings per person"}
            avg={0.3}
            title={"FISH AND SEAFOOD"}
          ></Slider>
          <hr></hr>
          <Slider
            unit={"daily servings per person"}
            avg={0.2}
            title={"OTHER MEAT AND MEAT ALTERNATIVES(PROCESSED MEAT, NUTS,ETC.)"}
          ></Slider>
          <hr></hr>
           <Slider
            unit={"daily servings per person"}
            avg={0.6}
            title={"POULTRY AND EGGS"}
          ></Slider>
           <hr></hr>
           <Slider
            unit={"daily servings per person"}
            avg={4.4}
            title={"GRAINS & BAKED GOODS"}
          ></Slider>
            <hr></hr>
           <Slider
            unit={"daily servings per person"}
            avg={2.4}
            title={"DAIRY"}
          ></Slider>
            <hr></hr>
           <Slider
            unit={"daily servings per person"}
            avg={2.4}
            title={"FRUITS AND VEGATABLES"}
          ></Slider>
          <hr></hr>
           <Slider
            unit={"daily servings per person"}
            avg={1.5}
            title={"DRINKS"}
          ></Slider>
          </div>
  
        </div>
      );
  }


export default Food;
