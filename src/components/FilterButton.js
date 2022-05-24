import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import {
    COLORS,
    FONTS,
    SIZES,
    PADDING,
} from '../constant/constant'


const FilterButton = ({onPress, name, source}) => {

    return (
        //   center view item and text
        <View style={{
            marginTop: SIZES.xxxl,
            alignItems: 'center',
            justifyContent: 'space-between',
        }}>
            {/* Icon or image */}
            <TouchableOpacity
                // set current language to vi-VI
                onPress={onPress}
                style={{
                height: 52,
                width: 52,
                borderRadius: 16,
                backgroundColor: COLORS.secondary,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Image source={source} />
            </TouchableOpacity>
            {/* Text */}
            <View style={{
                marginTop: 4
            }}>
                <Text style={{
                    fontFamily: FONTS.medium,
                    color: COLORS.stext,
                    fontSize: SIZES.md,
                    lineHeight: 18
                }}>{name}</Text>
            </View>
        </View>
    )
}

export default FilterButton
