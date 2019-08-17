import React, {useState,useReducer} from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { initialState, reducer } from '../reducers';

import { getData} from '../actions';
import {postData} from '../actions';

import Smurfer from './Smurfer';

export const FETCH_SMURF_DATA_START = 'FETCH_SMURF_DATA_START';
export const FETCH_SMURF_DATA_SUCCESS = 'FETCH_SMURF_DATA_SUCCESS';
export const FETCH_SMURF_DATA_FAILURE = 'FETCH_SMURF_DATA_FAILURE';
export const POST_SMURF_DATA_START = 'POST_SMURF_DATA_START';
export const POST_SMURF_DATA_SUCCESS = 'POST_SMURF_DATA_SUCCESS';
export const POST_SMURF_DATA_FAILURE = 'POST_SMURF_DATA_FAILURE';

const SmurfList = props => {
  const [dispatch] = useReducer(reducer, initialState);
  const [newName, setNewName] = useState();
  const [newAge, setNewAge] = useState();
  const [newHeight, setNewHeight] = useState();

  const handleNameChanges = e => {
    setNewName(e.target.value);
  };
  const handleAgeChanges = e => {
    setNewAge(e.target.value);
  };
  const handleHeightChanges = e => {
    setNewHeight(e.target.value);
  };

  return (
    <>
      <button onClick={props.getData}>
        {props.isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={parseInt("15")} width={parseInt("100")} />
        ) : (
          'Get A Data'
        )}
      </button>
<div>
<div>
          <input
            className="title-input"
            type="text"
            name="newName"
            value={newName}
            onChange={handleNameChanges}
          />

          <button
            onClick={() => { 
              dispatch({ type: "UPDATE_NAME", payload: newName })
            }}
          >
            Add name
          </button>
        </div>
        <div>
          <input
            className="title-input"
            type="number"
            name="newAge"
            value={newAge}
            onChange={handleAgeChanges}
          />
          <button
            onClick={() => {
              dispatch({ type: "UPDATE_AGE", payload: newAge })
            }}
          >
            Add age
          </button>
        </div>
        <div>
          <input
            className="title-input"
            type="text"
            name="newHeight"
            value={newHeight}
            onChange={handleHeightChanges}
          />
          <button
            onClick={() => {
              dispatch({ type: "UPDATE_HEIGHT", payload: newHeight })
            }}
          >
            Add height
          </button>
        </div>

</div>


      <button
       onClick={() => props.postData({name: newName.trim(),age: newAge, height: newHeight.trim()},setNewName,setNewAge,setNewHeight)}
       >
        {props.isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={parseInt("15")} width={parseInt("100")} />
        ) : (
          'Post A Data'
        )}
      </button>
      {props.smurfers &&
        props.smurfers.map(cam => <Smurfer key={cam.id} smurfer={cam} />)}
        </>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    smurfers: state.smurfers,
    value : {
      nane: state.name,
      age: state.age,
      height: state.height
    }
  };
};
export default connect(
  mapStateToProps,
  { getData, postData }
)(SmurfList);
