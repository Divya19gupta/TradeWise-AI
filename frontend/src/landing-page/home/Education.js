import React from 'react';

function Education() {
    return (  
         <div className='container mt-5 p-4'>
            <div className='row'>
                <div className='col-md-6'>
                    <img src="media/images/education.svg" alt="Education" className='img-fluid' />
                </div>
                <div className='col-md-6'>
                    <h2 className='mb-5'>Free and open market education</h2>
                    <p> Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='' className='text-decoration-none'>Varsity 
                        <i className='fa fa-long-arrow-right mx-2'></i>
                    </a>

                    <p className='mt-3'> TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href='' className='text-decoration-none'>TradingQ&A
                        <i className='fa fa-long-arrow-right mx-2'></i>
                    </a>
                </div>
                
            </div>
        </div>
    );
}

export default Education;