import React, { Component } from 'react';
import { View, Text, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Shadow, Neomorph } from 'react-native-neomorph-shadows';
import { CommonStyles } from '../SharedComponents/CustomStyles';
const email = require('../../assets/email.png');
export default class ResetPassword extends Component {
    constructor() {
        super();
        this.state = {
            isVisible: true,
        }
    }
    Hide_Splash_Screen = () => {
        this.setState({
            isVisible: false
        });
    }

    componentDidMount() {
        var that = this;
        setTimeout(function () {
            that.Hide_Splash_Screen();
        }, 3000);
    }
    render() {
        let Splash_Screen = (
            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#F1F1F1', width: '100%', padding: 10 }}>

                <Text style={{ color: '#6834B4', fontSize: 25, fontFamily: 'Montserrat-Bold', textAlign: 'center', marginBottom: 5 }}>Reset Link Has Been Sent</Text>
                <Text style={CommonStyles.txtPrimary}>You will receive a reset link to your email address</Text>
                <Image source={email} style={{ width: '100%', height: 230, alignSelf: 'center' }}></Image>
            </View>)
        return (
            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#F1F1F1' }}>
                {
                    (this.state.isVisible === true) ? Splash_Screen : <View>
                        <Text style={{ color: '#6834B4', fontSize: 25, fontFamily: 'Montserrat-Bold', textAlign: 'center', marginBottom: 5 }}>Reset Password</Text>
                        <Text style={CommonStyles.txtPrimary}>Enter Your New Password</Text>

                        <View style={{ marginTop: 10, justifyContent: 'center', alignSelf: 'center', width: '100%', alignItems: 'center' }}>

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
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('SigninScreen')}>
                                <Neomorph
                                    inner={false} // <- enable shadow inside of neomorph
                                    swapShadows // <- change zIndex of each shadow color
                                    style={CommonStyles.customButtonPrimary}
                                >
                                    <Text style={CommonStyles.buttonTxtPrimary}>Reset Password</Text>
                                </Neomorph>
                            </TouchableOpacity>
                        </View>

                    </View>

                }

            </View>
        );
    }
};
