import { StyleSheet, Text, View, FlatList, TextInput, StatusBar, Image, Animated, TouchableOpacity, Dimensions,ScrollView, Platform, ActivityIndicator
} from 'react-native'
import React,{useState, useRef, useEffect} from 'react'
import {COLORS, FONTS, SIZES, PADDING, LANGUAGES} from '../constant/constant'
import {useNavigation} from '@react-navigation/native'
import Carousel from 'react-native-snap-carousel';
import GreetingUser from '../components/home/GreetingUser'
import SearchField from '../components/home/SearchField';
import FilmCategories from '../components/home/FilmCategories';
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
    const [isLoading, setIsLoading] = useState(false);

    // constant
    const imageLink = 'https://image.tmdb.org/t/p/w500/';
    const API_KEY = "15e8ab20aaf5b4fcb9f30aa71d8abcde";
    const BASE_URL = "https://api.themoviedb.org/3/movie";
    // useNavigation
    const navigation = useNavigation();
    // useSelector
    const { currentLanguage, currentPage,searchFilm,currentCategory} = useSelector(state => state.film);
    // useDispatch
    const dispatch = useDispatch();

    // get movies from API
    const getMovies = async () => {
        setIsLoading(true);
        const URL = `${BASE_URL}/${currentCategory}?api_key=${API_KEY}&language=${currentLanguage}&page=${currentPage}`;
        try {
            const response = await axios.get(URL);
            setMovies(response.data.results);
            setFilterMovies(response.data.results);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    }
    // dispatch nextPage to changePage
    const nextPage = (page) => {
        dispatch(changePage(page));
    }

    // get movies from API when change language
    useEffect(() => {
        getMovies();
    }, [currentLanguage]);

    // get movies from API when change page
    useEffect(() => {
        // time out for prevent infinite loop
        const timeout = setTimeout(() => {
            getMovies();
        }, 500);
    }, [currentPage]);


    // search movies




  // renderItem flatlist
  const renderItem = ({item, index}) => {
    return (
                <View
                    style={{
                        marginHorizontal: 16,
                        marginTop: 28,
                    }}>
                    <TouchableOpacity
                        // navigate to Detail with params
                        onPress={() => navigation.navigate('Detail', {
                            title: item.title,
                            image: imageLink + item.poster_path,
                            overview: item.overview,
                            release_date: item.release_date,
                            vote_average: item.vote_average,
                            vote_count: item.vote_count,
                        })}>
                        <Image
                            source={{uri: imageLink + item.poster_path}}
                            style={{width: 210, height: 310, borderRadius: 16, resizeMode: 'cover'}}
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
          <GreetingUser />
          {/* <HeaderCenter /> */}
          <SearchField
            search={searchFilm}
            setSearch={setSearch}
          />
          <FilmCategories/>
          {/* <HeaderBottom/> */}
        </View>
        <View style={styles.footer}>
          {/* Carousel */}
          <Carousel
            data={filterMovies.length === 0 ? movies : filterMovies}
            renderItem={renderItem}
            sliderWidth={width}
            itemWidth={ITEM_SIZE}
            onSnapToItem={index => movies[index].title}
            layout={'default'}
            loop={true}
            enableMomentum={true}
            activeSlideOffset={0}
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              if (currentPage < 2) {
                nextPage(currentPage + 1);
              }
            }}
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
  },
    pageIndex: {
        width: 16,
        height: 16,
        borderRadius: 8,
        backgroundColor: COLORS.secondary,
        marginHorizontal: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
