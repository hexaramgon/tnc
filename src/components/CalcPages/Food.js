import React, { useState, useEffect } from 'react';
import questionicon from '../../svgs/question.svg'
import ReactTooltip from 'react-tooltip';


import Slider from "../CustomAssets/Range";

const Food = ({cacheObject, jsonFile, APIgrab}) => {


  const [animation, setAnimation] = useState("animation");
  const [dairy, setDairy] = useState(2.4);
  const [meat, setMeat] = useState(0.9);
  const [fish, setFish] = useState(0.3);
  const [other, setOther] = useState(0.2);
  const [poultry, setPoultry] = useState(0.6);
  const [grains, setGrains] = useState(4.4);
  const [fruits, setFruits] = useState(2.4);
  const [drinks, setDrinks] = useState(1);
  const [initialized, setInit] = useState(false);

  useEffect(() => {
    setFish(localStorage.getItem('fish'))
    setDairy(localStorage.getItem('dairy'))
    setOther(localStorage.getItem('other'))
    setFruits(localStorage.getItem('fruits'))
    setGrains(localStorage.getItem('grains'))
    setMeat(localStorage.getItem('meat'))
    setPoultry(localStorage.getItem('poultry'))
  }, []);



  useEffect(() => {
    var delayInMilliseconds = 100; //1 second
    setTimeout(function() {
      setAnimation("animation-2")
    }, delayInMilliseconds);    
    if (animation === "animation"){
    }
  }
 , [animation]);


    const val = React.useRef();
    React.useEffect(
      () => {
        val.current = [fish, dairy, other, fruits, grains, meat, poultry];
        // val.dairy = dairy;
        // val.other = other;
        // val.fruits = fruits;
        // val.grains = grains;
        // val.meat = meat;
        // val.poultry = poultry;
      },
      [fish, dairy, other, fruits, grains, meat, poultry]
    );
    React.useEffect(() => {
      return () => {
        const inputs = [
          'input_footprint_shopping_food_meatfisheggs',
          'input_footprint_shopping_food_dairy',
          'input_footprint_shopping_food_meat_other',
          'input_footprint_shopping_food_fruitvegetables',
          'input_footprint_shopping_food_cereals',
          'input_footprint_shopping_food_meattype',
          'input_footprint_shopping_food_meat_beefpork',
          'input_footprint_shopping_food_meat_poultry',
          'input_footprint_shopping_food_meat_fish'
        ];
        const values = val.current
        localStorage.setItem('fish', values[0])
        localStorage.setItem('dairy', values[1])
        localStorage.setItem('other', values[2])
        localStorage.setItem('fruits', values[3])
        localStorage.setItem('grains', values[4])
        localStorage.setItem('meat', values[5])
        localStorage.setItem('poultry', values[6])
        APIgrab(inputs, values);
        console.log(dairy, values);
      };
    }, []);




      return (
        <div className="travel-wrapper" id = {animation}>
          <div className='tooltip-row'>
            <ReactTooltip type="dark" place='right'/>
            <h2>How much does the average person in your household eat?</h2>
            <img alt = "" className='tooltip-icon' src={questionicon} data-tip="Enter the daily diet of the average person in your household. For example, if three people eat a total of six servings per day, enter 2 servings per person (6 ÷ 3 = 2)."></img>
          </div>
          <div>
          <Slider
            unit={"daily servings per person"}
            avg={0.9}
            title={"BEEF, PORK, LAMB, VEAL"}
            setval={setMeat}
            val = {meat}
          ></Slider>
          <hr></hr>
          <Slider
            unit={"daily servings per person"}
            avg={0.3}
            title={"FISH AND SEAFOOD"}
            setval={setFish}
            val = {fish}
          ></Slider>
          <hr></hr>
          <Slider
            unit={"daily servings per person"}
            avg={0.2}
            title={"OTHER MEAT AND MEAT ALTERNATIVES(PROCESSED MEAT, NUTS,ETC.)"}
            setval={setOther}
            val = {other}
          ></Slider>
          <hr></hr>
           <Slider
            unit={"daily servings per person"}
            avg={0.6}
            title={"POULTRY AND EGGS"}
            setval={setPoultry}
            val = {poultry}
          ></Slider>
           <hr></hr>
           <Slider
            unit={"daily servings per person"}
            avg={4.4}
            title={"GRAINS & BAKED GOODS"}
            setval={setGrains}
            val = {grains}
          ></Slider>
            <hr></hr>
           <Slider
            unit={"daily servings per person"}
            avg={2.4}
            title={"DAIRY"}
            setval={setDairy}
            val = {dairy}
          ></Slider>
            <hr></hr>
           <Slider
            unit={"daily servings per person"}
            avg={2.4}
            title={"FRUITS AND VEGATABLES"}
            setval={setFruits}
            val = {fruits}
          ></Slider>
          <hr></hr>
           <Slider
            unit={"daily servings per person"}
            avg={1.5}
            title={"DRINKS"}
            setval={setDrinks}
            val = {drinks}
          ></Slider>
          </div>
  
        </div>
      );
  }


export default Food;
