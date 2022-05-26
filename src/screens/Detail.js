import { StyleSheet, Text, View, Dimensions , Animated, TouchableOpacity, Image, FlatList ,StatusBar, ScrollView} from 'react-native'
import React,{useLayoutEffect, useState, useEffect} from 'react'
import {COLORS, FONTS, SIZES, PADDING} from '../constant/constant'
import { useNavigation, useRoute } from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import play from '../../assets/images/play.png'
import background from '../../assets/images/detail.png'
import rating from '../../assets/images/rating.png'
import {DATA, DATA_DETAIL} from '../../assets/mock/Dummy'
import axios from 'axios';
import FilmDetails from '../components/detail/FilmDetails';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('window').height;

const Detail = (params) => {

  const [nowPlaying, setNowPlaying] = useState([]);

  // useRoute()

  const route = useRoute()
  const navigation = useNavigation();

  const {fullTitle, image, crew, imDbRating, overview, title} = route.params





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
  const PlayButton = () => {
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
    <ScrollView
        decelerationRate={0.98}
        scrollEventThrottle={16}
        style={styles.container}>
        <StatusBar barStyle="light-content" translucent={true} backgroundColor={'transparent'} />
        {/* header */}
        <View>
        <View style={styles.headerContainer}>
          <Image
              resizeMode='contain'
              source={{uri : image}} style={styles.background} />
          <PlayButton />
         {/* <HeaderBottom />*/}
          <FilmDetails/>
        </View>
        {/* Film info */}
        <View
          style={[styles.infoContainer]}>
          <Text style={styles.episodeText}>Episodes </Text>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => item.id}
            data={DATA_DETAIL}
            renderItem={renderItem}
          />
          <View style={{
            marginTop: 28,
            paddingEnd: PADDING.ph,
          }}>
            <Text style={styles.plotText}>Overview</Text>
            <Text style={styles.plotInfoText}>
              {overview}
             {/* Eight thieves take hostages and lock themselves in the
             Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.*/}
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
  },
  background: {
    width: width,
    height: 550,
    resizeMode: 'cover',
    position: 'absolute',
    opacity: 0.6,
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
  },
  infoContainer :{
    paddingLeft: PADDING.ph ,
    paddingBottom: PADDING.tab,
    marginTop: -height*0.3,
  },
  episodeText : {
    fontFamily: FONTS.medium,
    color: COLORS.ptext,
    fontSize: SIZES.xl,
    lineHeight: 27,
  },
  plotText : {
    fontFamily: FONTS.medium,
    color: COLORS.ptext,
    fontSize: SIZES.xxl,
    lineHeight: SIZES.xxxl,
  },
  plotInfoText : {
    fontFamily: FONTS.medium,
    color: COLORS.stext,
    fontSize: SIZES.lg,
    lineHeight: 21
  },
  headerContainer :{
    width: width,
    height: height,
    position: 'relative',
    backgroundColor: COLORS.primary,
  }
})
