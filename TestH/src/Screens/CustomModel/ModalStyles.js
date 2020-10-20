import React from 'react';
import { StyleSheet } from 'react-native';
import { Drawer } from 'react-native-paper';
// import { RFPercentage } from 'react-native-responsive-fontsize';
const CommonStyles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    RM14: {
        fontFamily: 'Roboto-Medium',
        fontSize: 14,
        color: '#FFFFFF'
    },
    RR12: {
        fontFamily: 'Roboto-Regular',
        fontSize: 12, color: '#FFFFFF',
        textAlign: 'center', padding: 20
    },
    ImgStyle: {
        width: 250, height: 146,
        alignSelf: 'center', marginVertical: 20
    },
    MB18: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 18, color: '#FFFFFF',
        textAlign: 'center'
    }
});

export { CommonStyles };
