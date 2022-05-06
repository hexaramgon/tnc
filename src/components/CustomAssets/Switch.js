import React from 'react';


const Switch  = ({toggler, toggle}) => {

    //Currently only has toggle and is isolated. Plan to somehow make it affect page render to switch from advanced to simple.

    function toggleSwitch(bool) {
        toggler(!toggle)
        if (bool) {
            document.getElementById("checkboxid").checked = !document.getElementById("checkboxid").checked;
        }
    }

    return (
        <div className="switch-wrapper">
            <label className="switch">
                <input type="checkbox" onClick={()=>toggleSwitch(false)} id="checkboxid">
                </input>
            <span className="inner-switch"></span>
            </label>
            <p className="switch-simple" onClick={()=>toggleSwitch(true)} style={{color: toggle ? "white" : "green" }}>SIMPLE</p>
            <p className="switch-advanced" onClick={()=>toggleSwitch(true)} style={{color: toggle ? "green" : "white" }}>ADVANCED</p>
        </div>
    )
}

export default Switch;
