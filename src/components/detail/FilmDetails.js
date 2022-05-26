import { StyleSheet, Text, View,TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import {
    SIZES,PADDING,COLORS,FONTS
} from '../../constant/constant'
import {useRoute} from '@react-navigation/native';


const {width,height} = Dimensions.get('window')



const FilmDetails = (params) => {
    const route = useRoute();

    const {fullTitle, rank,image, title, release_date, vote_average, vote_count} = route.params;

    return (
        <View style={{
            zIndex: 100,
            justifyContent: 'center',
            alignItems: 'center',
            top: (height/5)*2+20,
            paddingHorizontal: PADDING.ph,
        }}>
            <Text style={{
                fontFamily: FONTS.semibold,
                fontSize: SIZES.xxl,
                color: COLORS.ptext,
                lineHeight: SIZES.xxxl,
                textAlign: 'center'

            }}>{title}</Text>
            <Text style={{
                fontFamily: FONTS.medium,
                fontSize: SIZES.lg,
                color: COLORS.ptext,
                lineHeight: SIZES.xl,
                marginTop: 8,
                textAlign: 'center',
            }}>
               Releases : {release_date}
            </Text>
            <TouchableOpacity
                activeOpacity={0.8}
                style={{
                    zIndex: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                {/* <Image source={rating} style={{
            width: 144,
            height: 24,
          }} />*/}
                <Text
                    style={{
                        fontFamily: FONTS.medium,
                        fontSize: SIZES.lg,
                        color: COLORS.ptext,
                        textAlign: 'center',
                        lineHeight: SIZES.xxxl,
                    }}>
                    Vote Average : {vote_average}/10 ({vote_count} votes)</Text>
            </TouchableOpacity>
        </View>
    )
}


export default FilmDetails
