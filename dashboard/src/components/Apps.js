import React, {useState, useEffect} from 'react';
import axios from 'axios';


const Apps = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  const [summary, setSummary] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3003/allHoldings").then((res) => {
      // console.log(res.data);
      setAllHoldings(res.data);
    });
  }, []);

  async function loadSummary(symbol){
    const res = await fetch(`http://localhost:3003/api/stock/${symbol}/news-summary`);
    const data = await res.json();
    setSummary(data.summary);
  }
  return (
    <>
  <div className='row'>
    <div className='col-1'>
<table className='order-table'>
    <tr>
      <th>Holding Name</th>
    </tr>
  {allHoldings.map((stock,index)=>{
    return (
    <tr key={index}>
    <td><span style={{cursor: "pointer", color: "#67C988"}} onClick={()=> loadSummary(stock.name)}>{stock.name}</span></td>
     </tr>
  );
  })}
  </table>
    </div>
  {summary && (
    <div className='news-article col-11'>
    <h3>Summary</h3>
    <p style={{color:'grey'}}>{summary}</p>
  </div>)}

  </div>
  
  </>
  )
  
}

export default Apps;
