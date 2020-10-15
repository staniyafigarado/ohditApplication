import React, { Component } from 'react';
import { View, Text, TextInput, ScrollView, Image, Dimensions } from 'react-native';
import { Shadow, Neomorph } from 'react-native-neomorph-shadows';
import { CommonStyles } from './src/SharedComponents/CustomStyles';
import { ProgressBar } from '@react-native-community/progress-bar-android';
import 'react-native-gesture-handler';
const ohditlogo = require('./assets/ohditLogo.png')
const { width, height } = Dimensions.get('window')
const SplashScreen = () => {

    return (
        <View style={CommonStyles.container}>
            <Image source={ohditlogo}
                style={{ width: 229, height: 182 }}></Image>
            <View style={{ justifyContent: 'flex-end', width: width * .4, top: height * .3 }}>

                <ProgressBar styleAttr="Horizontal" color="#6834B4" />
            </View>
        </View>
    )
}

export default SplashScreen;