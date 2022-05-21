import { StyleSheet, Text, View, FlatList, TextInput, StatusBar, Image, Animated, TouchableOpacity, Dimensions,ScrollView, Platform
} from 'react-native'
import React,{useState, useRef} from 'react'
import {COLORS, FONTS, SIZES, PADDING} from '../constant/constant'
import AntDesign  from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FilterButton from '../components/FilterButton';
import avatar from '../../assets/images/avatar.png'
import  genre from '../../assets/images/genre.png'
import  star from '../../assets/images/star.png'
import  language from '../../assets/images/language.png'
import  watched from '../../assets/images/watched.png'
import {DATA} from '../../assets/mock/Dummy'
import {useNavigation} from '@react-navigation/native'
import mic from '../../assets/images/mic.png'
import Carousel from 'react-native-snap-carousel';
import HeaderTop from '../components/home/HeaderTop'
import HeaderCenter from '../components/home/HeaderCenter';
import HeaderBottom from '../components/home/HeaderBottom';




const { width, height } = Dimensions.get('window');
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.2 : width * 0.6;

const MARGIN_HORZONTAL = width * 0.2 - 32;

const Home = () => {
    const [search, setSearch] = useState('');
    const scrollX = useRef(new Animated.Value(0)).current;
    // useNavigation
    const navigation = useNavigation();


  // renderItem flatlist
  const renderItem = ({item, index}) => { 
    const inputRange = [
      (index - 1) * ITEM_SIZE,
      (index - 0) * ITEM_SIZE,
      (index + 1) * ITEM_SIZE,
    ];

    const translateY = scrollX.interpolate({
      inputRange,
      outputRange: [15, 5, 15],
      extrapolate: 'clamp',
    });
    return (
      // Touch to navigate to detail by id
      <View
        style={{
          marginHorizontal: 16,
          marginTop: 28,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Detail', { id: item.id })}>
          <Image
            source={item.image}
            style={{ width: 210, height: 310 }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        overScrollMode="never"
       >
        <StatusBar barStyle="light-content" hidden={false} translucent={true} backgroundColor={'transparent'} />
        <View style={styles.header}>
          {/* HeaderTop */}
          <HeaderTop />
          {/* <HeaderCenter /> */}
          <HeaderCenter />
          {/* {HeaderCenter()} */}
          {/* {HeaderBottom()} */}
          {/* <HeaderBottom /> */}
          <HeaderBottom/>
          {/* <HeaderBottom/> */}
        </View>
        <View style={styles.footer}>
          {/* Animated Flatlist Rotated Z 5 dregree */}
          {/* <Animated.FlatList
          data={DATA}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={16}
          contentContainerStyle={{ alignItems: 'center' }}
          decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
          renderToHardwareTextureAndroid
          snapToInterval={ITEM_SIZE}
          // snapToAlignment="center"
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true }
          )}
        /> */}
          {/* Carousel */}
          <Carousel
            data={DATA}
            renderItem={renderItem}
            sliderWidth={width}
            itemWidth={ITEM_SIZE}
            onSnapToItem={index => setSearch(DATA[index].title)}
            layout={'default'}
            loop={true}
            enableMomentum={true}
            activeSlideOffset={0}
          />

        </View>
      </ScrollView>
    </View>
  )
}


export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    paddingBottom : 60,
    opacity: 0.98
  },
  header: { 
    // flex : 1,
    paddingHorizontal: PADDING.ph,
    paddingTop: PADDING.pv,
  },
  footer: {
    flex: 1,
  }
})