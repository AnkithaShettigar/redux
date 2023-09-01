import React from 'react';

const Employee = (props) => {
  return (
    <div>
      <h1>Employee Details</h1>
      <h2>ID : {props.details.id}</h2>
    </div>
  );
};

export default Employee;
