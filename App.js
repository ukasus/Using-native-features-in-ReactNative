import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './component/Home';
import MapAndGps from './component/MapAndGps';
import ImagePicker from './component/ImagePicker';
import PhoneCall from './component/PhoneCall';




const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
    
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Map" component={MapAndGps} />
        <Stack.Screen name="ImagePicker" component={ImagePicker} />
        <Stack.Screen name="PhoneCall" component={PhoneCall} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;