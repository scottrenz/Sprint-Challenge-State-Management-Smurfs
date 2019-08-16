import {
    FETCH_WEBCAM_DATA_START,
    FETCH_WEBCAM_DATA_SUCCESS,
    FETCH_WEBCAM_DATA_FAILURE,
    POST_WEBCAM_DATA_START,
    POST_WEBCAM_DATA_SUCCESS,
    POST_WEBCAM_DATA_FAILURE
  } from '../actions';
  
export  const initialState = {
    webcams: [],
    isLoading: false,
    error: '',
    name: '',
    age: '',
    height: ''
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_WEBCAM_DATA_START:
            return {
              ...state,
              isLoading: true,
              error: ''
            };
          case FETCH_WEBCAM_DATA_SUCCESS:
            return {
              ...state,
              isLoading: false,
              webcams: action.payload,
              error: ''
            };
            case POST_WEBCAM_DATA_START:
                return {
                  ...state,
                  isLoading: true,
                  error: ''
                };
                case POST_WEBCAM_DATA_SUCCESS:
                    return {
                      ...state,
                      isLoading: false,
                      webcams: action.payload,
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
  