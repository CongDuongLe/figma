import { StyleSheet, Text, View } from 'react-native'
import {COLORS, FONTS, SIZES, PADDING, LANGUAGES} from '../../constant/constant'
import React from 'react'
import FilterButton from '../FilterButton'
import  genre from '../../../assets/images/genre.png'
import  star from '../../../assets/images/star.png'
import  language from '../../../assets/images/language.png'
import  watched from '../../../assets/images/watched.png'
import { useSelector, useDispatch } from 'react-redux'
import {
    changeLanguage, changePage,
} from '../../../features/slice/filmSlice'


const FilmCategories = () => {


    //use dispatch
    const dispatch = useDispatch()
    const currentLanguage = useSelector(state => state.film.currentLanguage)

    const actionChangeLanguage = () => {
        dispatch(changeLanguage(currentLanguage === LANGUAGES.en ? LANGUAGES.vi : LANGUAGES.en))
        console.log(currentLanguage)
    }


  return (
    <View style={styles.container}>
      <Text style={styles.filterText}>Filters</Text>
      {/* Category Button */}
      <View style={styles.button}>
        <FilterButton name='Gerne' source={genre} />
        <FilterButton name='Top IMDB' source={star} />
        <FilterButton name='Language' source={language} onPress={actionChangeLanguage} />
        <FilterButton name='Watched' source={watched} />
      </View>
      {/* Fearture Series */}
      <View style={styles.featureSeries}>
          <Text style={styles.featureText}>Popular</Text>
          <Text style={styles.seriesText}>Series</Text>
      </View>
    </View>
  )
}

export default FilmCategories

const styles = StyleSheet.create({
  container: {
    marginTop : SIZES.xxxl,
  },
  filterText : {
    fontFamily: FONTS.medium,
    color: COLORS.ptext,
    fontSize: SIZES.xl,
    lineHeight: 27
  },
  button : {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop : -22,
  },
  featureSeries : {
    marginTop : SIZES.xxxl,
    flexDirection: 'row',
  },
  featureText :{
    fontFamily: FONTS.medium,
    color: COLORS.ptext,
    fontSize: SIZES.xxl,
    lineHeight:SIZES.xxxl,
    marginRight: 8,
 },
  seriesText :{
    fontFamily: FONTS.light,
    color: COLORS.ptext,
    fontSize: SIZES.xxl,
    lineHeight:SIZES.xxxl,
}

})
