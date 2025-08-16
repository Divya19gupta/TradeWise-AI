import React from "react";

function Team() {
  return (
    <div className="container mt-5 p-5">
        <h2 className="text-center mb-5">People</h2>
      <div className="row">
        <div className="col-md-5">
          <img src="media/images/nithinKamath.jpg" alt="Team" className="rounded-circle img-fluid" />
          <div className="text-center mt-5">
            <p className="fw-bold">Nithin Kamath</p>
            <p className="text-muted" style={{fontSize:"15px"}}>Founder & CEO</p>
          </div>
        </div>
        <div className="col-md-7 p-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>Connect on Homepage / TradingQnA / Twitter</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
