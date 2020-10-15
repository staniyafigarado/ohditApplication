import React, { Component } from 'react';
import { View, Text, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Shadow, Neomorph } from 'react-native-neomorph-shadows';
import { CommonStyles } from '../../SharedComponents/CustomStyles';
import LinearGradient from 'react-native-linear-gradient';
import { ExpenseStyle } from './ExpenseStyle';
const back = require('../../../assets/icons/back.png');
const line = require('../../../assets/line.png');
const dropDown = require('../../../assets/icons/dropDown.png');

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
                            onPress={() => this.props.navigation.navigate('HomeScreen')}
                            // onPress={() => { this.props.navigation.toggleDrawer(); }}
                            style={{ alignSelf: 'flex-start', alignSelf: 'center', padding: 10 }}>
                            <Image source={back} style={{ width: 18, height: 18 }}></Image>
                        </TouchableOpacity>
                        <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 20, color: '#FFFFFF', marginLeft: 20 }}>Account</Text>
                    </View>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
                    <View style={{ backgroundColor: '#F1F1F1', flex: 1, borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 20, alignItems: 'center' }}>
                        <Image source={line} style={{ width: 50, height: 5 }}></Image>
                        <View style={{ marginTop: 15, justifyContent: 'center', alignSelf: 'center', width: '100%', alignItems: 'center' }}>
                            <Neomorph style={ExpenseStyle.customTextView}>
                                <Neomorph
                                    inner
                                    style={ExpenseStyle.customTextViewInner}>
                                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                                        <TextInput
                                            style={ExpenseStyle.customTextInput}
                                            placeholder={'Select Company Code'}></TextInput>
                                        <TouchableOpacity style={{ padding: 15, }}>
                                            <Image source={dropDown} style={{ width: 10, height: 5, }}></Image>
                                        </TouchableOpacity>
                                    </View>
                                </Neomorph>
                            </Neomorph>
                            <Neomorph style={ExpenseStyle.customTextView}>
                                <Neomorph
                                    inner
                                    style={ExpenseStyle.customTextViewInner}>
                                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                                        <TextInput
                                            style={ExpenseStyle.customTextInput}
                                            placeholder={'Invoice Date'}></TextInput>
                                        <TouchableOpacity style={{ padding: 15, }}>
                                            <Image source={dropDown} style={{ width: 10, height: 5, }}></Image>
                                        </TouchableOpacity>
                                    </View>
                                </Neomorph>
                            </Neomorph>
                            <Neomorph style={CommonStyles.customInputWrapper}>
                                <Neomorph
                                    inner
                                    style={CommonStyles.customInput}>
                                    <TextInput
                                        style={CommonStyles.customTextInput}
                                        placeholder={'Invoice Number '}></TextInput>
                                </Neomorph>
                            </Neomorph>
                            <Neomorph style={ExpenseStyle.customTextView}>
                                <Neomorph
                                    inner
                                    style={ExpenseStyle.customTextViewInner}>
                                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                                        <TextInput
                                            style={ExpenseStyle.customTextInput}
                                            placeholder={'Select Vendor Account'}></TextInput>
                                        <TouchableOpacity style={{ padding: 15, }}>
                                            <Image source={dropDown} style={{ width: 10, height: 5, }}></Image>
                                        </TouchableOpacity>
                                    </View>
                                </Neomorph>
                            </Neomorph>
                            <Neomorph style={CommonStyles.customInputWrapper}>
                                <Neomorph
                                    inner
                                    style={CommonStyles.customInput}>
                                    <TextInput
                                        style={CommonStyles.customTextInput}
                                        placeholder={'Refference No '}></TextInput>
                                </Neomorph>
                            </Neomorph>
                            <Neomorph style={ExpenseStyle.customTextView}>
                                <Neomorph
                                    inner
                                    style={ExpenseStyle.customTextViewInner}>
                                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                                        <TextInput
                                            style={ExpenseStyle.customTextInput}
                                            placeholder={'Currency'}></TextInput>
                                        <TouchableOpacity style={{ padding: 15, }}>
                                            <Image source={dropDown} style={{ width: 10, height: 5, }}></Image>
                                        </TouchableOpacity>
                                    </View>
                                </Neomorph>
                            </Neomorph>
                            <Neomorph style={CommonStyles.customInputWrapper}>
                                <Neomorph
                                    inner
                                    style={CommonStyles.customInput}>
                                    <TextInput
                                        style={CommonStyles.customTextInput}
                                        placeholder={'Remarks '}></TextInput>
                                </Neomorph>
                            </Neomorph>
                            <Neomorph
                                inner={false} // <- enable shadow inside of neomorph
                                swapShadows // <- change zIndex of each shadow color
                                style={CommonStyles.customButtonPrimary}
                            >
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('AddProductDetailsScreen')}
                                    style={{ paddingVertical: 10, paddingHorizontal: 110 }}>
                                    <Text style={{ color: '#FFFFFF', fontFamily: 'Roboto-Medium', fontSize: 16 }}>Submit</Text>
                                </TouchableOpacity>
                            </Neomorph>
                        </View>
                    </View>
                </ScrollView>
            </LinearGradient>
        );
    }
};
