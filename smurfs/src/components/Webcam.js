import React from 'react';

const Webcam = props => {
  return (
    <div>
      <h4>{props.webcam.name} - {props.webcam.age} - {props.webcam.height} - {props.webcam.id}</h4>
      {/* <img style={{width: '30%'}} src={props.webcam.url} alt={props.webcam.title} /> */}
      {/* <div style={{width: '30%', marginLeft: '35%'}} >{props.webcam.explanation}</div> */}
    </div>
  );
};

export default Webcam;
