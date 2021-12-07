import React, { useState, useEffect } from 'react';


//In Progess
const Switch  = ({toggler, toggle}) => {

    //Currently only has toggle and is isolated. Plan to somehow make it affect page render to switch from advanced to simple.

    function toggleSwitch(bool) {
        toggler(!toggle)
        if (bool) {
            document.getElementById("lol").checked = !document.getElementById("lol").checked;
        }
    }

    return (
        <div className="switch-wrapper">
            <label class="switch">
                <input type="checkbox" onClick={()=>toggleSwitch(false)} id="lol">
                </input>
            <span class="inner-switch"></span>
            </label>
            <p className="switch-simple" onClick={()=>toggleSwitch(true)} style={{color: toggle ? "white" : "green" }}>SIMPLE</p>
            <p className="switch-advanced" onClick={()=>toggleSwitch(true)} style={{color: toggle ? "green" : "white" }}>ADVANCED</p>
        </div>
    )
}

export default Switch;
