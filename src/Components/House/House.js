import React from 'react';

export default function House(props) {
  const { id, name, address, city, state, zip, deleteHouse } = props;
  return (
    <div>
      <div className="name">
        <h1>{name}</h1>
      </div>
      <div className="address">
        <h3>{address}</h3>
      </div>
      <div className="city">
        <h6>{city}</h6>
      </div>
      <div className="state">
        <h6>{state}</h6>
      </div>
      <div className="zip">
        <h6>{zip}</h6>
      </div>
      <button
        onClick={() => {
          deleteHouse(id);
        }}
      >
        Delete
      </button>
    </div>
  );
}
