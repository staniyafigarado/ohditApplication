import React, { Component } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { Shadow, Neomorph } from 'react-native-neomorph-shadows';
import { CommonStyles } from '../SharedComponents/CustomStyles';
export default class AlignItemsBasics extends Component {
    render() {
        return (
            <View style={CommonStyles.container}>
                <View style={{}}>
                    <Text style={{ color: '#6834B4', fontSize: 25, fontFamily: 'Montserrat-Bold', textAlign: 'center' }}>You will receive a 4 digit code</Text>
                </View>
                <View style={{ marginTop: 20, justifyContent: 'center', alignSelf: 'center', width: '100%', alignItems: 'center' }}>
                    <Neomorph style={CommonStyles.customInputWrapper}>
                        <Neomorph
                            inner
                            style={CommonStyles.customInput}>
                            <TextInput
                                keyboardType={'number-pad'}
                                style={CommonStyles.customTextInput}
                                placeholder={'Enter your number '}></TextInput>
                        </Neomorph>
                    </Neomorph>
                    <Neomorph
                        inner={false} // <- enable shadow inside of neomorph
                        swapShadows // <- change zIndex of each shadow color
                        style={CommonStyles.customButtonPrimary}
                    >
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('OtpScreen')}
                            style={{ paddingHorizontal: 90, paddingVertical: 10 }}>
                            <Text style={CommonStyles.buttonTxtPrimary}>Continue</Text>
                        </TouchableOpacity>
                    </Neomorph>
                </View>

            </View>
        );
    }
};
