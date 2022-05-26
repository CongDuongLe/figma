import { View, Text } from 'react-native'
import React, {useEffect} from 'react';
import Home from '../screens/Home'
import Detail from '../screens/Detail'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Watched from '../screens/Watched';
import Login from '../screens/AuthStack/Login'
import Register from '../screens/AuthStack/Register'
import Welcome from '../screens/AuthStack/Welcome'
import {useNavigation} from '@react-navigation/native'

import {useSelector, useDispatch} from 'react-redux'



const Stack = createNativeStackNavigator();
const navigation = useNavigation();
const dispatch = useDispatch()
const {user} = useSelector(state => state.auth.users)

const AuthStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Welcome"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Welcome" component={Welcome}/>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Register" component={Register}/>
        </Stack.Navigator>
    )
}

const HomeStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Detail" component={Detail}  />
            <Stack.Screen name="Watched" component={Watched}  />
        </Stack.Navigator>
    )
}



// check if have user then go to homestack else go to authstack
const Navigation = () => {
    useEffect(() => {
        if(user){
            navigation.navigate('Home')
        }
    }, [])
    return (
        <Stack.Navigator
            initialRouteName="AuthStack"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="AuthStack" component={AuthStack} options={{ headerShown: false }} />
            <Stack.Screen name="HomeStack" component={HomeStack} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}



/*const Navigation = () => {
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
}*/

export default Navigation
