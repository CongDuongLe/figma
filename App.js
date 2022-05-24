import { View, Text } from 'react-native'
import React from 'react'
import Home from '../figma/src/screens/Home'
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import BottomTab from './src/navigation/BottomTab';
import { store  } from './features/store/Store'
import { Provider } from 'react-redux'


const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomTab />
        {/* <Navigation/> */}
      </NavigationContainer>
    </Provider>
  )
}

export default App