import React from 'react';

import { holdings } from '../data/data';   
function Holdings() {
    return ( 
        <>
            <h3 className='title'>Holdings ({holdings.length})</h3>
            <div className="order-table">
                <table>
                    <tr>
                        <th>Instrument</th>
                        <th>Qty.</th>
                        <th>Avg. cost</th>
                        <th>LTP</th>
                        <th>Cur. val</th>
                        <th>P&L</th>
                        <th>Net chg.</th>
                        <th>Day chg.</th>
                    </tr>

                    {holdings.map((item, index) => {
                        const currVal = item.price * item.qty;
                        const isProfit = currVal - (item.avg * item.qty) >= 0.0;
                        const profClass = isProfit ? 'profit' : 'loss';
                        const dayClass = item.isLoss ? 'loss' : 'profit';

                        return (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.name}</td>
                                <td>{item.avg.toFixed(2)}</td>
                                <td>{item.price.toFixed(2)}</td>
                                <td>{currVal.toFixed(2)}</td>
                                <td className={profClass}>
                                    {(currVal - (item.avg * item.qty)).toFixed(2)}
                                </td>
                                <td className={profClass}>{item.net}</td>
                                <td className={dayClass}>{item.day}</td>
                            </tr>
                        )
                    })}
                </table>
            </div>
                <div className="row">
                    <div className="col">
                    <h5>
                        29,875.<span>55</span>{" "}
                    </h5>
                    <p>Total investment</p>
                    </div>
                    <div className="col">
                    <h5>
                        31,428.<span>95</span>{" "}
                    </h5>
                    <p>Current value</p>
                    </div>
                    <div className="col">
                    <h5>1,553.40 (+5.20%)</h5>
                    <p>P&L</p>
                    </div>
            </div>
          </>
    );
}

export default Holdings;