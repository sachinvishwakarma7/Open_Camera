import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import IntroSlider from '../components/IntroSlider';
import SettingScreen from '../screens/SettingScreen';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {backgroundColor: '#13151A'},
        headerShadowVisible: false,
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name="Intro"
        component={IntroSlider}
      />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        options={{headerTitleAlign: 'center'}}
        name="Settings"
        component={SettingScreen}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
