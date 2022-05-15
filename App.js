import { View, Text } from 'react-native'
import React from 'react'
import Home from '../figma/src/screens/Home'
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import BottomTab from './src/navigation/BottomTab';


const App = () => {
  return (
    <NavigationContainer>
      <BottomTab/>
      {/* <Navigation/> */}
    </NavigationContainer>
  )
}

export default App