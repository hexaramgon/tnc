import CarbCacl from './components/CarbonCalculator';
import {useState} from 'react';
import './Container.scss';
import CCgraph from './components/Ccgraph';
import ResultChart from './components/ResultsChart';
import exit from './svgs/close-x-10324.svg'
import * as APILib from '@coolclimate/calculator-api';
import Intro from './components/Intro'

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

  //Starting Page 
  const [inputLocationMode, setInputLocationMode] = useState(1);
  const [inputLocation, setInputLocation] = useState("94703");
  const [inputIncome, setInputIncome] = useState(1);
  const [inputSize, setInputSize] = useState(1);
  const startedPageFuncs = [setInputLocation, setInputIncome, setInputSize];

  //Transportation
  const [inputNumVehicles, setNumVehicles]= useState(0);
  const [inputFuel1, setinputFuel1] = useState(0);
  const [inputFuel2, setinputFuel2] = useState(0);
  const [inputFuel3, setinputFuel3] = useState(0);
  const [inputFuel4, setinputFuel4] = useState(0);
  const [inputFuel5, setinputFuel5] = useState(0);
  const [inputFuel6, setinputFuel6] = useState(0);
  const [inputFuel7, setinputFuel7] = useState(0);
  const [inputFuel8, setinputFuel8] = useState(0);
  const [inputFuel9, setinputFuel9] = useState(0);
  const [inputFuel10, setinputFuel10] = useState(0);
  const [inputMiles1, setinputMiles1] = useState(0);
  const [inputMiles2, setinputMiles2] = useState(0);
  const [inputMiles3, setinputMiles3] = useState(0);
  const [inputMiles4, setinputMiles4] = useState(0);
  const [inputMiles5, setinputMiles5] = useState(0);
  const [inputMiles6, setinputMiles6] = useState(0);
  const [inputMiles7, setinputMiles7] = useState(0);
  const [inputMiles8, setinputMiles8] = useState(0);
  const [inputMiles9, setinputMiles9] = useState(0);
  const [inputMiles10, setinputMiles10] = useState(0);
  const [inputMpg1, setinputMpg1] = useState(0);
  const [inputMpg2, setinputMpg2] = useState(0);
  const [inputMpg3, setinputMpg3] = useState(0);
  const [inputMpg4, setinputMpg4] = useState(0);
  const [inputMpg5, setinputMpg5] = useState(0);
  const [inputMpg6, setinputMpg6] = useState(0);
  const [inputMpg7, setinputMpg7] = useState(0);
  const [inputMpg8, setinputMpg8] = useState(0);
  const [inputMpg9, setinputMpg9] = useState(0);
  const [inputMpg10, setinputMpg10] = useState(0);
  const [inputAirExtended, setinputAirExtended] = useState(0);
  const [inputAirLong, setinputAirLong] = useState(0);
  const [inputAirMedium, setinputAirMedium] = useState(0);
  const [inputAirShort, setinputAirShort] = useState(0);



  const funcs = [startedPageFuncs];
  

  //RESULTS FROM API
  //Used intermitenlly throughout codebase, state stays at parent but the hook to change it gets passed down through React Components.

  //Baseline Calculations to compare as starting
  const [baselinetransportTotal, setbaselinetransportTotal] = useState("");
  const [baselinetransportResults, setbaselinetransportResults] = useState([]);
  const [baselinefoodTotal, setbaselineFoodTotal] = useState("");
  const [baselinefoodResults, setbaselinefoodResults] = useState([]);
  const [baselinehousingTotal, setbaselineHousingTotal] = useState("");
  const [baselinehousingResults, setbaselinehousingResults] = useState([]);
  const [baselinegoodsTotal, setbaselineGoodsTotal] = useState("");
  const [baselinegoodsResults, setbaselinegoodsResults] = useState([]);
  const [baselineserviceTotal, setbaselineserviceTotal] = useState("");
  const [baselineTotal, setBaselineTotal] = useState("");


  //Caculated Calculations to compare as final
  const [transportTotal, setTransportTotal] = useState("");
  const [transportResults, settransportResults] = useState([]);
  const [foodTotal, setFoodTotal] = useState("");
  const [foodResults, setfoodResults] = useState([]);
  const [housingTotal, setHousingTotal] = useState("");
  const [housingResults, sethousingResults] = useState([]);
  const [goodsTotal, setGoodsTotal] = useState("");
  const [goodsResults, setgoodsResults] = useState([]);
  const [serviceTotal, setserviceTotal] = useState("");
  const [grandTotal, setGrandTotal] = useState("");



  const allBaselineTotals = [baselinetransportTotal, baselinefoodTotal, baselinehousingTotal, baselinegoodsTotal, baselineserviceTotal]
  const allTotals = [transportTotal, foodTotal, housingTotal, goodsTotal, serviceTotal]



  //////////////////////////////////////////
  //        JAVASCRIPT FUNCTIONS          //
  //////////////////////////////////////////
  


  //Advances to next page
  function nextPage() {
    APIgrab()
    setPage(page + 1)
    window.scroll(0,0)
  }

  //Advances to last page
  function prevPage() {
    setPage(page - 1)
    window.scroll(0,0)
  }

  //Function used for selecting page from topnavbar of calc.
  function selectPage(pageNum) {
    setPage(pageNum)
  }

  function setallBaselines(returnVal){
    setbaselinetransportTotal(returnVal.result_transport_total)
    // setbaselinetransportResults([returnVal.])
    setbaselineFoodTotal(returnVal.result_food_total)
    // setbaselinefoodResults([returnVal.])
    setbaselineHousingTotal(returnVal.result_housing_total)
    // setbaselinehousingResults(returnVal.)
    setbaselineGoodsTotal(returnVal.result_goods_total)
    // setbaselinegoodsResults(returnVal.)
    setbaselineserviceTotal(returnVal.result_services_total)
    setBaselineTotal(Math.round(returnVal.result_grand_total))

  }

  function setallGrandtotals(returnVal){
    setTransportTotal(returnVal.result_transport_total)
    // settransportResults([returnVal.])
    setFoodTotal(returnVal.result_food_total)
    // setfoodResults([returnVal.])
    setHousingTotal(returnVal.result_housing_total)
    // sethousingResults(returnVal.)
    setGoodsTotal(returnVal.result_goods_total)
    // setgoodsResults(returnVal.)
    setserviceTotal(returnVal.result_services_total)
    setGrandTotal(Math.round(returnVal.result_grand_total));
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
    if (page == 0) {
      let APICaller = new APILib.GET_DEFAULTS_AND_RESULTS_API();
      APICaller.callAPI({
        input_location_mode: parseInt(inputLocationMode),
        input_income: parseInt(inputIncome),
        input_location: inputLocation,
        input_size: parseInt(inputSize)
      }).then((returnVal) => {
        setallBaselines(returnVal);
        setallGrandtotals(returnVal)
      });
    } else {
      let footprintAPICaller = new APILib.COMPUTE_FOOTPRINT_API();
      footprintAPICaller.callAPI({
        input_location_mode: parseInt(inputLocationMode),
        input_income: parseInt(inputIncome),
        input_location: inputLocation,
        input_size: parseInt(inputSize),
        input_footprint_transportation_num_vehicles: parseInt(inputNumVehicles),
        input_footprint_transportation_fuel1: parseInt(inputFuel1),
        input_footprint_transportation_fuel2: parseInt(inputFuel2),
        input_footprint_transportation_fuel3: parseInt(inputFuel3),
        input_footprint_transportation_fuel4: parseInt(inputFuel4),
        input_footprint_transportation_fuel5: parseInt(inputFuel5),
        input_footprint_transportation_fuel6: parseInt(inputFuel6),
        input_footprint_transportation_fuel7: parseInt(inputFuel7),
        input_footprint_transportation_fuel8: parseInt(inputFuel8),
        input_footprint_transportation_fuel9: parseInt(inputFuel9),
        input_footprint_transportation_fuel10: parseInt(inputFuel10),
        input_footprint_transportation_miles1: parseInt(inputMiles1),
        input_footprint_transportation_miles2: parseInt(inputMiles2),
        input_footprint_transportation_miles3: parseInt(inputMiles3),
        input_footprint_transportation_miles4: parseInt(inputMiles4),
        input_footprint_transportation_miles5: parseInt(inputMiles5),
        input_footprint_transportation_miles6: parseInt(inputMiles6),
        input_footprint_transportation_miles7: parseInt(inputMiles7),
        input_footprint_transportation_miles8: parseInt(inputMiles8),
        input_footprint_transportation_miles9: parseInt(inputMiles9),
        input_footprint_transportation_miles10: parseInt(inputMiles10),
        input_footprint_transportation_mpg1: parseInt(inputMpg1),
        input_footprint_transportation_mpg2: parseInt(inputMpg2),
        input_footprint_transportation_mpg3: parseInt(inputMpg3),
        input_footprint_transportation_mpg4: parseInt(inputMpg4),
        input_footprint_transportation_mpg5: parseInt(inputMpg5),
        input_footprint_transportation_mpg6: parseInt(inputMpg6),
        input_footprint_transportation_mpg7: parseInt(inputMpg7),
        input_footprint_transportation_mpg8: parseInt(inputMpg8),
        input_footprint_transportation_mpg9: parseInt(inputMpg9),
        input_footprint_transportation_mpg10: parseInt(inputMpg10),
        input_footprint_transportation_airextended: parseInt(inputAirExtended),
        input_footprint_transportation_airlong: parseInt(inputAirLong),
        input_footprint_transportation_airmedium: parseInt(inputAirMedium),
        input_footprint_transportation_airshort: parseInt(inputAirShort)
      }).then((returnVal) => {
        console.log(returnVal)
        setallGrandtotals(returnVal)
      });
    }
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

  //Finds width for carbon calcualtor
  function findWidth(page) {
    if (page == 0){
      return ""
    }
    else if (page == 5){
      return "full-width"
    } else{
      return "updated-carb-calc"
    }
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
          <ResultChart allBaselineTotals={allBaselineTotals} allTotals={allTotals}></ResultChart>
        </div>
      </div>
      <div className="carb-calc" id={findWidth(page)}>
        <CarbCacl page={page} nextPage={nextPage} prevPage={prevPage} selectPage={selectPage} funcs={funcs[page]} toggleGraph={toggleGraph} baselineTotal = {baselineTotal} grandTotal={grandTotal}  allBaselineTotals={allBaselineTotals} allTotals={allTotals}> </CarbCacl>
        {/* Could condense grandtotal to just accessing array */}
      </div>
      <Intro page={page}></Intro> 
      <div className = "rightgraph-transition desktop" id={page != 0 && page != 5 ?  "" : "blank-display"}>
        <CCgraph toggleGraph={toggleGraph} baselineTotal = {baselineTotal} grandTotal={grandTotal} ></CCgraph>
      </div>
    </div>
    );
}

export default Container;
