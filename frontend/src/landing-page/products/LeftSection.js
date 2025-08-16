import React from 'react';

function LeftSection({imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) {
    return ( 
        <div className='container p-5'>
            <div className='row'>
                <div className='col-md-5 p-2 '>
                    <img src={imageURL} alt={productName} className='img-fluid' />
                </div>
                <div className='col-md-1'></div>
                <div className='col-md-5 align-self-center'>
                    <h2 className='mx-2'>{productName}</h2>
                    <p className='text-muted mx-2'>{productDescription}</p>
                    <p className='mx-2'>
                        <a href={tryDemo} className='text-decoration-none'>Try Demo
                            <i className='fa fa-long-arrow-right mx-2'></i>
                        </a>
                        <a href={learnMore} className='text-decoration-none'>Learn More
                            <i className='fa fa-long-arrow-right mx-2'></i>
                        </a>
                    </p>
                    <p>
                        <a href={googlePlay} className='text-decoration-none'>
                            <img src="media/images/googlePlayBadge.svg" alt="Google Play" className='img-fluid mx-2' />
                        </a>
                        <a href={appStore} className='text-decoration-none'>
                            <img src="media/images/appStoreBadge.svg" alt="App store" className='img-fluid mx-2' />
                        </a>
                    </p>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;