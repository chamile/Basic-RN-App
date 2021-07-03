import Axios from './Axios';

export default class DataService {
  static async getData(userName, password) {
    return Axios.post('/auth/local/login', {
      email: userName,
      password: password,
    });
  }
}
