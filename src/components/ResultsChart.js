//EXTRA RESULTS WITH OVERLAY
const ResultChart = () => {

    return (
      <div className="row-wrapper">
        <div className="scale">
        </div>
        <Digraph title={"TRAVEL"} clientperc={10.43} otherperc={6.18} temp={15}></Digraph>
        <Digraph title={"FOOD"} clientperc={6.13}  otherperc={8.40} temp={9}></Digraph>
        <Digraph title={"HOME"} clientperc={12.06}  otherperc={10.08} temp={6}></Digraph>
        <Digraph title={"SHOPPING"} clientperc={8.91}  otherperc={6.91} temp={5}></Digraph>
      </div>
    );
}


function closestrange(int) {
    const floordiv = Math.floor(int / 10)
    const rem = int % 10
    if (rem > 3) {
        return (floordiv + 1) * 10
    } else {
        return floordiv * 10
    }
}


export default ResultChart;


function Digraph({title, clientperc, otherperc, temp}) {
    const clheight = String(clientperc * 20) + "px"
    const otheight = String(otherperc * 20) + "px"


    return(
    <div className="graph-section">
        <div className="row-wrapper di-graph">
            <div className="results-page-graph light-blue" style={{height: clheight}}>
            </div>
            <div className="results-page-graph light-grey" style={{height: otheight}}>
            </div>
        </div>
        <h3>{title}</h3>
        <h4>{temp}%</h4>
        <p>{clientperc > otherperc ? "worse" : "better"} than average</p>


    </div>

    )
}