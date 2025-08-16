import React from 'react';

function Hero() {
    return ( 
        <div className="container mt-5 text-center pt-5">
            <h1>Pricing</h1>
            <p className='text-muted'>  Free equity investments and flat ₹20 traday and F&O trades </p>
            <div className="row mt-5"></div>
            <hr className='mt-5'/>

            <div className="row mt-5">
                <div className="col-4 p-5">
                    <img src="media/images/pricingEquity.svg" className='img-fluid' />
                    <h3>Free equity delivery</h3>
                    <p className='text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.</p>
                </div>
                <div className="col-4 p-5">
                    <img src="media/images/intradayTrades.svg" className='img-fluid' />
                    <h3>Intraday and F&O trades</h3>
                    <p className='text-muted'>Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades.</p>
                </div>
                <div className="col-4 p-5">
                    <img src="media/images/pricingEquity.svg" className='img-fluid' />
                    <h3>Free direct MF</h3>
                    <p className='text-muted'>All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;