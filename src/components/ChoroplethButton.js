import React from 'react';

const ChoroplethButton = ({ selectPill, type, icon }) => (
  <li className="nav-item text-center py-2 col-6">
    <a
      className="nav-link"
      onClick={selectPill}
      id={"pills-" + type.toLowerCase() + "-tab"}
      data-toggle="pill"
      href={"#pills-" + type.toLowerCase()}
      role="tab"
      aria-controls={"pills-" + type.toLowerCase()}
      aria-selected="false"
      value={type}
    >
    <div className="row">
      <div className="col text-center">
        <span style={{ fontSize: "36px" }}>
          <i class={icon} />
        </span>
      </div>
    </div>
    <div className="row">
      <div className="col text-center">
        {type}
      </div>
    </div>
    </a>
  </li>
);

export default ChoroplethButton;