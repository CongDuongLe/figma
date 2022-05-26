import React,{useState, useRef} from 'react'
import {COLORS, FONTS, SIZES, PADDING} from '../../constant/constant'
import { StyleSheet, Text, View, FlatList, TextInput, StatusBar, Image, Animated, TouchableOpacity, Dimensions,ScrollView, Platform
} from 'react-native'
import avatar from '../../../assets/images/avatar.png'

const GreetingUser = () => {
    return (
      <View style={styles.container}>
        {/* Text */}
        <View>
            {/* Hello Daizy! */}
        <View style={styles.userGreeting}>
          <Text style={styles.greetingText}>Hello</Text>
          <Text style={styles.userName}>Daizy!</Text>
        </View>
        {/* Cheking last app */}
        <Text style={styles.checking}> Check for lastest addition.</Text>
        </View>
        {/* Avatar */}
        <View style={{ alignItems: 'center' }}>
          <Image source={avatar} style={{ width: 53, height: 53, borderRadius : 50}} />
        </View>
    </View>
    )
  }

export default GreetingUser

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    userGreeting : {
        flexDirection: 'row',
        alignItems: 'center',
        lineHeight: SIZES.xxxl,
    },
    userName : {
        fontFamily: FONTS.light,
        color: COLORS.ptext,
        lineHeight: SIZES.xxxl,
        fontSize: SIZES.xxl
    },
    greetingText : {
        fontFamily: FONTS.medium,
        color: COLORS.ptext,
        fontSize: SIZES.xxl,
        lineHeight: SIZES.xxxl,
        marginRight: 6
    },
    checking : {
        fontFamily: FONTS.medium,
        color: COLORS.stext,
        lineHeight: 21,
        fontSize: SIZES.lg
    }
})
