import React from 'react';

const NameCard = ({name}) => (
  <div className="card mb-3 " style={{ maxWidth: "450px" }}>
    <div className="row no-gutters">
      <div className="col-md-4">
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          className="card-img"
          alt="..."
        />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            This is a wider card with supporting text below
            as a natural lead-in to additional content. This
            content is a little bit longer.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default NameCard;