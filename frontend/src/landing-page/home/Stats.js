import React from 'react';

function Stats() {
    return ( 
        <div className='container mt-5 p-5'>
            <div className='row'>
                <div class ='col-md-6'>
                    <div>
                        <h2 className='mb-5'>Trust with confidence</h2>
                        <div>
                            <h4>Customer-first always</h4>
                            <p className='text-secondary'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                        </div>
                        <div>
                            <h4>No spam or gimmicks</h4>
                            <p className='text-secondary'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                        </div>
                        <div>
                            <h4>The Zerodha universe</h4>
                            <p className='text-secondary'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                        </div>
                        <div>
                            <h4>Do better with money</h4>
                            <p className='text-secondary'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                        </div>
                    </div>
                </div> 
                <div class ='col-md-6'>
                    <img src= "media/images/ecosystem.png" alt="Stats" className='img-fluid' />
                    <div className='text-center mt-3'>
                        <a href='' className='text-decoration-none'>Explore our products 
                            <i className='fa fa-long-arrow-right mx-2'></i>
                        </a>
                        <a href='' className='text-decoration-none mx-5'>Try kite demo 
                             <i className='fa fa-long-arrow-right mx-2'></i>
                        </a>
                    </div>
                </div> 
            </div>
        </div>
     );
}

export default Stats;