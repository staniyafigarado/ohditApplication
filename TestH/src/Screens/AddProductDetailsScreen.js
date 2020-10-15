import React, { Component } from 'react';
import { View, Text, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Shadow, Neomorph } from 'react-native-neomorph-shadows';
import { CommonStyles } from '../SharedComponents/CustomStyles';
import LinearGradient from 'react-native-linear-gradient';
import { ExpenseStyle } from './AddExpenseScreen/ExpenseStyle';
const back = require('../../assets/icons/back.png');
const line = require('../../assets/line.png');
const dropDown = require('../../assets/icons/dropDown.png');

export default class AddExpense extends Component {

    render() {
        // const { navigate } = this.props.navigation;
        return (
            <LinearGradient
                useAngle={true}
                angle={90}
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                colors={['#6834b4', '#512097']} style={{ flex: 1 }}>
                <View style={{ padding: 20 }}>
                    <View style={ExpenseStyle.headerStyle}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('AddExpenseScreen')}
                            style={{ alignSelf: 'flex-start', alignSelf: 'center', padding: 10 }}>
                            <Image source={back} style={{ width: 18, height: 18 }}></Image>
                        </TouchableOpacity>
                        <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 20, color: '#FFFFFF', marginLeft: 20 }}>Add Product</Text>
                    </View>
                </View>
                <View style={{ backgroundColor: '#F1F1F1', flex: 1, borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 20, alignItems: 'center' }}>
                    <Image source={line} style={{ width: 50, height: 5 }}></Image>
                    <View style={{ marginTop: 15, justifyContent: 'center', alignSelf: 'center', width: '100%', alignItems: 'center' }}>
                        <Neomorph style={CommonStyles.customInputWrapper}>
                            <Neomorph
                                inner
                                style={CommonStyles.customInput}>
                                <TextInput
                                    style={CommonStyles.customTextInput}
                                    placeholder={'Product Name '}></TextInput>
                            </Neomorph>
                        </Neomorph>
                        <Neomorph style={CommonStyles.customInputWrapper}>
                            <Neomorph
                                inner
                                style={CommonStyles.customInput}>
                                <TextInput
                                    style={CommonStyles.customTextInput}
                                    placeholder={'Description '}></TextInput>
                            </Neomorph>
                        </Neomorph>
                        <Neomorph style={CommonStyles.customInputWrapper}>
                            <Neomorph
                                inner
                                style={CommonStyles.customInput}>
                                <TextInput
                                    style={CommonStyles.customTextInput}
                                    placeholder={'Amount '}></TextInput>
                            </Neomorph>
                        </Neomorph>
                        <Neomorph
                            inner={false} // <- enable shadow inside of neomorph
                            swapShadows // <- change zIndex of each shadow color
                            style={CommonStyles.customButtonPrimary}
                        >
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('AddProductScreen1')}
                                style={{ paddingVertical: 10, paddingHorizontal: 110 }}>
                                <Text style={{ color: '#FFFFFF', fontFamily: 'Roboto-Medium', fontSize: 16 }}>Add Product</Text>
                            </TouchableOpacity>
                        </Neomorph>
                    </View>
                </View>
            </LinearGradient>
        );
    }
};
