
import CarbCacl from './components/CarbonCalculator';
import {useState} from 'react';
import './Container.scss';
import CCgraph from './components/Ccgraph';
import Intro from './components/Intro';
import ResultChart from './components/ResultsChart';
import exit from './components/svgs/close-x-10324.svg'
import axios from "axios";

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
  const [inputLocationMode, setInputLocationMode] = useState("1");
  const [inputLocation, setInputLocation] = useState("94703");
  const [inputIncome, setInputIncome] = useState("7");
  const [inputSize, setInputSize] = useState("3");
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
    //URL IS THE API URL WITH ALL THE INPUTS DISPERSERED ACCORDINGLY
    const url =
      "https://apis.berkeley.edu/coolclimate/footprint-defaults?input_location_mode=" + inputLocationMode +  "&input_location=" + inputLocation +"&input_income=" + inputIncome  + "&input_size=" + inputSize;
      const config = {
        headers: {
          "Content-Type": "application/xml",
        },
      };
      // Add Your Key Here!!!
      axios.defaults.headers.common = {
        "app_id" : " 5869deed",
        "app_key": "146ad336ff00822c29c03effcf70cefd",
      };
      //PARSING Since API Results are returned as XML File
      axios.get(url).then((response) => {
        var res = response.data
        let parser = new DOMParser();
        var xmlDoc = parser.parseFromString(res, 'text/html')
        var result = Math.round(xmlDoc.getElementsByTagName("result_grand_total")[0].innerHTML)
        setGrandTotal(result) // Apply baseline
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
          <div className="row-wrapper">
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
          <p>Click/tap on bars to see more details. View documentation for detailed methodology.</p>
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
