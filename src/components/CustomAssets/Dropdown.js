import React, { useEffect, useState, useRef } from "react";
import tdownicon from '../svgs/arrow-down-3101.svg'

//Class for custom Dropdown
const Dropdown = ({ value, options, placeholder = "Select", onChange }) => {

  
  //////////////////////////////////////////
  //              ARGUEMENTS              //
  //////////////////////////////////////////    

  //----value----
  //Global state value that will be displayed
  //Note that is ONLY a reference and should NOT be mantipulated

  //----options----
  //All the possible options that the dropwdown will display. Should be an array of strings.
  //eg... ['dog', 'cat', 'turtle']

  //----placeholder----
  //The initial default value that the dropwdown menu will have selected. A string
  
  //----onchange---- 
  //A function in charge of changing the global state value. 
  //Used in order to make sure we're never touching the state directly. 



  //////////////////////////////////////////
  //        JAVASCRIPT FUNCTIONS          //
  //////////////////////////////////////////

  
  const node = useRef(); //Used to handle outside clicks 

  const [open, setOpen] = useState(false); // React Hook stating whether dropdown is open or not.

  const handleClickOutside = e => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setOpen(false);
  };

  const handleChange = selectedValue => {
    onChange(selectedValue);
    setOpen(false);
  };

  //Using UseEffect to only check for outside clicks when dropdown menu is open.
  useEffect(() => {             
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);


  //////////////////////////////////////////
  //             HTML RENDER              //
  //////////////////////////////////////////


  return (
    <div ref={node} style={{position: "relative"}}>
      <button className="select-input" onClick={e => setOpen(!open)}>
        {value || placeholder}
      </button>
              <img alt="" className="down-icon" src={tdownicon}></img>

        <div className="select-wrapper" style={open ? {maxHeight: "400px"}: {maxHeight: "0px"}}>
        <div className="select-options">
        {options.map(option => <div key={option} className="option-input" onClick={(e)=>handleChange(option)}><p className="select-input-text">{option}</p></div>)}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
