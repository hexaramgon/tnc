import React, { useState } from 'react';


const Slider = ({unit, avg, title}) => {


    const [value, setValue] = useState("1");

    function handleChange(event) {
        setValue(event.target.value)
    }

    
    return (
    <div class="slidecontainer">
        <section style={{textAlign:"left", width:"100%", margin:"1.5rem"}}>
            <h4>{title}</h4>
            <p>{Math.round(((avg * value) + Number.EPSILON) * 100) / 100} {unit}</p>
        </section>
        <input 
            type="range" 
            min="0" 
            max="3" 
            id="myRange"
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
