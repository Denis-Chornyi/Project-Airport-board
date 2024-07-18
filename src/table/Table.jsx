import React from 'react';
import './table.scss';

const Table = ({ flights }) => {
  if (flights.length === 0) {
    return (
      <div className="table">
        <h5 className="table__null">No Flights</h5>
      </div>
    );
  }

  return (
    <div className="table">
      <div className='table__header'>
        <p>Terminal</p>
        <p>Departure city</p>
        <p>Arrival city</p>
        <p>Departure date</p>
        <p>Arrival date</p>
        <p>Airline name</p>
        <p>Airline logo</p>
        <p>Code share</p>
        <p>Status</p>
      </div>
      {flights.map(flight => (
        <div key={flight.id} className="table__row">
          <div>{flight.terminal}</div>
          <div>{flight.departureCity}</div>
          <div>{flight.arrivalCity}</div>
          <div>
            {flight.departureDate ? new Date(flight.departureDate).toLocaleString() : 'N/A'}
          </div>
          <div>{flight.arrivalDate ? new Date(flight.arrivalDate).toLocaleString() : 'N/A'}</div>
          <div>{flight.airlineName}</div>
          <div>
            <img src={flight.airlineLogo} alt={flight.airlineName} width="30" />
            
          </div>
          <div>{flight.codeShare}</div>
          <div>{flight.status}</div>
        </div>
      ))}
    </div>
  );
};

export default Table;
