import { StyleSheet, Text, View, Dimensions , Animated, TouchableOpacity, Image, FlatList ,StatusBar, ScrollView} from 'react-native'
import React,{useLayoutEffect} from 'react'
import {COLORS, FONTS, SIZES, PADDING} from '../constant/constant'
import { useNavigation } from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import play from '../../assets/images/play.png'
import background from '../../assets/images/detail.png'
import rating from '../../assets/images/rating.png'
import {DATA, DATA_DETAIL} from '../../assets/mock/Dummy'
import HeaderTop from '../components/detail/HeaderTop';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('window').height;

const Detail = () => {
  const navigation = useNavigation();
  // get dimension of screen 
  // create animation
  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, width);

  useLayoutEffect(() => {
    navigation.setOptions({
      //hide tiltle bar
      headerTitle: '',
      headerStyle: {
        elevation: 5,
      },   
      headerTransparent: true,
      // left button
      headerLeft: () => (
        <TouchableOpacity 
        onPress={() => navigation.goBack()}
        activeOpacity={0.8}  
        style={[styles.buttonHeader, { 
          marginLeft: PADDING.nav,
        }]}>
        <Ionicons name="arrow-back-sharp" size={SIZES.xl} color={COLORS.ptext} />
      </TouchableOpacity>
      ),
      // right button
      headerRight: () => (
        <TouchableOpacity 
        onPress={() => navigation.navigate('Watched')}
        activeOpacity={0.8}  
        style={[styles.buttonHeader, {
          marginRight: PADDING.nav,
        }]}>
        <AntDesign name="heart" size={SIZES.lg} color={COLORS.ptext} />
      </TouchableOpacity>
      ),


    });
  }, [navigation]);


  // headerCenter
  const HeaderCenter = () => { 
    return (
      <View style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            top: (height/5)*2,
            zIndex: 100,
          }}>
          <Image source={play} style={{
            width: 54,
            height: 54,
          }} />
        </TouchableOpacity>
      </View>
    )
  }
  // headerBottom
  const HeaderBottom = () => {
    return (
      <View style={{
        zIndex: 100,
        justifyContent: 'center',
        alignItems: 'center',
        top: (height/5)*2+20,
      }}>
        <Text style={{
          fontFamily: FONTS.semibold,
          fontSize: SIZES.xxl,
          color: COLORS.ptext,
          lineHeight: SIZES.xxxl,
        }}>  Money Heist : Part 5</Text>
          <Text style={{
            fontFamily: FONTS.medium,
            fontSize: SIZES.lg,
            color: COLORS.stext,
            lineHeight: SIZES.xl,
            marginTop: 8,
          }}>
            2021 | Action, Crime, Drama | Episode - 8
          </Text>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            zIndex: 100,
            marginTop : 8
          }}>
          <Image source={rating} style={{
            width: 144,
            height: 24,
          }} />
        </TouchableOpacity>
        </View>
      )
    }

  // renderItem
  const renderItem = ({item, index}) => { 
    return (
      <View style={{
       marginTop : SIZES.sm,
      }}>
        <TouchableOpacity style={{ 
          width: 110,
          marginHorizontal: index===1 ? 32 : 0,   
          alignItems: 'center', 
          borderRadius: 16,
          borderWidth:1,
          elevation: 5
        }}>
          <Image source={item.image} resizeMode='cover' />
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
    <ScrollView style={styles.container}>
        <StatusBar barStyle="light-content" translucent={true} backgroundColor={'transparent'} />
        {/* header */}
        <View>
        <View style={{
          width: width,
          height: height,
          position: 'relative',
          backgroundColor: COLORS.bg,
        }}>
          <Image source={background} style={styles.background} />
          
          <HeaderCenter />
          <HeaderBottom />
        </View> 
        {/* Film info */}
        <View 
          style={{ 
            paddingLeft: PADDING.ph ,
            marginTop: -height/3,
            paddingBottom: PADDING.tab,
            }}>
          <Text style={{
            fontFamily: FONTS.medium,
            color: COLORS.ptext,
            fontSize: SIZES.xl,
            lineHeight: 27,
          }}>Episodes </Text>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => item.id}
            data={DATA_DETAIL}
            renderItem={renderItem}
          />
          <View style={{
            marginTop: 28,
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
        
        </View>
    </ScrollView>
  )
}

export default Detail

const styles = StyleSheet.create({
  container: { 
    backgroundColor: COLORS.primary,
    opacity: 0.98,
  },
  background: { 
    width: width,
    height: height*1.17,
    resizeMode: 'cover',
    marginTop: -height*0.08,
    position: 'absolute',
  },
  buttonHeader : {
    height: SIZES.xxxl,
    width: SIZES.xxxl,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerText :{
    fontFamily: FONTS.medium,
    color: COLORS.stext,
    fontSize: SIZES.lg,
    lineHeight: 21,
  }
})