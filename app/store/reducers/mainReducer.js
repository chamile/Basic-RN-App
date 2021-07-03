import {
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAIL,
} from '../constants/actionTypes';

const INITIAL_STATE = {
  loading: true,
  error: null,
  data: null,
};

const diaryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {...state, loading: true};
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_DATA_FAIL:
      return {...state, error: action.error, loading: false};
    default:
      return state;
  }
};

export default diaryReducer;
