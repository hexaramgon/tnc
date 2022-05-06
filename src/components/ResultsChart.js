//EXTRA RESULTS WITH OVERLAY
import ReactTooltip from 'react-tooltip';


const ResultChart = ({allBaselineTotals, allTotals}) => {

  



    return (
      <div className="results-wrapper">
        <div className="results-legend">
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
        </div>
        <div className="desktop">
          <div className="row-wrapper">
            <div className="scale">
              <p>{Math.ceil(Math.max(...allBaselineTotals, ...allTotals))}</p>
              <p>0</p>
            </div>
            <Digraph title={"TRAVEL"} maxxer = {Math.max(...allBaselineTotals, ...allTotals)} clientperc={allTotals[0]} otherperc={allBaselineTotals[0]}></Digraph>
            <Digraph title={"FOOD"} maxxer = {Math.max(...allBaselineTotals, ...allTotals)}  clientperc={allTotals[1]} otherperc={allBaselineTotals[1]}></Digraph>
            <Digraph title={"HOME"} maxxer = {Math.max(...allBaselineTotals, ...allTotals)} clientperc={allTotals[2]}  otherperc={allBaselineTotals[2]}></Digraph>
            <Digraph title={"SHOPPING"} maxxer = {Math.max(...allBaselineTotals, ...allTotals)} clientperc={allTotals[3]}  otherperc={allBaselineTotals[3]}></Digraph>
          </div>
        </div>
        <div className="mobile">
          <div className="col-wrapper">
            <Mobiledigraph title={"TRAVEL"} maxxer = {Math.max(...allBaselineTotals, ...allTotals)} clientperc={allTotals[0]}  otherperc={allBaselineTotals[0]}></Mobiledigraph>
            <Mobiledigraph title={"FOOD"} maxxer = {Math.max(...allBaselineTotals, ...allTotals)} clientperc={allTotals[1]}  otherperc={allBaselineTotals[1]}></Mobiledigraph>
            <Mobiledigraph title={"HOME"} maxxer = {Math.max(...allBaselineTotals, ...allTotals)} clientperc={allTotals[2]}  otherperc={allBaselineTotals[2]}></Mobiledigraph>
            <Mobiledigraph title={"SHOPPING"} maxxer = {Math.max(...allBaselineTotals, ...allTotals)} clientperc={allTotals[3]}  otherperc={allBaselineTotals[3]}></Mobiledigraph>
          </div>
        </div>
      </div>
    );
}



export default ResultChart;


function Digraph({maxxer, title, clientperc, otherperc}) {
    const clheight = String(250 * (clientperc / maxxer)) + "px"
    const otheight = String(250 * (otherperc / maxxer)) + "px"


  function findpercent(final, starting){
    window.scroll(0,0)
    return Math.abs(Math.round(((final - starting) / Math.abs(starting)) * 100))
  }

    return(
    <div className="graph-section">
        <ReactTooltip type="light" />
        <div className="row-wrapper di-graph">
            <div className="results-page-graph light-blue" data-tip={Number(clientperc).toFixed(2) + " tons CO2"} style={{height: clheight}}>
            </div>
            <div className="results-page-graph light-grey" data-tip={Number(otherperc).toFixed(2) + " tons CO2"} style={{height: otheight}}>
            </div>
        </div>
        <h3>{title}</h3>
        <h4>{findpercent(clientperc, otherperc)}%</h4>
        <p>{clientperc > otherperc ? "worse" : "better"} than average</p>
    </div>

    )
}

  function Mobiledigraph({maxxer, title, clientperc, otherperc}) {
    const clheight = String(70 * (clientperc / maxxer)) + "vw"
    const otheight = String(70 * (otherperc / maxxer)) + "vw"

  function findpercent(final, starting){
    window.scroll(0,0)
    return Math.abs(Math.round(((final - starting) / Math.abs(starting)) * 100))
  }

    return(
    <div className="graph-section">
        <ReactTooltip type="light"/>
        <h3>{title}</h3>
        <p>{findpercent(clientperc, otherperc)}% {clientperc > otherperc ? "worse" : "better"} than average</p>
        <div className="col-wrapper">
            <div className="results-page-graph light-blue" data-tip={Number(clientperc).toFixed(2) + " tons CO2"} style={{width: clheight, height: "30px"}}>
            </div>
            <div className="results-page-graph light-grey" data-tip={Number(otherperc).toFixed(2) + " tons CO2"} style={{width: otheight, height: "30px"}}>
            </div>
        </div>

    </div>

    )
  }