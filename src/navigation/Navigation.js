import { View, Text } from 'react-native'
import React from 'react'
import Home from '../screens/Home'
import Detail from '../screens/Detail'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Watched from '../screens/Watched';
import HeaderTop from '../components/detail/HeaderTop'


const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} 
          options={{ 
            headerShown: false,
          }}
        />
        <Stack.Screen name="Detail" component={Detail} 
        />
        <Stack.Screen name="Watched" component={Watched} />

    </Stack.Navigator>
  )
}

export default Navigation