import ResultChart from "../ResultsChart";

//Under Construction
const Results = ({baselineTotal, grandTotal, allBaselineTotals,  allTotals }) => {

  function findpercent(final, starting){
    window.scroll(0,0)
    return Math.round(((final - starting) / Math.abs(starting)) * 100)
  }

  function stringdisplay(final, starting){
    if (final <= starting) {
      return "BETTER THAN AVERAGE"
    } else {
      return "WORSE THAN AVERAGE"
    }
  }
    
    return (
      <div className="wrapper">
        <h2 style={{textAlign:"center"}}>You're done! Here are your results:</h2>
        <div className="row-wrapper center" >
          <div className="result-box">
            <h4 style={{marginTop:"20px"}}>YOUR FOOTPRINT</h4>
            <h5 className="resultserif-font">{grandTotal}</h5>
            <p className="resultbottom-font">TONS CO2/YEAR</p>
          </div>
          <div className="result-box">
            <h4>HOW YOU COMPARE</h4>
            <h5 className="resultserif-font">{findpercent(grandTotal, baselineTotal)}%</h5>
            <p className="resultbottom-font"> {stringdisplay(grandTotal, baselineTotal)}</p>

          </div>

        </div>
        <div className="outerresult-box">
          <ResultChart  allBaselineTotals={allBaselineTotals} allTotals={allTotals}></ResultChart>
        </div>
      </div>
    );
}


export default Results;