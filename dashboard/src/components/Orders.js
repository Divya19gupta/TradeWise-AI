import React , {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
function Orders() {
    

    const [allOrders, setAllOrders] = useState([]);

useEffect(() => {
    axios.get('http://localhost:3003/allOrders').then((res) =>{
        setAllOrders(res.data);
    })
}, []);
    return ( 
    <div className="order-table">
         <table>
                         <tr>
                              <th>Name</th>
                             <th>Qty.</th>
                             <th>Price</th>
                         </tr>
         {allOrders.map((item, index) => {
    
                             return (
                                 <tr key={index}>
                                     <td>{item.name}</td>
                                     <td>{item.qty}</td>
                                     <td>{item.price}</td>
                                 </tr>
                             )
                         })}
                         </table>
      {/* <div className="no-orders"> */}
        {/* <p>You haven't placed any orders today</p>

        <Link to={"/"} className="btn">
          Get started
        </Link> */}
      {/* </div> */}
    </div>
    );
}

export default Orders;