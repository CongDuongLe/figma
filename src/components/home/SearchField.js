import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import {COLORS, FONTS, SIZES, PADDING} from '../../constant/constant'
import AntDesign  from 'react-native-vector-icons/AntDesign';
import mic from '../../../assets/images/mic.png'
import { useDispatch, useSelector } from 'react-redux'
import {  searchFilter } from '../../../features/slice/filmSlice'

const SearchField = ({search,setSearch}) => {

    const {searchFilm} = useSelector(state => state.film)

    const dispatch = useDispatch()
    const onSearch = (search) => {
        setSearch(search)
        dispatch(searchFilter(search))
    }


  return (
      <View style={styles.container}>
          <TouchableOpacity style={styles.searchIcon}>
            <AntDesign name="search1" size={SIZES.xxl} color={COLORS.ptext}
            />
          </TouchableOpacity>
          <TextInput
            placeholder="Search"
            placeholderTextColor={COLORS.stext}
            style={styles.searchInput}
            onChangeText={onSearch}
            value={search}
          />
          <TouchableOpacity style={styles.searchMic}>
            <Image source={mic} style={{ width :40, height :30}}/>
          </TouchableOpacity>
      </View>
  )
}

export default SearchField

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop : SIZES.xxxl,
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchIcon : {
        position: 'absolute',
        left : 16,
        paddingVertical: SIZES.lg,
    },
    searchInput : {
        fontFamily: FONTS.medium,
        lineHeight :21,
        flex :1,
        borderWidth : 1.5,
        borderColor : 'rgba(118, 118, 128, 0.22)',
        borderRadius: 16,
        backgroundColor : "rgba(118, 118, 128, 0.12)",
        fontSize: SIZES.lg,
        alignContent: 'center',
        color: COLORS.stext,
        paddingHorizontal: 56,
        justifyContent: 'center',
    },
    searchMic : {
        position: 'absolute',
        right : 16,
    },

})
