import React, { useEffect, useState, useRef } from "react";
import tdownicon from '../svgs/arrow-down-3101.svg'


const Dropdown = ({ value, options, placeholder = "Select", onChange }) => {
  const node = useRef();

  const [open, setOpen] = useState(false);

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
