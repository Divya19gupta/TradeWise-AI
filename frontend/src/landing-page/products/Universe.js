import React from 'react';

function Universe() {
    return ( 
        <div className="container mt-5 p-5 text-center">
            <h1> The Zerodha Universe </h1>
            <p className='p-3'>Extend your trading and investment experience even further with our partner platforms</p>
            <div className='mt-5'>
            <div className="row m-3 p-3">
                <div className="col-md-4">
                    <img src="media/images/smallcaseLogo.png" className="img-fluid" />
                    <p className="text-small text-muted">Thematic investment platform</p>
                </div>
                <div className="col-md-4">
                     <img src="media/images/smallcaseLogo.png" className="img-fluid" />
                     <p className="text-small text-muted">Thematic investment platform</p>
                </div>
                <div className="col-md-4">
                     <img src="media/images/smallcaseLogo.png" className="img-fluid" />
                     <p className="text-small text-muted">Thematic investment platform</p>
                </div>
            </div>
            <div className="row m-3 p-3">
                <div className="col-md-4">
                    <img src="media/images/smallcaseLogo.png" className="img-fluid" />
                    <p className="text-small text-muted">Thematic investment platform</p>
                </div>
                <div className="col-md-4">
                     <img src="media/images/smallcaseLogo.png" className="img-fluid" />
                     <p className="text-small text-muted">Thematic investment platform</p>
                </div>
                <div className="col-md-4">
                     <img src="media/images/smallcaseLogo.png" className="img-fluid" />
                     <p className="text-small text-muted">Thematic investment platform</p>
                </div>
            </div>
            <button className='mt-2 btn btn-primary'>Sign up now</button>
            </div>
        </div>
     );
}

export default Universe;