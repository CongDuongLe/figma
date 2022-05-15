import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../screens/Profile';
import Navigation from './Navigation';
import Watched from '../screens/Watched';
import Search from '../screens/Search';
import Home from '../screens/Home';
import {
    COLORS,
    SIZES,
    FONTS,
    PADDING
} from '../constant/constant'

import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const HomeScreen = 'Home'
const WatchedScreen = 'Watched'
const SeachScreen = 'Search'
const ProfileScreen = 'Profile'

const BottomTab = () => {
  return (
    <Tab.Navigator 
          initialRouteName={HomeScreen}
          screenOptions={
              ({ route }) => {
                  return ({
                      tabBarIcon: ({ focused, color, size }) => {
                          let iconName
                          let rn = route.name
                          if (rn === HomeScreen) {
                              iconName = focused ? 'ios-home' : 'ios-home-outline'
                          } else if (rn === WatchedScreen) {
                              iconName = focused ? 'md-play-circle-sharp' : 'md-play-circle-outline'
                          } else if (rn === SeachScreen) {
                              iconName = focused ? 'ios-search' : 'ios-search-outline'
                          } else if (rn === ProfileScreen) {
                              iconName = focused ? 'ios-person-circle' : 'ios-person-circle-outline'
                          }
                          return <Ionicons name={iconName} size={SIZES.xxl} color={color}
                          />
                      },
                      headerShown: false,
                      tabBarActiveTintColor: COLORS.ptext,
                      tabBarInactiveTintColor: COLORS.inactive,
                      tabBarShowLabel: true,
                      tabBarStyle: {
                          backgroundColor: COLORS.primary,
                          display: 'flex',
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignSelf: 'center',
                          paddingHorizontal: PADDING.tab,
                          borderWidth: 1,
                          position: 'absolute',
                      },
                      //   active tabbar with a dot
                      tabBarLabel: ({ focused, color }) => {
                          if (focused) {
                              return (
                                  <View style={{
                                      backgroundColor: COLORS.primary,
                                      borderWidth: 2,
                                      borderColor: COLORS.ptext,
                                      borderRadius: 2,
                                  }} />
                              )
                          }
                      }
                      // ended styling
                  })
              }
          }
    >
        <Tab.Screen name="Home" component={Navigation} />
        <Tab.Screen name="Watched" component={Watched } />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Profile" component={Profile} />

    </Tab.Navigator>
  )
}

export default BottomTab