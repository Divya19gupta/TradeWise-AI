import React from 'react';

function Hero() {
    return ( 
        <div className="container mt-5 p-5 text-center">
            <h1>Zerodha Products</h1>
            <h4 className='text-muted'>Sleek, modern, and intuitive trading platforms</h4>
            <p> Check out our 
                <a href='' className='text-decoration-none'> investment offerings 
                    <i className='fa fa-long-arrow-right mx-2'></i>
                </a>
            </p>
            <div className="row mt-5"></div>
            <hr className='mt-5'/>
        </div>
     );
}

export default Hero;