import React, {useEffect, useState} from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import MainController from '../controllers/MainController';

const Login = props => {
  const {main, loginProcess} = MainController();
  console.log('navigation props-->', props);
  const [userName, setUserName] = useState(false);
  const [password, setPassword] = useState(false);
  const [terms, setTerms] = useState(false);

  useEffect(() => {
    console.log('redux state->', main);
    if (main != null && main.isVerified) {
      props.navigation.navigate('Tabs', {
        id: '123',
        name: 'chamila',
      });
    }
  });

  return (
    <SafeAreaView style={styles.containerSafe}>
      <View style={styles.container}>
        <TextInput
          value={userName}
          onChangeText={username => setUserName(username)}
          placeholder={'Username'}
          style={styles.input}
        />
        <TextInput
          value={password}
          onChangeText={userpassword => setPassword(userpassword)}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />

        <View style={styles.checkboxContainer}>
          <CheckBox
            value={terms}
            onValueChange={setTerms}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Terms and conditions agree</Text>
        </View>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            loginProcess(userName, password);
          }}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerSafe: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  loginButton: {
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 50,
    borderRadius: 0,
  },
  input: {
    width: 250,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 30,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
});

export default Login;
