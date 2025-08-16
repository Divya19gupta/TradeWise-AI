import React from 'react';

function Pricing() {
    return ( 
        <div className='container mt-5 p-5'>
            <div className='row'>
                <div className='col-md-4'>
                    <h2 className='mb-5'>Unbeatable Pricing</h2>
                    <p> We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.</p>
            <a href='' className='text-decoration-none'>See pricing 
                            <i className='fa fa-long-arrow-right mx-2'></i>
                        </a>
                </div>
                <div className='col-md-2'></div>
                <div className='col-md-3 border border-1 text-center py-5'>
                    <h1>₹0</h1>
                    <p>Free quity delivery and direct mutual funds</p>
                </div>
                <div className='col-md-3 border border-1 text-center py-5'>
                    <h1>₹20</h1>
                    <p>Intraday and F&O</p>
                </div>
            </div>
        </div>
     );
}

export default Pricing;