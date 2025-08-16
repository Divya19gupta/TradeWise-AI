import React from 'react';

function Awards() {
    return ( 
        <div className='container mt-4 p-4'>
            <div className='row'>
                <div className='col-md-6 p-3'>
                    <img src="media/images/largestBroker.svg" className='img-fluid'/>
                </div>
                <div className='col-md-6 p-3 mt-5 justify-content-center'>
                        <h1 className='mb-3'>Largest stock broker in India</h1>
                        <p className='mb-3'>2+ million Zerodha clients contribute to over 15% of all retail
                order volumes in India daily by trading and investing in:</p>
                    <div className="row">
                        <div className="col-md-6">
                            <ul>
                            <li className='mb-3'>Futures and Options</li>
                            <li className='mb-3'>Commodity derivatives</li>
                            <li className='mb-3'>Currency derivatives</li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <ul>
                            <li className='mb-3'>Stocks and IPOs</li>
                            <li className='mb-3'>Direct mutual funds</li>
                            <li className='mb-3'>Bonds and Goals</li>
                            </ul>
                        </div>
                    </div>
                    <img src="media/images/pressLogos.png" className='img-fluid mt-4'/>
                </div>
            </div>
        </div>
     );
}

export default Awards;