import { StyleSheet, Text, View, ImageBackground, Dimensions , Animated, TouchableOpacity, Image, FlatList ,StatusBar, ScrollView} from 'react-native'
import React from 'react'
import {COLORS, FONTS, SIZES, PADDING} from '../constant/constant'
import { useNavigation } from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import play from '../../assets/images/play.png'
import background from '../../assets/images/details.png'
import rating from '../../assets/images/rating.png'
import {DATA, DATA_DETAIL} from '../../assets/mock/Dummy'


const Detail = () => {
  const navigation = useNavigation();
  // get dimension of screen 
  const width = Dimensions.get('screen').width;
  const height = Dimensions.get('window').height;
  // create animation
  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, width);

  // headerTop
  const HeaderTop = () => {
    return (
      <View 
        style={{ 
          flexDirection: 'row',
          justifyContent: 'space-between',
          position: 'absolute',
          top: 62,
          }}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          activeOpacity={0.8}  
          style={[styles.buttonHeader, { 
            left : 68
          }]}>
          <Ionicons name="arrow-back-sharp" size={SIZES.xl} color={COLORS.ptext} />
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => navigation.navigate('Watched')}
          activeOpacity={0.8}  
          style={[styles.buttonHeader, {
            left : 360
          }]}>
          <AntDesign name="heart" size={SIZES.lg} color={COLORS.ptext} />
        </TouchableOpacity>
      </View>
    )
  }
  // headerCenter
  const HeaderCenter = () => { 
    return (
      <View style={{
        position: 'relative',
      }}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            top: 285,
            left: 205,
            position: 'absolute',
          }}
        >
          <Image source={play} />
        </TouchableOpacity>
        <View style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '72%',
          position: 'absolute',
          left: '20%',

        }}>
          <Text style={{
            fontFamily: FONTS.semibold,
            color: COLORS.ptext,
            fontSize: SIZES.xxl,
            lineHeight: SIZES.xxxl,
            marginBottom: SIZES.lg,
          }}>Money Heist: Part 5</Text>
          <View 
            style={{flexDirection: 'row'}}>
              <Text style={styles.centerText}> 2021 | </Text>
              <Text style={styles.centerText}> Action, Crime, Drama | </Text>
              <Text style={styles.centerText}> Episode- 8 </Text>
          </View>
          <View style={{
            marginTop : 8
          }}>
            <Image source={rating} />
          </View>
        </View>
      </View>
    )
  }
  // renderItem
  const renderItem = ({item}) => { 
    return (
      <View style={{
       marginTop : 8
      }}>
        <TouchableOpacity style={{ 
          width: 110,
          marginHorizontal: 16,   
          alignItems: 'center', 
        }}>
          <Image source={item.image} />
          <Text 
            style={{
              fontFamily: FONTS.medium,
              color: COLORS.ptext,
              fontSize: SIZES.lg,
              lineHeight: 21,
              position: 'absolute',
              top : 112
            }}>{item.title}</Text>
          <Text style={{
            fontFamily: FONTS.medium,
            color: COLORS.stext,
            fontSize: 11,
            lineHeight: 15,
            textAlign: 'center',
            position: 'absolute',
            top : 130,
          }}>
            {item.description}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }


  return (
    <View style={styles.container}>
      <StatusBar  barStyle="light-content" translucent={true} backgroundColor={'transparent'}/>
        <ImageBackground source={background} style={styles.background}>
          <View style={{flex : 3}}>
            <HeaderTop/>
            <HeaderCenter/>
          </View>
          <View style={{flex : 2, paddingLeft : PADDING.tab , position : 'absolute', top :'60%', marginTop: -10}}>
            <Text style={{
              fontFamily: FONTS.medium,
              color: COLORS.ptext,
              fontSize: SIZES.xl,
              lineHeight: 27,
              marginLeft : "4%"
             }}>Episodes </Text>
            <FlatList 
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              data = {DATA_DETAIL}
              renderItem={renderItem}
            />
            {/* Plot */}
            <View style={{
              marginLeft : "4%",
              marginTop : 28,
            }}>
              <Text style={{
                fontFamily: FONTS.medium,
                color: COLORS.ptext,
                fontSize: SIZES.xxl,
                lineHeight: SIZES.xxxl,
              }}>Plot</Text>
              <Text style={{
                fontFamily: FONTS.medium,
                color: COLORS.stext,
                fontSize: SIZES.lg,
                lineHeight: 21
              }}>
              Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.
              </Text>
            </View>
          </View>
        </ImageBackground>
    </View>
  )
}

export default Detail

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  background: { 
    width: '110%',
    height: '100%',
    marginLeft: '-9%',
    resizeMode: 'contain',
    marginTop: -10
  },
  buttonHeader : {
    height: SIZES.xxxl,
    width: SIZES.xxxl,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  centerText :{
    fontFamily: FONTS.medium,
    color: COLORS.stext,
    fontSize: SIZES.lg,
    lineHeight: 21,
  }
})