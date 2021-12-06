import React from 'react';
import Shopping from './CalcPages/Shopping';
import Started from './CalcPages/Started';
import Travel from './CalcPages/Travel';
import Home from './CalcPages/Home';
import Results from './CalcPages/Results';
import Food from './CalcPages/Food';
import CCgraph from '../components/Ccgraph';


//Carbon Calculator Wrappper to render different pages and handle page changes
//Also in charge of updating API Call whenever next button is clicked or navbar is clicked
const CarbCacl = ({page, nextPage, prevPage, selectPage, funcs}) => {


  //////////////////////////////////////////
  //              ARGUEMENTS              //
  //////////////////////////////////////////    

  //----page----
  //Current page to pass in. State is held in Container.js (single source of truth) 


  //----nextPage----
  //Nextpage function passed in from parent that is called whenever you click nextpage button.


  //----prevPage----
  //PrevPage function passed in from parent that is called whenever you click prevPage button.

    
  //----selectPage----
  //selectPage function passed in from parent that is called whenever you click on navbar and upsates page with corrosponding click.

    
  //----funcs----
  //Functions to update container.js API Input states passed on to Carbon Calculator Pages.


    //Pages to render based on index 
    const pages = [<Started nextPage = {nextPage} funcs = {funcs}></Started>, <Travel></Travel>, <Home></Home>, <Food></Food>, <Shopping></Shopping>, <Results></Results>]
    


  //////////////////////////////////////////
  //        HTML RENDER                   //
  //////////////////////////////////////////
    


  return (
    <div className="full-width">
      <div className={page === 0 ? "none" : "cc-header"}>
        <div id={page ? "" : "animation"}>
          <h1>Carbon Footprint Calculator</h1>
        </div>
        <div className="cc-navbar-wrapper">
          <div className="cc-navbar row-wrapper"> 
            <section className="sub-icon" id = {page === 1 ? "selected" : ""} onClick={()=>selectPage(1)}> 
              <h4>TRAVEL</h4>
            </section>
            <section className="sub-icon" id = {page === 2 ? "selected" : ""} onClick={()=>selectPage(2)}> 
              <h4>HOME</h4>
            </section>
            <section className="sub-icon" id = {page === 3 ? "selected" : ""} onClick={()=>selectPage(3)}> 
              <h4>FOOD</h4>
            </section>
            <section className="sub-icon" id = {page === 4 ? "selected" : ""} onClick={()=>selectPage(4)}> 
              <h4>SHOPPING</h4>
            </section>
            <section className="sub-icon" id = {page === 5 ? "selected" : ""} onClick={()=>selectPage(5)}> 
              <h4>RESULTS</h4>
            </section>
          </div>
        </div>
      </div>
      <div className="carb-calc-wrapper">
        {pages[page]}
      </div>
      <div style={{position:"relative"}}>
        {/* <CCgraph></CCgraph> */}
      </div>
      <hr id = {page ? "" : "none" }></hr>
      <div className="row-wrapper button-row" id = {page ? "" : "none" }>
        <button className="alternate-button" onClick={()=>prevPage()}>BACK</button>
        <button className="default-button" onClick={()=>nextPage()}>NEXT</button>
      </div>
    </div>
    );
  }


export default CarbCacl;
