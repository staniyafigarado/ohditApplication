import React, { Component } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { Shadow, Neomorph } from 'react-native-neomorph-shadows';
import { CommonStyles } from '../SharedComponents/CustomStyles';
export default class AlignItemsBasics extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#F1F1F1' }}>

                <Text style={{ color: '#6834B4', fontSize: 25, fontFamily: 'Montserrat-Bold', textAlign: 'center', marginBottom: 5 }}>Reset Password</Text>
                <Text style={CommonStyles.txtPrimary}>You will receive a reset link to your email address</Text>

                <View style={{ marginTop: 10, justifyContent: 'center', alignSelf: 'center', width: '100%', alignItems: 'center' }}>

                    <Neomorph style={CommonStyles.customInputWrapper}>
                        <Neomorph
                            inner
                            style={CommonStyles.customInput}>
                            <TextInput
                                style={CommonStyles.customTextInput}
                                placeholder={'Confirm Password '}></TextInput>
                        </Neomorph>
                    </Neomorph>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ResetPasswordScreen')}>
                        <Neomorph
                            inner={false} // <- enable shadow inside of neomorph
                            swapShadows // <- change zIndex of each shadow color
                            style={CommonStyles.customButtonPrimary}
                        >
                            <Text style={CommonStyles.buttonTxtPrimary}>Send Reset Link</Text>
                        </Neomorph>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
};
