import React, {useState,useReducer} from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import axios from 'axios';

import { initialState, reducer } from '../reducers';

import { getData} from '../actions';
import {postData} from '../actions';

import Webcam from './Webcam';

export const FETCH_WEBCAM_DATA_START = 'FETCH_WEBCAM_DATA_START';
export const FETCH_WEBCAM_DATA_SUCCESS = 'FETCH_WEBCAM_DATA_SUCCESS';
export const FETCH_WEBCAM_DATA_FAILURE = 'FETCH_WEBCAM_DATA_FAILURE';
export const POST_WEBCAM_DATA_START = 'POST_WEBCAM_DATA_START';
export const POST_WEBCAM_DATA_SUCCESS = 'POST_WEBCAM_DATA_SUCCESS';
export const POST_WEBCAM_DATA_FAILURE = 'POST_WEBCAM_DATA_FAILURE';

const WebcamList = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newNameText, setNewNameText] = useState();
  const [newAgeText, setNewAgeText] = useState();
  const [newHeightText, setNewHeightText] = useState();

  const handleNameChanges = e => {
    setNewNameText(e.target.value);
  };
  const handleAgeChanges = e => {
    setNewAgeText(e.target.value);
  };
  const handleHeightChanges = e => {
    setNewHeightText(e.target.value);
  };

  const postData = (props,nam,ag,hei) => {

    const sendUserError = (msg, res) => {
        res.status(422);
        res.json({ Error: msg });
        return;
      };
          let smurfs = [
        {
          name: 'Joe',
          age: 150,
          height: '4cm',
          id: 1
        }
      ];
      let smurfId = smurfs.length;
      return (dispatch,getState) => {
      dispatch({ type: POST_WEBCAM_DATA_START });
let myState=getState()
      const API_KEY = '13326342-ae04c86d323cd34e4044e0556'
      let smurf = 
        {name: 'Joe', age: 150,height:'4cm', id: 1}
      ;
      axios
      
      // https://pixabay.com/api/?key="+API_KEY+"&q="
      // .get('https://api.oceandrivers.com:443/v1.0/getWebCams/')
    //   .get('https://api.nasa.gov/planetary/apod?api_key=awlI2QgBkvZtjasfaTqkmYUtoyGU6vfQLcsgQVmH&date=2019-08-14')

    // .post('http://localhost:3333/smurfs', (req, res) => {
        .post('http://localhost:3333/smurfs', {
            name: 'Doqrnay',
            age: 150,
            height: '4cm'
      })
        .then(res => {
        // res.json(smurfs);// res.data.data
        console.log('post nam,ag,hei',nam,ag,hei)
        console.log('post getstate',myState)
        console.log('post smurfname',props.smurfName)
        console.log('post initalState',initialState)
        console.log('post props',props)
        console.log('post smurfs',smurfs)
          console.log('post res is',res.data);

          dispatch({ type: POST_WEBCAM_DATA_SUCCESS, payload: res.data });
    }) 
        .catch(err => {
          dispatch({ type: POST_WEBCAM_DATA_FAILURE, payload: err.response });
        });
    };
  };


  return (
    <>
      <h1>From Our Friends at NASA  !</h1>
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
            name="newNameText"
            value={newNameText}
            onChange={handleNameChanges}
          />

          <button
            onClick={() => { 
              dispatch({ type: "UPDATE_NAME", payload: newNameText })
                            setNewNameText('');
            }}
          >
            Add name
          </button>
        </div>
        <div>
          <input
            className="title-input"
            type="text"
            name="newAgeText"
            value={newAgeText}
            onChange={handleAgeChanges}
          />
          <button
            onClick={() => {
              dispatch({ type: "UPDATE_AGE", payload: newAgeText })
              setNewAgeText('');
            }}
          >
            Add age
          </button>
        </div>
        <div>
          <input
            className="title-input"
            type="text"
            name="newHeightText"
            value={newHeightText}
            onChange={handleHeightChanges}
          />
          <button
            onClick={() => {
              dispatch({ type: "UPDATE_HEIGHT", payload: newHeightText })
              setNewHeightText('');
            }}
          >
            Add height
          </button>
        </div>

</div>


      <button
      //  onClick={() => postData(props,newNameText)}
       onClick={props.postData}
       >
        {props.isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={parseInt("15")} width={parseInt("100")} />
        ) : (
          'Post A Data'
        )}
      </button>
      {props.webcams &&
        // <Webcam key={props.webcams.id} webcam={props.webcams} />}
        props.webcams.map(cam => <Webcam key={cam.id} webcam={cam} />)}
        </>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    webcams: state.webcams
  };
};
export default connect(
  mapStateToProps,
  { getData, postData }
)(WebcamList);

// TASKS
// - get WebcamList connected to the Redux store
// - Bring in the `test` property from state
// - if done correctly, you should see "It's working" dipslayed in the app
// GOOD LUCK 😃
