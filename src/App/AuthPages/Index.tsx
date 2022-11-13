import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from './Login/LoginScreen';

const Stack = createNativeStackNavigator();

export default (): React.ReactElement => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      defaultScreenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={LoginScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
