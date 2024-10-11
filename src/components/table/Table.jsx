import React from 'react';
import PropTypes from 'prop-types';
import './table.scss';

const Table = ({ flights }) => {
  if (flights.length === 0) {
    return (
      <div className="table">
        <h5 className="table__null">No Flights</h5>
      </div>
    );
  }

  const headers = [
    'Terminal',
    'Departure city',
    'Arrival city',
    'Departure date',
    'Arrival date',
    'Airline name',
    'Airline logo',
    'Code share',
    'Status'
  ];

  return (
    <div className="table">
      <div className="table__header">
        {headers.map((header, index) => (
          <p key={index}>{header}</p>
        ))}
      </div>
      {flights.map(
        ({
          id,
          terminal,
          departureCity,
          arrivalCity,
          departureDate,
          arrivalDate,
          airlineName,
          airlineLogo,
          codeShare,
          status
        }) => (
          <div key={id} className="table__row">
            <div>{terminal}</div>
            <div>{departureCity}</div>
            <div>{arrivalCity}</div>
            <div>{departureDate ? new Date(departureDate).toLocaleString() : 'N/A'}</div>
            <div>{arrivalDate ? new Date(arrivalDate).toLocaleString() : 'N/A'}</div>
            <div>{airlineName}</div>
            <div>
              <img src={airlineLogo} alt={airlineName} width="30" />
            </div>
            <div>{codeShare}</div>
            <div>{status}</div>
          </div>
        )
      )}
    </div>
  );
};

export default Table;

Table.propTypes = {
  flights: PropTypes.array.isRequired
};
