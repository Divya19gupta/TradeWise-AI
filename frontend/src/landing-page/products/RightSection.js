import React from 'react';

function RightSection({imageURL, productName, productDescription, learnMore}) {
    return ( 
        <div className='container p-5'>
            <div className='row'>
                <div className='col-md-5 p-2 align-self-center'>
                    <h2 className='mx-2'>{productName}</h2>
                    <p className='text-muted mx-2'>{productDescription}</p>
                    <p className='mx-2'>
                        <a href={learnMore} className='text-decoration-none'>Learn More
                            <i className='fa fa-long-arrow-right mx-2'></i>
                        </a>
                    </p>
                </div>
                <div className='col-md-1'></div>
                 <div className='col-md-6'>
                    <img src={imageURL} alt={productName} className='img-fluid' />
                </div>
            </div>
        </div>
     );
}

export default RightSection;