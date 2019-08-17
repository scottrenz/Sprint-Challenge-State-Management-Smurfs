import axios from 'axios';
export const FETCH_SMURF_DATA_START = 'FETCH_SMURF_DATA_START';
export const FETCH_SMURF_DATA_SUCCESS = 'FETCH_SMURF_DATA_SUCCESS';
export const FETCH_SMURF_DATA_FAILURE = 'FETCH_SMURF_DATA_FAILURE';
export const POST_SMURF_DATA_START = 'POST_SMURF_DATA_START';
export const POST_SMURF_DATA_SUCCESS = 'POST_SMURF_DATA_SUCCESS';
export const POST_SMURF_DATA_FAILURE = 'POST_SMURF_DATA_FAILURE';

export const getData = (props) => {

      return dispatch => {
      dispatch({ type: FETCH_SMURF_DATA_START });
      axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
          dispatch({ type: FETCH_SMURF_DATA_SUCCESS, payload: res.data });
    })
        .catch(err => {
          const error = 'Ya gone did smurfed!'
          dispatch({ type: FETCH_SMURF_DATA_FAILURE, payload: JSON.stringify(error) });
        });
    };
  };
  
export  const postData = (props,setNewName,setNewAge,setNewHeight) => {
      return (dispatch) => {
      dispatch({ type: POST_SMURF_DATA_START });
      axios
        .post('http://localhost:3333/smurfs', props
      )
        .then(res => {
          dispatch({ type: POST_SMURF_DATA_SUCCESS, payload: res.data });
          setNewName('')
          setNewAge('')
          setNewHeight('')
    }) 
        .catch(err => {
const error = 'Ya gone did smurfed! Name/Age/Height are all required to create a smurf in the smurf DB and Name must be unique.'
dispatch({ type: POST_SMURF_DATA_FAILURE, payload: JSON.stringify(error)
  });
        });
    };
  };
