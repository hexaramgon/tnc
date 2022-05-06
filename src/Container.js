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

  let defin = 5;

  let inputObject = {
            //Starting params
            input_location_mode: defin,
            input_income: defin,
            input_location: defin,
            input_size: defin,
            //Transportation params
            input_footprint_transportation_num_vehicles: defin,
            input_footprint_transportation_fuel1: defin,
            input_footprint_transportation_fuel2: defin,
            input_footprint_transportation_fuel3: defin,
            input_footprint_transportation_fuel4: defin,
            input_footprint_transportation_fuel5: defin,
            input_footprint_transportation_fuel6: defin,
            input_footprint_transportation_fuel7: defin,
            input_footprint_transportation_fuel8: defin,
            input_footprint_transportation_fuel9: defin,
            input_footprint_transportation_fuel10: defin,
            input_footprint_transportation_miles1: defin,
            input_footprint_transportation_miles2: defin,
            input_footprint_transportation_miles3: defin,
            input_footprint_transportation_miles4: defin,
            input_footprint_transportation_miles5: defin,
            input_footprint_transportation_miles6: defin,
            input_footprint_transportation_miles7: defin,
            input_footprint_transportation_miles8: defin,
            input_footprint_transportation_miles9: defin,
            input_footprint_transportation_miles10: defin,
            input_footprint_transportation_mpg1: defin,
            input_footprint_transportation_mpg2: defin,
            input_footprint_transportation_mpg3: defin,
            input_footprint_transportation_mpg4: defin,
            input_footprint_transportation_mpg5: defin,
            input_footprint_transportation_mpg6: defin,
            input_footprint_transportation_mpg7: defin,
            input_footprint_transportation_mpg8: defin,
            input_footprint_transportation_mpg9: defin,
            input_footprint_transportation_mpg10: defin,
            input_footprint_transportation_airtype: defin,
            input_footprint_transportation_airtotal: defin,
            input_footprint_transportation_groundtype: defin,
            input_footprint_transportation_publictrans: defin,
            input_footprint_transportation_bus: defin,
            input_footprint_transportation_commuter: defin,
            input_footprint_transportation_transit: defin,
            input_footprint_transportation_intercity: defin,
            input_footprint_transportation_airextended: defin,
            input_footprint_transportation_airlong: defin,
            input_footprint_transportation_airmedium: defin,
            input_footprint_transportation_airshort: defin,
            //Housing params
            input_footprint_housing_electricity_type: defin,
            input_footprint_housing_electricity_dollars: defin,
            input_footprint_housing_cleanpercent: defin,
            input_footprint_housing_naturalgas_type: 0,
            input_footprint_housing_naturalgas_dollars: defin,
            input_footprint_housing_heatingoil_type: defin,
            input_footprint_housing_heatingoil_dollars: defin,
            input_footprint_housing_heatingoil_dollars_per_gallon: defin,
            input_footprint_housing_watersewage: defin,
            input_footprint_housing_squarefeet: defin,
            input_footprint_household_adults: defin,
            input_footprint_household_children: defin,
            input_footprint_housing_gco2_per_kwh: defin,
            input_footprint_housing_hdd: defin,
            input_footprint_housing_cdd: defin,
            input_footprint_housing_heatingoil_gallons: defin,
            input_footprint_housing_electricity_kwh: defin,
            //Food params
            input_footprint_shopping_food_meatfisheggs: defin,
            input_footprint_shopping_food_dairy: defin,
            input_footprint_shopping_food_otherfood: 0,
            input_footprint_shopping_food_fruitvegetables: defin,
            input_footprint_shopping_food_cereals: defin,
            input_footprint_shopping_food_meattype: defin,
            input_footprint_shopping_food_meat_beefpork: defin,
            input_footprint_shopping_food_meat_poultry: defin,
            input_footprint_shopping_food_meat_fish: defin,
            input_footprint_shopping_food_meat_other: defin,
            //Shopping params
            input_footprint_shopping_goods_total: defin,
            input_footprint_shopping_goods_default_furnitureappliances: defin,
            input_footprint_shopping_goods_default_clothing: defin,
            input_footprint_shopping_goods_default_other_entertainment: defin,
            input_footprint_shopping_goods_default_other_entertainment: defin,
            input_footprint_shopping_goods_default_other_office: defin,
            input_footprint_shopping_goods_default_other_personalcare: defin,
            input_footprint_shopping_goods_default_other_autoparts: defin,
            input_footprint_shopping_goods_default_other_medical: defin,
            input_footprint_shopping_goods_type: defin,
            input_footprint_shopping_goods_other_type: defin,
            input_footprint_shopping_goods_other_entertainment: defin,
            input_footprint_shopping_goods_other_office: defin,
            input_footprint_shopping_goods_other_personalcare: defin,
            input_footprint_shopping_goods_other_autoparts: defin,
            input_footprint_shopping_goods_other_medical: defin,
            input_footprint_shopping_goods_clothing: defin,
            input_footprint_shopping_goods_furnitureappliances: defin,
            //Services params
            input_footprint_shopping_services_type: defin,
            input_footprint_shopping_services_total: defin,
            input_footprint_shopping_services_healthcare: defin,
            input_footprint_shopping_services_education: defin,
            input_footprint_shopping_services_communications: defin,
            input_footprint_shopping_services_vehicleservices: defin,
            input_footprint_shopping_services_finance: defin,
            input_footprint_shopping_services_household: defin,
            input_footprint_shopping_services_charity: defin,
            input_footprint_shopping_services_miscservices: defin,
            //Misc params
            input_changed: 0,
            internal_state_abbreviation: 0

  }

  const [test, setTest] = useState(inputObject);


  
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
      // APIgrab()

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
    setTransportTotal(returnVal.result_transport_total)
    // setbaselinetransportResults([returnVal.])
    setbaselineFoodTotal(returnVal.result_food_total)
    setFoodTotal(returnVal.result_food_total)
    // setbaselinefoodResults([returnVal.])
    setbaselineHousingTotal(returnVal.result_housing_total)
    setHousingTotal(returnVal.result_housing_total)
    // setbaselinehousingResults(returnVal.)
    setbaselineGoodsTotal(returnVal.result_goods_total)
    setGoodsTotal(returnVal.result_goods_total)
    setserviceTotal(returnVal.result_services_total)
    // setbaselinegoodsResults(returnVal.)
    setbaselineserviceTotal(returnVal.result_services_total)
    setBaselineTotal(Math.round(returnVal.result_grand_total))

  }

  function setallGrandtotals(returnVal, currpage){
    setGrandTotal(Math.round(returnVal.result_grand_total));
    switch (currpage) {
      case 1:
        setTransportTotal(returnVal.result_transport_total)
        // settransportResults([returnVal.])
        break;
      case 2: 
        setFoodTotal(returnVal.result_food_total)
        // setfoodResults([returnVal.])
        break;
      case 3:
        setHousingTotal(returnVal.result_housing_total)
        // sethousingResults(returnVal.)
        break;
      case 4:
        setGoodsTotal(returnVal.result_goods_total)
        // setgoodsResults(returnVal.)
        setserviceTotal(returnVal.result_services_total)
        break;
    }
  }

  //Grabs from API
  function APIgrab(inputs, values) {
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
     console.log(values)

    if (page == 0) {  
      let APICaller = new APILib.GET_DEFAULTS_AND_RESULTS_API();
      APICaller.callAPI({
        input_location_mode: parseInt(values[3]),
        input_income: parseInt(values[0]),
        input_location: values[1],
        input_size: parseInt(values[2])
      }).then((returnVal) => {
        setallBaselines(returnVal);
        // setJsonFile(returnVal);
        setallGrandtotals(returnVal, page)
      });
    } else {
      
      // let newobj = Object.assign({}, test)
      let footprintAPICaller = new APILib.COMPUTE_FOOTPRINT_API();
      for (let i = 0; i < inputs.length; i++){
        inputObject[inputs[i]] = values[i];
      }
      // setTest(newobj);
      console.log(inputObject)
      footprintAPICaller.callAPI(inputObject).then((returnVal) => {
        setallGrandtotals(returnVal, page)
        console.log(returnVal)
      });
    }
    return true
  }

  //Toggles Graph Overlay for results
  function toggleGraph() {
    console.log(test);
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
        <CarbCacl APIgrab={APIgrab} page={page} nextPage={nextPage} prevPage={prevPage} selectPage={selectPage} toggleGraph={toggleGraph} baselineTotal = {baselineTotal} grandTotal={grandTotal}  allBaselineTotals={allBaselineTotals} allTotals={allTotals}> </CarbCacl>
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
