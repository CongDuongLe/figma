import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
    SIZES, PADDING, COLORS, FONTS,
} from '../../constant/constant'
import {useNavigation} from '@react-navigation/native'


    const HeaderTop = (props) => {
        return (
          <View 
            style={{ 
              flexDirection: 'row',
              justifyContent: 'space-between',
              top: 68,
              zIndex: 100,
              paddingHorizontal: PADDING.ph,
              }}>
            <TouchableOpacity 
              onPress={() => navigation.goBack()}
              activeOpacity={0.8}  
              style={[styles.buttonHeader, { 
              }]}>
              <Ionicons name="arrow-back-sharp" size={SIZES.xl} color={COLORS.ptext} />
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => navigation.navigate('Watched')}
              activeOpacity={0.8}  
              style={[styles.buttonHeader, {
              }]}>
              <AntDesign name="heart" size={SIZES.lg} color={COLORS.ptext} />
            </TouchableOpacity>
          </View>
        )
      }


export default HeaderTop

const styles = StyleSheet.create({
  buttonHeader : {
    height: SIZES.xxxl,
    width: SIZES.xxxl,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    alignItems: 'center',
    justifyContent: 'center',
  },

})