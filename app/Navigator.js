import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './screens/Login';
import Home from './screens/Home';
import Home2 from './screens/Home2';
import Details from './screens/Details';
import Explore from './screens/Explore';
import Profile from './screens/Profile';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainController from './controllers/MainController';

const RootStack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const ExploreStack = createStackNavigator();

const AuthStackCreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        options={{headerShown: false}}
        component={Login}
      />
    </HomeStack.Navigator>
  );
};

const HomeStackCreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        options={{headerLeft: null}}
        component={Home}
      />
      <HomeStack.Screen name="Home2" component={Home2} />
      <HomeStack.Screen name="Home3" component={Home2} />
    </HomeStack.Navigator>
  );
};
const ExploreStackCreen = () => {
  return (
    <ExploreStack.Navigator>
      <ExploreStack.Screen
        name="Explore"
        options={{headerLeft: null}}
        component={Explore}
      />
    </ExploreStack.Navigator>
  );
};
const ProfileStackCreen = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        options={{headerLeft: null}}
        component={Profile}
      />
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
    <RootStack.Navigator
      headerMode="none"
      initialRouteName="AuthStackCreen"
      screenOptions={{
        headerShown: false,
      }}>
      <RootStack.Screen name="AuthStackCreen" component={AuthStackCreen} />
      <RootStack.Screen name="Tabs" component={BottomTabNavigator} />
      <RootStack.Screen name="HomeStackCreen" component={HomeStackCreen} />
      <RootStack.Screen
        name="ExploreStackCreen"
        component={ExploreStackCreen}
      />
      <RootStack.Screen
        name="ProfileStackCreen"
        component={ProfileStackCreen}
      />
    </RootStack.Navigator>
  );
};

export default Navigator;
