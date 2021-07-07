import React from 'react';

const Error = props => {
  return (
    <div>
      <h4>{props.error}</h4>
      {/* <img style={{width: '30%'}} src={props.smurfer.url} alt={props.smurfer.title} /> */}
      {/* <div style={{width: '30%', marginLeft: '35%'}} >{props.smurfer.explanation}</div> */}
    </div>
  );
};

export default Error;
