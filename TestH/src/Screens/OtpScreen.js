import React, { Component } from 'react';
import { View, Text, TextInput, ScrollView, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Shadow, Neomorph } from 'react-native-neomorph-shadows';
import { CommonStyles } from '../SharedComponents/CustomStyles';
const phoneIcon = require('../../assets/phone.png')
const line = require('../../assets/line.png')
export default class AlignItemsBasics extends Component {
    render() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#F1F1F1' }}>
                <View style={{ marginTop: 40, justifyContent: 'center', alignSelf: 'center' }}>
                    <Image source={phoneIcon} style={{ width: 200, height: 300, alignSelf: 'center' }}></Image>
                    <View style={{ marginTop: 10, justifyContent: 'center', alignSelf: 'center', width: '100%', alignItems: 'center' }}>
                        <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 12 }}>You will receive a 4 digit code on 9656039412</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Neomorph style={CommonStyles.customBox}>
                                <Neomorph
                                    inner
                                    style={CommonStyles.customBoxInner}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column', top: 5 }}>
                                        <Text style={CommonStyles.txtSecondary}>5</Text>
                                        <Image source={line} style={CommonStyles.lineStyle}></Image>
                                    </View>
                                </Neomorph>
                            </Neomorph>
                            <Neomorph style={CommonStyles.customBox}>
                                <Neomorph
                                    inner
                                    style={CommonStyles.customBoxInner}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column', top: 5 }}>
                                        <Text style={CommonStyles.txtSecondary}>5</Text>
                                        <Image source={line} style={CommonStyles.lineStyle}></Image>
                                    </View>
                                </Neomorph>
                            </Neomorph>
                            <Neomorph style={CommonStyles.customBox}>
                                <Neomorph
                                    inner
                                    style={CommonStyles.customBoxInner}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column', top: 5 }}>
                                        <Text style={CommonStyles.txtSecondary}>5</Text>
                                        <Image source={line} style={CommonStyles.lineStyle}></Image>
                                    </View>
                                </Neomorph>
                            </Neomorph>
                            <Neomorph style={CommonStyles.customBox}>
                                <Neomorph
                                    inner
                                    style={CommonStyles.customBoxInner}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column', top: 5 }}>
                                        <Text style={CommonStyles.txtSecondary}>5</Text>
                                        <Image source={line} style={CommonStyles.lineStyle}></Image>
                                    </View>
                                </Neomorph>
                            </Neomorph>
                        </View>
                        {/* Submit button */}
                        <Neomorph
                            inner={false} // <- enable shadow inside of neomorph
                            swapShadows // <- change zIndex of each shadow color
                            style={CommonStyles.customButtonPrimary}
                        >
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('HomeScreen')}
                                style={{ paddingHorizontal: 100, paddingVertical: 10 }}>
                                <Text style={{ color: '#FFFFFF', fontFamily: 'Roboto-Medium', fontSize: 18 }}>Submit</Text>
                            </TouchableOpacity>
                        </Neomorph>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 25 }}>
                        <Text style={CommonStyles.txtPrimary}>Don't receive code?</Text>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('SplashScreen3')}
                            style={{ padding: 10 }}>
                            <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 12, color: '#512097' }}>Request again</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        );
    }
};
