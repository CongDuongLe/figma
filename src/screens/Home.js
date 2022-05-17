import { StyleSheet, Text, View, FlatList, TextInput, StatusBar, Image, Animated, TouchableOpacity, Dimensions
} from 'react-native'
import React,{useState} from 'react'
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



const Home = () => {
    const [search, setSearch] = useState('');
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;
    const scrollX = new Animated.Value(0);
    let position = Animated.divide(scrollX, width);

    // useNavigation
    const navigation = useNavigation();

  // header top
  const HeaderTop = () => {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        {/* Text */}
        <View>
            {/* Hello Daizy! */}
        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
          <Text 
            style={{
              fontFamily: FONTS.medium,
              color: COLORS.ptext,
              fontSize: SIZES.xxl,
              lineHeight : SIZES.xxxl,
              marginRight : 6
          }}>Hello</Text>
          <Text
            style={{
              fontFamily: FONTS.light,
              color: COLORS.ptext,
              lineHeight : SIZES.xxxl,
              fontSize: SIZES.xxl
            }}
            >Daizy!</Text>
        </View>
        {/* Cheking last app */}
        <Text style={{
          fontFamily: FONTS.medium,
          color: COLORS.stext,
          lineHeight: 21,
          fontSize: SIZES.lg
        }}> Check for lastest addition.</Text>
        </View>
        {/* Avatar */}
        <View style={{ alignItems: 'center' }}>
          <Image source={avatar} style={{ width: 53, height: 53, borderRadius : 50}} />
        </View>
    </View>
    )
  }
  // header center
  const HeaderCenter = () => {
  return (
    <View style={{
      flexDirection: 'row',
      marginTop : SIZES.xxxl,
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
       <AntDesign name="search1" size={SIZES.xxl} color={COLORS.ptext}
          style ={{ 
            position: 'absolute',
            left : 16,
            paddingVertical: SIZES.lg,
          }}
       />
      <TextInput
        placeholder="Search"
        placeholderTextColor={COLORS.stext}
        style={{
          fontFamily: FONTS.medium,
          lineHeight :21,
          flex :1,
          borderWidth : 1,
          borderColor : COLORS.stext,
          borderRadius: 16,
          backgroundColor : "rgba(118, 118, 128, 0.12)",
          fontSize: SIZES.lg,
          alignContent: 'center',
          color: COLORS.stext,
          paddingHorizontal: 56,
        }}
        onChangeText={(text) => setSearch(text)}
        value={search}
      />
      <TouchableOpacity style={{
        position: 'absolute',
        right : 16,
      }}>
        <Image source={mic} style={{
          width:40,
          height:30,
        }} />
      </TouchableOpacity>
    </View>
  )
  }
  // header bottom
  const HeaderBottom = () => { 
    return(
      <View style={{
        marginTop : SIZES.xxxl,
      }}>
        <Text style={{
          fontFamily: FONTS.medium,
          color: COLORS.ptext,
          fontSize: SIZES.xl,
          lineHeight: 27
         }}>Filters</Text>
         <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <FilterButton name = 'Gerne' source ={genre} />
            <FilterButton name = 'Top IMDB' source ={star}/>
            <FilterButton name = 'Language' source ={language} />
            <FilterButton name = 'Watched' source ={watched}/>
         </View>
         <View style ={{
            marginTop : SIZES.xxxl,
         }}>
           <View style={{
              flexDirection: 'row',
           }}>
             <Text style={{
                fontFamily: FONTS.medium,
                color: COLORS.ptext,
                fontSize: SIZES.xxl,
                lineHeight:SIZES.xxxl,
             }}>Feature </Text>
             <Text style={{
                fontFamily: FONTS.light,
                color: COLORS.ptext,
                fontSize: SIZES.xxl,
                lineHeight:SIZES.xxxl,
                }}>Series</Text>
           </View>
         </View>
      </View>
    )
  }
  // renderItem flatlist
  const renderItem = ({item}) => { 
    return (
      // Touch to navigate to detail by id
      <TouchableOpacity 
        onPress={() => navigation.navigate('Detail', {id: item.id})}
        activeOpacity={0.8}
        style={{
          marginTop : SIZES.xxxl,
          marginLeft: 28,
      }}>
        <Image 
          source={item.image} 
          style={{ 
            resizeMode: 'contain',
          }}
          />
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" hidden={false} translucent={true} backgroundColor={'transparent'} />
      <View style={styles.header}>
        <HeaderTop />
        <HeaderCenter />
        <HeaderBottom />
      </View>
      <View style={styles.footer}>
        {/* Animated Flatlist Rotated Z 5 dregree */}
        <FlatList
          data={DATA}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}
          decelerationRate={0.8}
          snapToInterval={width}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
        />
      </View>
    </View>
  )
}


export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    opacity: 0.98
  },
  header: { 
    flex : 1,
    paddingHorizontal: PADDING.ph,
    paddingTop: PADDING.pv,
  },
  footer: {
    flex: 1,
  }
})