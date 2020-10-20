import React, { Component } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Shadow, Neomorph } from 'react-native-neomorph-shadows';
import { CommonStyles } from '../SharedComponents/CustomStyles';
export default class AlignItemsBasics extends Component {
    render() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#F1F1F1' }}>
                <View style={CommonStyles.container}>
                    <View style={{ marginTop: 70 }}>
                        <Text style={{ color: '#6834B4', fontSize: 25, fontFamily: 'Montserrat-Bold', textAlign: 'center' }}>Create an account</Text>
                    </View>
                    <View style={{ marginTop: 20, justifyContent: 'center', alignSelf: 'center', width: '100%', alignItems: 'center' }}>
                        <Neomorph style={CommonStyles.customInputWrapper}>
                            <Neomorph
                                inner
                                style={CommonStyles.customInput}>
                                <TextInput
                                    style={CommonStyles.customTextInput}
                                    placeholder={'Name '}></TextInput>
                            </Neomorph>
                        </Neomorph>
                        <Neomorph style={CommonStyles.customInputWrapper}>
                            <Neomorph
                                inner
                                style={CommonStyles.customInput}>
                                <TextInput
                                    style={CommonStyles.customTextInput}
                                    placeholder={'Mobile Number '}
                                    keyboardType={'number-pad'}></TextInput>
                            </Neomorph>
                        </Neomorph>
                        <Neomorph style={CommonStyles.customInputWrapper}>
                            <Neomorph
                                inner
                                style={CommonStyles.customInput}>
                                <TextInput
                                    style={CommonStyles.customTextInput}
                                    placeholder={'Password '}></TextInput>
                            </Neomorph>
                        </Neomorph>
                        <Neomorph style={CommonStyles.customInputWrapper}>
                            <Neomorph
                                inner
                                style={CommonStyles.customInput}>
                                <TextInput
                                    style={CommonStyles.customTextInput}
                                    placeholder={'Confirm Password '}></TextInput>
                            </Neomorph>
                        </Neomorph>
                        <Neomorph
                            inner={false} // <- enable shadow inside of neomorph
                            swapShadows // <- change zIndex of each shadow color
                            style={CommonStyles.customButtonPrimary}
                        >
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('SigninScreen')}
                                style={{ paddingVertical: 10, paddingHorizontal: 100 }}>
                                <Text style={CommonStyles.buttonTxtPrimary}>Register</Text>
                            </TouchableOpacity>
                        </Neomorph>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
                        <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 12 }}>Already registered?</Text>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('SigninScreen')}
                            style={{ padding: 7 }}>
                            <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 12, color: '#512097' }}>sign In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        );
    }
};
