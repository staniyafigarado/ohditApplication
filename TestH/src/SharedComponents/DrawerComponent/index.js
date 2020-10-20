import React from 'react';
import { View, Text, ScrollView, Dimensions, Image, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
const { width, height } = Dimensions.get('window');
const close = require('../../../assets/icons/close.png');
const ohdit = require('../../../assets/icons/ohdit.png');
const DrawerStyle = () => {
    return (
        <View style={{ backgroundColor: '#F1F1F1' }}>
            <View
                style={{
                    height: height * .2,
                    justifyContent: 'center',
                    padding: width * .05,
                }}
            >
                <View style={{ height: height * 0.1, flexDirection: 'row', alignItems: 'center', width: '100%' }} >
                    <View style={{ justifyContent: 'center', width: '90%' }}>
                        <Image source={ohdit} style={{ width: 91, height: 36 }}></Image>
                    </View>
                    <View style={{ justifyContent: 'center', width: '10%' }}>
                        <TouchableOpacity style={{ padding: 5 }}
                        // onPress={() => this._drawer.close()}
                        >
                            <Image source={close} style={{ width: 18, height: 18, marginLeft: 5 }}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default DrawerStyle;
