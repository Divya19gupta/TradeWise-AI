import React from "react";

function CreateTicket() {
  return (
    <div className="container mt-3">
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Account Opening
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="text-primary lh-lg">
                <li>Resident individual</li>
                <li>Minor</li>
                <li>Non Resident Indian (NRI)</li>
                <li>Company, Partnership, HUF and LLP</li>
                <li>Glossary</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Kite
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="text-primary lh-lg">
                <li>Resident individual</li>
                <li>Minor</li>
                <li>Non Resident Indian (NRI)</li>
                <li>Company, Partnership, HUF and LLP</li>
                <li>Glossary</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Funds
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="text-primary lh-lg">
                <li>Resident individual</li>
                <li>Minor</li>
                <li>Non Resident Indian (NRI)</li>
                <li>Company, Partnership, HUF and LLP</li>
                <li>Glossary</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
