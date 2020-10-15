import React, { Component } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { Shadow, Neomorph } from 'react-native-neomorph-shadows';
import { CommonStyles } from '../SharedComponents/CustomStyles';
export default class AlignItemsBasics extends Component {
    render() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#F1F1F1' }}>
                <View style={CommonStyles.container}>
                    <View style={{ marginTop: 90 }}>
                        <Text style={{ color: '#6834B4', fontSize: 25, fontFamily: 'Montserrat-Bold', textAlign: 'center' }}>Sign In</Text>
                    </View>
                    <View style={{ marginTop: 30, justifyContent: 'center', alignSelf: 'center', width: '100%', alignItems: 'center' }}>
                        <Neomorph style={CommonStyles.customInputWrapper}>
                            <Neomorph
                                inner
                                style={CommonStyles.customInput}>
                                <TextInput
                                    style={CommonStyles.customTextInput}
                                    placeholder={'Email address'}></TextInput>
                            </Neomorph>
                        </Neomorph>
                        <Neomorph style={CommonStyles.customInputWrapper}>
                            <Neomorph
                                inner
                                style={CommonStyles.customInput}>
                                <TextInput
                                    style={CommonStyles.customTextInput}
                                    placeholder={'Password.'}></TextInput>
                            </Neomorph>
                        </Neomorph>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('ResetLinkScreen')}
                            style={{ padding: 5, alignSelf: 'flex-end', marginTop: 5 }}>
                            <Text style={{
                                fontFamily: 'Roboto-Regular', color: '#9B9B9B',
                                marginRight: 15
                            }}>Forgot password</Text>
                        </TouchableOpacity>
                        <Neomorph
                            inner={false} // <- enable shadow inside of neomorph
                            swapShadows // <- change zIndex of each shadow color
                            style={CommonStyles.customButtonPrimary}
                        >
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('HomeScreen')}
                                style={{ paddingVertical: 10, paddingHorizontal: 110 }}>
                                <Text style={{ color: '#FFFFFF', fontFamily: 'Roboto-Medium', fontSize: 18 }}>Sign In</Text>
                            </TouchableOpacity>
                        </Neomorph>

                        <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'center', alignItems: 'center' }}>
                            <Neomorph
                                darkShadowColor="#E5E5E5"
                                lightShadowColor="#E5E5E5"
                                style={{
                                    shadowOpacity: 5,
                                    shadowRadius: 2,
                                    borderRadius: 25,
                                    backgroundColor: '#F1F1F1',
                                    width: 130,
                                    height: 4,
                                }}
                            />
                            <Text style={{ textAlign: 'center', marginHorizontal: 20, fontFamily: 'Roboto-Medium' }}>OR</Text>
                            <Neomorph
                                darkShadowColor="#E5E5E5"
                                lightShadowColor="#E5E5E5"
                                style={{
                                    shadowOpacity: 5,
                                    shadowRadius: 2,
                                    borderRadius: 25,
                                    backgroundColor: '#F1F1F1',
                                    width: 130,
                                    height: 4,
                                }}
                            />
                        </View>
                        <Neomorph
                            inner={false} // <- enable shadow inside of neomorph
                            swapShadows // <- change zIndex of each shadow color
                            style={CommonStyles.customButtonSecondary}
                        >
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('SplashScreen3')}
                                style={{ paddingHorizontal: 80, paddingVertical: 10 }}>
                                <Text style={CommonStyles.buttonTxtSecondary}>Sign in with OTP</Text>
                            </TouchableOpacity>

                        </Neomorph>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
                        <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 12 }}>Do not have an account?</Text>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('RegisterScreen')}
                            style={{ padding: 10 }}>
                            <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 12, color: '#512097' }}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        );
    }
};
