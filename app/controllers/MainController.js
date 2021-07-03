import {useSelector, useDispatch} from 'react-redux';
// import {useNavigation} from '@react-navigation/native';
import {login} from '../store/actions/mainActions';

const MainController = () => {
  const dispatch = useDispatch();
  // const navigation = useNavigation();
  const main = useSelector(state => state.main.data);
  const loading = useSelector(state => state.main.loading);

  const loginProcess = (userName, password) => {
    dispatch(login(userName, password));
    console.log('loginProcess--->loading', loading);
    if (loading) {
      // navigation.navigate('Tabs', {
      //   id: '123',
      //   name: 'chamila',
      // });
    }
  };

  return {
    main,
    loginProcess,
  };
};
export default MainController;
