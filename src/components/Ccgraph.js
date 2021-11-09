//REACT COMPONENT FOR RIGHT GRAPH DISPLAY DURING UI RENDER


const CCGraph = ({toggleGraph, grandTotal}) => {



  //////////////////////////////////////////
  //              ARGUEMENTS              //
  //////////////////////////////////////////    

  //----toggleGraph----
  //Togglegraph function passed in from grand all parent(container). 
  //Toggles extra graph display/overlay


  //----grandTotal----
  //grandTotal Carbon Footprint number from API call in container.js. 



  return (
      <div className="rightgraph-transition ccGraph">
        <h3>To start, we use your household location, size and income to estimate your average carbon footprint.</h3>
        <div className="row-wrapper graph-row">
          <SmallGraph type = {1} size = {grandTotal}></SmallGraph>
          <SmallGraph type = {0} size = {grandTotal}></SmallGraph>
        </div>
        <p className="link" onClick={()=>toggleGraph()}>View more details</p>
        <hr></hr>
        <p>Learn how you can <b className="link">take action </b></p> 
        <hr></hr>
      </div>
  );
}

export default CCGraph


//Small Graph function to render height responsive bar charts depending on Carbon Footprint
function SmallGraph ({type, size}) {

  //////////////////////////////////////////
  //              ARGUEMENTS              //
  //////////////////////////////////////////    

  //----type----
  //Color of barchart
  //0: light-grey barchart
  //1: light-blue barchart


  //----size----
  //Height of barchart, should corrospond to carbon footprint.

  const augmentedheight = String(size * 2) + "px" //multilplied by 2 to make changes more noticable.

  return(
    <div className="small-graph-wrapper">
      <div className={type ? "small-graph light-blue" : "small-graph light-grey"} style={{height: augmentedheight}}>
      </div>
      <p>{type ? "Your household" : "Similar Households"} </p>
      <h4 id="special-size">{size}</h4>
      <h4>TONS</h4>
      <h4>CO2EQ/YEAR</h4>
    </div>
  )
}