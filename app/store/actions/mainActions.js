import {
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAIL,
} from '../constants/actionTypes';
import DataService from '../../services/DataService';

export const login = (userName, password) => dispatch => {
  dispatch(fetchData());
  DataService.getData(userName, password)
    .then(response => {
      console.log(response);
      console.log('Login response--------->', response);
      dispatch(fetchDataSuccess(response.data));
    })
    .catch(error => {
      console.log('Login error--------->', error);
      dispatch(fetchDataFailed(error));
    });
};

export const fetchData = () => ({
  type: FETCH_DATA,
});

export const fetchDataSuccess = data => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFailed = error => ({
  type: FETCH_DATA_FAIL,
  error: error,
});
