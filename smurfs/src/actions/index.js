import React, {useState, useReducer} from 'react';
import { connect } from 'react-redux'
// import {buyFeature1,buyFeature2,buyFeature3,buyFeature4} from '../actions'
import axios from 'axios';
import {initialState} from '../reducers'
import {store} from '../index'
export const FETCH_WEBCAM_DATA_START = 'FETCH_WEBCAM_DATA_START';
export const FETCH_WEBCAM_DATA_SUCCESS = 'FETCH_WEBCAM_DATA_SUCCESS';
export const FETCH_WEBCAM_DATA_FAILURE = 'FETCH_WEBCAM_DATA_FAILURE';
export const POST_WEBCAM_DATA_START = 'POST_WEBCAM_DATA_START';
export const POST_WEBCAM_DATA_SUCCESS = 'POST_WEBCAM_DATA_SUCCESS';
export const POST_WEBCAM_DATA_FAILURE = 'POST_WEBCAM_DATA_FAILURE';

export const getData = (props) => {

    const sendUserError = (msg, res) => {
        res.status(422);
        res.json({ Error: msg });
        return;
      };
          let smurfs = [
        {
          name: 'Brainey',
          age: 200,
          height: '5cm',
          id: 0
        }
      ];
      let smurfId = smurfs.length;
      return dispatch => {
      dispatch({ type: FETCH_WEBCAM_DATA_START });
      const API_KEY = '13326342-ae04c86d323cd34e4044e0556'
      axios
      
      // https://pixabay.com/api/?key="+API_KEY+"&q="
      // .get('https://api.oceandrivers.com:443/v1.0/getWebCams/')
    //   .get('https://api.nasa.gov/planetary/apod?api_key=awlI2QgBkvZtjasfaTqkmYUtoyGU6vfQLcsgQVmH&date=2019-08-14')
      .get('http://localhost:3333/smurfs')
      .then(res => {
        // res.json(smurfs);// res.data.data
        console.log('get smurfs',smurfs)
          console.log('res is',res.data);

          dispatch({ type: FETCH_WEBCAM_DATA_SUCCESS, payload: res.data });
    })
        .catch(err => {
          dispatch({ type: FETCH_WEBCAM_DATA_FAILURE, payload: err.response });
        });
    };
  };
  
export  const postData = (props,nam,ag,hei) => {

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
let myState=getState().reducer
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
            name: 'Andy',
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
  
        //   axios
        //   .post('/http://localhost:3333/smurfs', (req, res) => {
        //     const { name, age, height } = req.body;
        //     const newSmurf = { name, age, height, id: smurfId };
        //     if (!name || !age || !height) {
        //       return sendUserError(
        //         'Ya gone did smurfed! Name/Age/Height are all required to create a smurf in the smurf DB.',
        //         res
        //       );
        //     }
          
        // })

        const mapStateToProps = state => {
            console.log('header state',state)
            return {
              smurfName: state.name,
              smurfAge: state.age,
              smurfHeight: state.height
            }
          }
          export default connect(
          mapStateToProps,
          {
          }
          )(postData);
          


