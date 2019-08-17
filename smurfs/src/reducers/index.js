import {
    FETCH_SMURF_DATA_START,
    FETCH_SMURF_DATA_SUCCESS,
    POST_SMURF_DATA_START,
    POST_SMURF_DATA_SUCCESS,
  } from '../actions';
  
export  const initialState = {
    smurfers: [],
    isLoading: false,
    error: '',
    name: '',
    age: '',
    height: ''
  };
  
  export const reducer = (state = initialState, action, value) => {
    switch (action.type) {
        case FETCH_SMURF_DATA_START:
            return {
              ...state,
              isLoading: true,
              error: ''
            };
          case FETCH_SMURF_DATA_SUCCESS:
            return {
              ...state,
              isLoading: false,
              smurfers: action.payload,
              error: ''
            };
            case POST_SMURF_DATA_START:
                return {
                  ...state,
                  isLoading: true,
                  error: ''
                };
                case POST_SMURF_DATA_SUCCESS:
                    return {
                      ...state,
                      isLoading: false,
                      smurfers: action.payload,
                      error: ''
                    };
                    case 'UPDATE_NAME':
                            return {
                          ...state,
                          name: action.payload
                        };
                        case 'UPDATE_AGE':
                            return {
                              ...state,
                              age: action.payload
                            };
                            case 'UPDATE_HEIGHT':
                                return {
                                  ...state,
                                  height: action.payload
                                };
                                                  default:
        return state;
    }
  };
  