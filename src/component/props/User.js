import React from 'react';
const User = (props) => {
  const { data } = props;
  return (
    <div>
      <h1>User Details</h1>
      <h3>NAME : {data.name}</h3>
      <h4>AGE : {data.Age}</h4>
      <h4>Role : {data.Role}</h4>
    </div>
  );
};
export default User;
