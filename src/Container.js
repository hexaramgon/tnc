import CarbCacl from './components/CarbonCalculator';
import {useState} from 'react';
import './Container.scss';
import CCgraph from './components/Ccgraph';
import ResultChart from './components/ResultsChart';
import exit from './svgs/close-x-10324.svg'
import * as APILib from '@coolclimate/calculator-api';

//Container.js is the catch all for the codebase. This is where we commuincate with the API and set the pages of the calculator/ The Results offset.
//In Short Container.JS is the parent of all the subsequent React Components and is the single source of truth.

function Container() {



  //////////////////////////////////////////
  //              REACT HOOKS             //
  //////////////////////////////////////////
 
 

  const [page, setPage] = useState(0); // page is integer corresponding to page on calculator widget. eg 0=starting, 1=travel...etc
  const [graphDisplay, setGraphDisplay] = useState(false); //graphdisplay is a toggle to display overlay for results. false = NotDISPLAYED.

  //INPUTS FOR API 
  //USES FOLLOWING FORMAT:
  //const [apioption, functiontochangeapioption] = useState(defaultvalue)
  const [inputLocationMode, setInputLocationMode] = useState(1);
  const [inputLocation, setInputLocation] = useState("94703");
  const [inputIncome, setInputIncome] = useState(7);
  const [inputSize, setInputSize] = useState(3);
  const funcs = [setInputLocation, setInputIncome, setInputSize]
  

  //RESULTS FROM API
  //Used intermitenlly throughout codebase, state stays at parent but the hook to change it gets passed down through React Components.
  const [grandTotal, setGrandTotal] = useState("");
  const [transportTotal, setTransportTotal] = useState("");
  const [foodTotal, setFoodTotal] = useState("");
  const [housingTotal, setHousingTotal] = useState("");
  const [goodsTotal, setGoodsTotal] = useState("");



  //////////////////////////////////////////
  //        JAVASCRIPT FUNCTIONS          //
  //////////////////////////////////////////
  


  //Advances to next page
  function nextPage() {
    APIgrab()
    setPage(page + 1)
  }

  //Advances to last page
  function prevPage() {
    setPage(page - 1)
  }

  //Function used for selecting page from topnavbar of calc.
  function selectPage(pageNum) {
    setPage(pageNum)
  }

  //Grabs from API
  function APIgrab() {
    /** Note From Yunhao(Cookie):
     * I've changed this to use the APILib
     * 
     * To be able to implement more input features, use APILib.COMPUTE_FOOTPRINT_API() instead of current class
     * But you need to use APILib.GET_DEFAULTS_AND_RESULTS_API() first to be able to get default inputs.
     * 
     * I wrapped up some parameters by parseInt because sometimes typescript runtime does type check, 
     * just now that during implemention its best to use appropriate type in the actual compnents, as
     * it tends to keep everything cleaner
     */
    let APICaller = new APILib.GET_DEFAULTS_AND_RESULTS_API();
    APICaller.callAPI({
      input_location_mode: parseInt(inputLocationMode),
      input_income: parseInt(inputIncome),
      input_location: inputLocation,
      input_size: parseInt(inputSize)
    }).then((returnVal) => {
      setGrandTotal(Math.round(returnVal.result_grand_total));
    });
  }

  //Toggles Graph Overlay for results
  function toggleGraph() {
    if (!graphDisplay) {
      document.body.style.overflow = "hidden";
    } else{
      document.body.style.overflow = "visible";
    }
    setGraphDisplay(!graphDisplay)
  }



  //////////////////////////////////////////
  //             HTML RENDER              //
  //////////////////////////////////////////
  


    return (
    <div className="container row-wrapper">
      <div className={graphDisplay ? "graph-display" : "none"}> 
        <div className="more-info-graph">
          <div className="exit-icon-container"  onClick={()=>toggleGraph()}>
            <img alt="" src={exit} className="exit-icon"/>
          </div>
          <h1>YOUR CARBON FOOTPRINT</h1>
          <div className="info-bar row-wrapper">
            <div className="row-wrapper info-gaze">
              <div className="info-box light-blue">
              </div>
              <h2>YOUR HOUSEHOLDS</h2>
            </div>
            <div className="row-wrapper info-gaze">
              <div className="info-box light-grey">
              </div>
              <h2>SIMILAR HOUSEHOLDS</h2>
            </div>
          </div>
          <p style={{textAlign:"center"}}>Click/tap on bars to see more details. View documentation for detailed methodology.</p>
          <ResultChart></ResultChart>
        </div>
      </div>
      <div className="carb-calc" id={page ? "updated-carb-calc" :""}>
        <CarbCacl page={page} nextPage={nextPage} prevPage={prevPage} selectPage={selectPage} funcs={funcs} > </CarbCacl>
      </div>
      {/* <Intro page={page}></Intro> */} 
      <div className = "rightgraph-transition" id={page ?  "" : "blank-display"}>
        <CCgraph toggleGraph={toggleGraph} grandTotal={grandTotal}></CCgraph>
      </div>
    </div>
    );
}

export default Container;
