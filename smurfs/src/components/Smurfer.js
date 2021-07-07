import React from 'react';

const Smurfer = props => {
  return (
    <div>
        <div style={{textAlign: 'left',marginLeft: '39%', border: 'medium solid black',width: '200px'}}>
  <ul>{props.smurfer.name}
  <li style={{marginLeft: '20%',width: '200px'}}> Age: {props.smurfer.age}</li>
  <li style={{marginLeft: '20%',width: '200px'}}> Height: {props.smurfer.height}</li>
   </ul>
      {/* <h4>{props.smurfer.name} - {props.smurfer.age} - {props.smurfer.height} - {props.smurfer.id}</h4> */}
      {/* <img style={{width: '39%'}} src={props.smurfer.url} alt={props.smurfer.title} /> */}
      {/* <div style={{width: '39%', marginLeft: '35%'}} >{props.smurfer.explanation}</div> */}
      </div>
      </div>
  );
};

export default Smurfer;
