import { StyleSheet, Text, View, FlatList, TextInput, StatusBar, Image, Animated, TouchableOpacity, Dimensions,ScrollView, Platform
} from 'react-native'
import React,{useState, useRef, useEffect} from 'react'
import {COLORS, FONTS, SIZES, PADDING, LANGUAGES} from '../constant/constant'
import {useNavigation} from '@react-navigation/native'
import Carousel from 'react-native-snap-carousel';
import HeaderTop from '../components/home/HeaderTop'
import HeaderCenter from '../components/home/HeaderCenter';
import HeaderBottom from '../components/home/HeaderBottom';
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
import {
    changePage, changeLanguage
} from '../../features/slice/filmSlice'


const { width, height } = Dimensions.get('window');
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.2 : width * 0.6;
const MARGIN_HORZONTAL = width * 0.2 - 32;

const Home = () => {
    const scrollX = useRef(new Animated.Value(0)).current;
    // state for movies list
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');
    const [filterMovies, setFilterMovies] = useState([]);

    const imageLink = 'https://image.tmdb.org/t/p/w500';


    // useNavigation
    const navigation = useNavigation();
    // useSelector
    const { currentLanguage, currentPage} = useSelector(state => state.film);
    // useDispatch
    const dispatch = useDispatch();


    // get movies from API
    const getMovies = async () => {
        const URL = `https://api.themoviedb.org/3/movie/popular?api_key=15e8ab20aaf5b4fcb9f30aa71d8abcde&language=${currentLanguage}&page=${currentPage}`;
        try {
            const response = await axios.get(URL);
            setMovies(response.data.results);

        } catch (error) {
            console.log(error);
        }
    }

    // next page
    const nextPage = () => {
        dispatch(changePage(currentPage + 1));
    }


    useEffect(() => {
        getMovies();
    }, [currentLanguage, currentPage]);


    // filter movies include search
    useEffect(() => {
        const filter = movies.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()));
        setFilterMovies(filter);
    }, [search]);


    // get data from api
   /* const URL = 'https://imdb-api.com/en/API/MostPopularMovies/k_xlchixgs'

    const getFilms = async () => {
        try {
            const response = await axios.get(URL);
            // api items.image to show image
            setMovies(response.data.results);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getFilms();
    }, []);*/

  // renderItem flatlist
  const renderItem = ({item, index}) => {
    /*const inputRange = [
      (index - 1) * ITEM_SIZE,
      (index - 0) * ITEM_SIZE,
      (index + 1) * ITEM_SIZE,
    ];

    const translateY = scrollX.interpolate({
      inputRange,
      outputRange: [15, 5, 15],
      extrapolate: 'clamp',
    });*/

    return (
      // Touch to navigate to detail by id
      <View
        style={{
          marginHorizontal: 16,
          marginTop: 28,
        }}>
        <TouchableOpacity
            // navigate to Detail with params

          onPress={() => navigation.navigate('Detail', {
              title : item.title,
              image : imageLink + item.poster_path,
              overview : item.overview,
              release_date : item.release_date,
              vote_average : item.vote_average,
          })}>
          <Image
            source={{uri: imageLink + item.poster_path}}
            style={{ width: 210, height: 310, borderRadius : 16, resizeMode: 'cover' }}
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
          <HeaderCenter
            search={search}
            setSearch={setSearch}
          />
          {/* {HeaderCenter()} */}
          <HeaderBottom
          />
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
            data={filterMovies.length === 0 ? movies : filterMovies}
            renderItem={renderItem}
            sliderWidth={width}
            itemWidth={ITEM_SIZE}
            onSnapToItem={index => movies[index].title}
            layout={'default'}
            loop={false}
            enableMomentum={true}
            activeSlideOffset={0}
            onEndReachedThreshold={0.5}
            onEndReached={nextPage}
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
