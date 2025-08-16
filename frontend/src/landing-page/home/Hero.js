import React from 'react';

function Hero() {
    return ( 
    <div className='container p-5'>
        <div className='row'>
               <div className='mb-4'>
                  <img src="media/images/homeHero.png" className='img-fluid'/>
               </div>
               <div className='text-center mt-4'>
                    <h1>Invest in everything</h1>
                    <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                    <button className='btn btn-primary'>Sign up for free</button>
               </div>
        </div>
    </div> 
);
}

export default Hero;