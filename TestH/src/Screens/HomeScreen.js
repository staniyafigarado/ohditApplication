import React, { Component } from 'react';
import { View, Text, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Shadow, Neomorph } from 'react-native-neomorph-shadows';
import { CommonStyles } from '../SharedComponents/CustomStyles';
import LinearGradient from 'react-native-linear-gradient';
const menu = require('../../assets/icons/menuIcon.png');
const dashboardIcon = require('../../assets/icons/dashboardIcon.png');
const line = require('../../assets/line.png');
const compIcon = require('../../assets/icons/companyIcon.png');
const hand = require('../../assets/icons/handshake.png');
const account = require('../../assets/icons/account.png');
export default class AlignItemsBasics extends Component {

    render() {
        const { navigate } = this.props.navigation;
        return (
            <LinearGradient
                useAngle={true}
                angle={90}
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                colors={['#6834b4', '#512097']} style={{ flex: 1 }}>
                <View style={{ padding: 20 }}>
                    <View style={CommonStyles.headerContainer}>
                        <TouchableOpacity
                            onPress={() => { this.props.navigation.toggleDrawer(); }}
                            style={{ alignSelf: 'flex-start', top: 7 }}>
                            <Image source={menu} style={{ width: 24, height: 22 }}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ alignSelf: 'flex-end', paddingTop: -5, bottom: 10 }}>
                            <Image source={dashboardIcon} style={{ width: 17.3, height: 17.3 }}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={CommonStyles.MonB24CD}>Hello, John</Text>
                        <Text style={{ fontFamily: 'Montserrat-Bold', fontSize: 24, color: '#FFFFFF', opacity: 0.7 }} >Talk to our assistant</Text>
                        <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 14, color: '#FFFFFF', opacity: 0.5 }}>ask anything</Text>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('AddExpenseScreen')}
                            style={{ backgroundColor: '#F1F1F1', width: 144, height: 40, borderRadius: 20, justifyContent: 'center', marginTop: 15 }}>
                            <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 14, color: '#101010', textAlign: 'center' }}>Get Started</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ backgroundColor: '#F1F1F1', flex: 1, borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 20, alignItems: 'center' }}>
                    <Image source={line} style={{ width: 50, height: 5 }}></Image>
                    <Text style={{ fontFamily: 'Montserrat-SemiBold', fontSize: 22, alignSelf: 'flex-start', color: '#101010', marginTop: 10 }}>Heading</Text>
                    <Neomorph
                        inner={false} // <- enable shadow inside of neomorph
                        swapShadows // <- change zIndex of each shadow color
                        style={CommonStyles.homeViewStyle} >
                        <View style={{ flexDirection: 'row', alignSelf: 'flex-start', alignItems: 'center' }}>
                            <Neomorph
                                inner={false} // <- enable shadow inside of neomorph
                                swapShadows // <- change zIndex of each shadow color
                                style={CommonStyles.homeViewStyleInner}>
                                <Image source={compIcon} style={{ width: 20, height: 23 }}></Image>
                            </Neomorph>
                            <Text style={CommonStyles.txtSecondary}>Company Registration</Text>
                        </View>
                    </Neomorph>
                    <Neomorph
                        inner={false} // <- enable shadow inside of neomorph
                        swapShadows // <- change zIndex of each shadow color
                        style={CommonStyles.homeViewStyle} >
                        <View style={{ flexDirection: 'row', alignSelf: 'flex-start', alignItems: 'center' }}>
                            <Neomorph
                                inner={false} // <- enable shadow inside of neomorph
                                swapShadows // <- change zIndex of each shadow color
                                style={CommonStyles.homeViewStyleInner}>
                                <Image source={hand} style={{ width: 23, height: 14 }}></Image>
                            </Neomorph>
                            <Text style={CommonStyles.txtSecondary}>Incorporation</Text>
                        </View>
                    </Neomorph>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ChatBoat')} style={{}}>
                        <Neomorph
                            inner={false} // <- enable shadow inside of neomorph
                            swapShadows // <- change zIndex of each shadow color
                            style={CommonStyles.homeViewStyle} >
                            <View style={{ flexDirection: 'row', alignSelf: 'flex-start', alignItems: 'center' }}>
                                <Neomorph
                                    inner={false} // <- enable shadow inside of neomorph
                                    swapShadows // <- change zIndex of each shadow color
                                    style={CommonStyles.homeViewStyleInner}>
                                    <Image source={account} style={{ width: 23, height: 23 }}></Image>
                                </Neomorph>
                                <Text style={CommonStyles.txtSecondary}>Accounts</Text>
                            </View>
                        </Neomorph>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        );
    }
};
