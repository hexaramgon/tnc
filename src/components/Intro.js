import React, { useState, useEffect } from 'react';


const Intro = ({page}) => {


  //////////////////////////////////////////
  //              ARGUEMENTS              //
  //////////////////////////////////////////    

  //----page----
  //Current page calc is displaying. 
  //If 0 (Start) Should be displaying introtext, anything else don't.

  const [show, setShow] = useState("");

  //Functions to handle Fade Out of INTRO Text.
  //When Page is not displaying 0, then delay the fadeout effect
  

  function compRemoval() {
    setTimeout(() => {
       setShow("none")
    }, 300);
  }

  useEffect(() => {
    if (page !== 0){
        compRemoval();
    }
    if (page === 0){
      setShow("block")
    }
  }, [show, page]);


  //////////////////////////////////////////
  //        HTML FOR INTRO TEXT           //
  //////////////////////////////////////////

    return (
        <div className="info-prelude" id={show}>
            <div id={page ? "blank-display" : ""}>
                <h1>Carbon Footprint Calculator</h1>
                <h2>What is a carbon footprint?</h2>
                <p>A carbon footprint is the total amount of greenhouse gases (including carbon dioxide and methane) that are generated by our actions</p>
                <p>The average carbon footprint for a person in the United States is 16 tons, one of the highest rates in the world. Globally, the average is closer to 4 tons. To have the best chance of avoiding a 2°C rise in global temperatures, the average global carbon footprint per year needs to drop under 2 tons by 2050.</p> 
                <h2>Why lower your carbon footprint?</h2>
                <p>Lowering individual carbon footprints from 16 tons to 2 tons doesn't happen overnight! By making small changes to our actions, like eating less meat, taking less connecting flights and line drying our clothes, we can start making a big difference. 
                </p>
                <section className="row-wrapper">
                    <p><b>Tip:</b>Before you start, gather your electricity bills so you have the data you need. </p>
                </section>
            </div>
        </div>
    );
}

export default Intro