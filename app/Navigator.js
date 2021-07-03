import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './screens/Login';
import Home from './screens/Home';
import Details from './screens/Details';
import Explore from './screens/Explore';
import Profile from './screens/Profile';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainController from './controllers/MainController';

const AuthStack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const HomeStack = createBottomTabNavigator();
const ProfileStack = createBottomTabNavigator();
const ExploreStack = createBottomTabNavigator();

const HomeStackCreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
};
const ExploreStackCreen = () => {
  return (
    <ExploreStack.Navigator>
      <ExploreStack.Screen name="Explore" component={Explore} />
    </ExploreStack.Navigator>
  );
};
const ProfileStackCreen = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={Profile} />
    </ProfileStack.Navigator>
  );
};
function BottomTabNavigator() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={HomeStackCreen} />
      <Tabs.Screen name="Explore" component={ExploreStackCreen} />
      <Tabs.Screen name="Profile" component={ProfileStackCreen} />
    </Tabs.Navigator>
  );
}

const Navigator = props => {
  const {main} = MainController();

  // useEffect(() => {
  //   if (main.isVerified) {
  //     navigation.navigate('AuthStack', 'login');
  //   }
  // }, [main.isVerified]);

  // return (
  //   <NavigationContainer>
  //     <Stack.Navigator
  //       screenOptions={{
  //         headerShown: false,
  //       }}>
  //       <Stack.Screen name="Login" component={Login} />
  //     </Stack.Navigator>
  //     <Stack.Navigator>
  //       <Stack.Screen name="Home" component={Home} />
  //       <Stack.Screen name="Details" component={Details} />
  //     </Stack.Navigator>
  //   </NavigationContainer>
  // );

  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Tabs" component={BottomTabNavigator} />
    </AuthStack.Navigator>
  );
};

export default Navigator;
