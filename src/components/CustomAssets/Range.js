import React, { useState } from 'react';


const Slider = ({unit, avg, title, setval, val}) => {


  //////////////////////////////////////////
  //              ARGUEMENTS              //
  //////////////////////////////////////////    

  //----units----
  //A string that will display the units when the range is displaying numbers


  //----avg----
  //A float representing the avergage that will be used for calcluations based on slider position.

  //----title----
  //A string for the title of the slider



  //////////////////////////////////////////
  //        JAVASCRIPT FUNCTIONS          //
  //////////////////////////////////////////


    const [value, setValue] = useState("1");  //Default slider value is average

    function handleChange(event) {
        setValue(event.target.value)
        setval(Math.round(((avg * event.target.value) + Number.EPSILON) * 100) / 100);
    }




    //////////////////////////////////////////
    //             HTML RENDER              //
    //////////////////////////////////////////
    
    return (
    <div className="slidecontainer">
        <section style={{textAlign:"left", width:"100%", margin:"1.5rem"}}>
            <h4>{title}</h4>
            <p>{val} {unit}</p>
        </section>
        <input 
            type="range" 
            min="0" 
            max="3" 
            // id="myRange"
            value={value} 
            className="ccslider"
            onChange={(e)=>handleChange(e)}>
        </input>
        <div className="row-wrapper" style={{width: "100%",justifyContent: "space-between"}}>
            <h3 className="slide-tick">None</h3>   
            <h3 className="slide-tick">Average</h3>
            <h3 className="slide-tick">2x Average</h3>
            <h3 className="slide-tick">3x Average</h3>
        </div>
    </div>
    );
}


export default Slider;
