//EXTRA RESULTS WITH OVERLAY
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
        <div className="row-wrapper">
          <div className="scale">
          </div>
          <Digraph title={"TRAVEL"} clientperc={allTotals[0]} otherperc={allBaselineTotals[0]}></Digraph>
          <Digraph title={"FOOD"} clientperc={allTotals[1]}  otherperc={allBaselineTotals[1]}></Digraph>
          <Digraph title={"HOME"} clientperc={allTotals[2]}  otherperc={allBaselineTotals[2]}></Digraph>
          <Digraph title={"SHOPPING"} clientperc={allTotals[3]}  otherperc={allBaselineTotals[3]}></Digraph>
        </div>
      </div>
    );
}



export default ResultChart;


function Digraph({title, clientperc, otherperc}) {
    const clheight = String(clientperc * 20) + "px"
    const otheight = String(otherperc * 20) + "px"


  function findpercent(final, starting){
    window.scroll(0,0)
    return Math.abs(Math.round(((final - starting) / Math.abs(starting)) * 100))
  }



    return(
    <div className="graph-section">
        <div className="row-wrapper di-graph">
            <div className="results-page-graph light-blue" style={{height: clheight}}>
            </div>
            <div className="results-page-graph light-grey" style={{height: otheight}}>
            </div>
        </div>
        <h3>{title}</h3>
        <h4>{findpercent(clientperc, otherperc)}%</h4>
        <p>{clientperc > otherperc ? "worse" : "better"} than average</p>
    </div>

    )
}