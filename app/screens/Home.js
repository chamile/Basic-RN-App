import React, {useEffect} from 'react';
import {Text, TouchableOpacity, SafeAreaView} from 'react-native';
import MainController from '../controllers/MainController';

const Home = props => {
  const {main} = MainController();
  
  useEffect(() => {
    console.log('redux state->', main);
  });

  return (
    <SafeAreaView>
      <Text>HOME SCFREEN</Text>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Details', {
            id: '123',
            name: 'chamila',
          });
        }}>
        <Text>Go to Details</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;
