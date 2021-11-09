import React, { useState, useEffect } from 'react';



const Switch  = () => {

    
    const [toggle, setToggle] = useState(true);

    function toggleSwitch(bool) {
        setToggle(!toggle)
        if (bool) {
            document.getElementById("lol").checked = !document.getElementById("lol").checked;
        }
    }

    return (
        <div className="switch-wrapper">
            <label class="switch">
                <input type="checkbox" onClick={()=>toggleSwitch(false)} id="lol">
                </input>
            <span class="slider"></span>
            </label>
            <p className="switch-simple" onClick={()=>toggleSwitch(true)} style={{color: toggle ? "white" : "green" }}>SIMPLE</p>
            <p className="switch-advanced" onClick={()=>toggleSwitch(true)} style={{color: toggle ? "green" : "white" }}>ADVANCED</p>
        </div>
    )
}

export default Switch;
