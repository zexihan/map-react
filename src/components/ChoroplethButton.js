import React from 'react';

const ChoroplethButton = ({ selectPill, type, icon }) => (
  <li className="nav-item text-center py-2 col-6">
    <span style={{ fontSize: "36px" }}>
      <i class={icon} />
    </span>
    <a
      className="nav-link"
      onClick={selectPill}
      id={"pills-" + type.toLowerCase() + "-tab"}
      data-toggle="pill"
      href={"#pills-" + type.toLowerCase()}
      role="tab"
      aria-controls={"pills-" + type.toLowerCase()}
      aria-selected="false"
    >
      {type}
    </a>
  </li>
);

export default ChoroplethButton;