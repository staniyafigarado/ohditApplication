import React, { Component } from 'react';
import { View, Text, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Shadow, Neomorph } from 'react-native-neomorph-shadows';
// import { CommonStyles } from '../../../src/SharedComponents/CustomStyles';
import LinearGradient from 'react-native-linear-gradient';
import { ExpenseStyle } from '../AddExpenseScreen/ExpenseStyle';
const back = require('../../../assets/icons/back.png');
const line = require('../../../assets/line.png');
const dropDown = require('../../../assets/icons/dropDown.png');

export default class AddExpense extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSelected: true,
        }
    }
    updateTitleStatus = () =>
        this.setState({
        }, () => {
            //this.ButtonState();
            if (this.state.isSelected == true) {
                this.setState({
                    isSelected: false
                });
            } else {
                this.setState({
                    isSelected: true
                });
            }
        });
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
                            onPress={() => this.props.navigation.navigate('AddProductScreen1')}
                            // onPress={() => { this.props.navigation.toggleDrawer(); }}
                            style={{ alignSelf: 'flex-start', alignSelf: 'center', padding: 10 }}>
                            <Image source={back} style={{ width: 18, height: 18 }}></Image>
                        </TouchableOpacity>
                        <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 20, color: '#FFFFFF', marginLeft: 20 }}>Add Product</Text>
                    </View>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
                    <View style={{ backgroundColor: '#F1F1F1', flex: 1, borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 20, alignItems: 'center' }}>
                        <Image source={line} style={{ width: 50, height: 5 }}></Image>
                        <View style={{ marginTop: 15, justifyContent: 'center', alignSelf: 'center', width: '100%', alignItems: 'center' }}>
                            <Neomorph
                                inner={false} // <- enable shadow inside of neomorph
                                swapShadows // <- change zIndex of each shadow color
                                style={{
                                    shadowRadius: 5,
                                    borderRadius: 7,
                                    backgroundColor: '#F1F1F1',
                                    width: 310,
                                    height: 178,
                                    justifyContent: 'center', marginTop: 20
                                }}
                            >
                                <View style={{ flexDirection: 'column', padding: 20 }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 12, color: '#101010' }}>Company Code : </Text>
                                        <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 12, color: '#101010' }}>10204</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                        <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 12, color: '#101010' }}>Invoice Date : </Text>
                                        <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 12, color: '#101010' }}>26th Sept 2020</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                        <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 12, color: '#101010' }}>Invoice No : </Text>
                                        <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 12, color: '#101010' }}>10204</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                        <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 12, color: '#101010' }}>Refference No : </Text>
                                        <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 12, color: '#101010' }}>1</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                        <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 12, color: '#101010' }}>Currency : </Text>
                                        <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 12, color: '#101010' }}>INR</Text>
                                    </View>
                                </View>
                            </Neomorph>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10, width: '100%', padding: 10 }}>
                            <View style={{ width: '70%', justifyContent: 'center' }}>
                                <Text style={{ fontFamily: 'Montserrat-SemiBold', fontSize: 22, color: '#101010' }}>Products</Text>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center', width: '30%', backgroundColor: '#512097', borderRadius: 5 }}>
                                <TouchableOpacity
                                    onPress={this.updateTitleStatus}
                                    style={{ paddingVertical: 10, paddingHorizontal: 20 }}>
                                    {this.state.isSelected ? <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 12, color: '#FFFFFF' }}>Amount</Text>

                                        : <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 12, color: '#FFFFFF' }}>Details</Text>

                                    }

                                </TouchableOpacity>
                            </View>
                        </View>
                        {/* product details */}
                        {this.state.isSelected ? <Neomorph
                            inner={false} // <- enable shadow inside of neomorph
                            swapShadows // <- change zIndex of each shadow color
                            style={{
                                shadowRadius: 5,
                                borderRadius: 7,
                                backgroundColor: '#F1F1F1',
                                width: 310,
                                height: 240,
                                justifyContent: 'center', marginTop: 12
                            }}
                        >
                            <View style={{ flexDirection: 'column' }}>
                                <View style={{ flexDirection: 'row', width: '100%' }}>
                                    <View style={{ width: '50%', justifyContent: 'center' }}>
                                        <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 14, color: '#101010', textAlign: 'center' }}>Product Name</Text>
                                    </View>
                                    <View style={{ width: '50%', justifyContent: 'center' }}>
                                        <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 14, color: '#101010', textAlign: 'center' }}>Decription</Text>
                                    </View>
                                </View>
                                <Image source={line} style={{ width: '100%', height: 2, marginTop: 10 }}></Image>
                                <View style={{ flexDirection: 'row', width: '100%', marginTop: 10 }}>
                                    <View style={{ width: '50%', justifyContent: 'center' }}>
                                        <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 14, color: '#101010', textAlign: 'center' }}>Product 1</Text>
                                    </View>
                                    <View style={{ width: '50%', justifyContent: 'center' }}>
                                        <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 12, color: '#101010', textAlign: 'center' }}>Lorem Ipsum</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', width: '100%', marginTop: 10 }}>
                                    <View style={{ width: '50%', justifyContent: 'center' }}>
                                        <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 14, color: '#101010', textAlign: 'center' }}>Product 1</Text>
                                    </View>
                                    <View style={{ width: '50%', justifyContent: 'center' }}>
                                        <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 12, color: '#101010', textAlign: 'center' }}>Lorem Ipsum</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', width: '100%', marginTop: 10 }}>
                                    <View style={{ width: '50%', justifyContent: 'center' }}>
                                        <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 14, color: '#101010', textAlign: 'center' }}>Product 1</Text>
                                    </View>
                                    <View style={{ width: '50%', justifyContent: 'center' }}>
                                        <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 12, color: '#101010', textAlign: 'center' }}>Lorem Ipsum</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', width: '100%', marginTop: 10 }}>
                                    <View style={{ width: '50%', justifyContent: 'center' }}>
                                        <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 14, color: '#101010', textAlign: 'center' }}>Product 1</Text>
                                    </View>
                                    <View style={{ width: '50%', justifyContent: 'center' }}>
                                        <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 12, color: '#101010', textAlign: 'center' }}>Lorem Ipsum</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', width: '100%', marginTop: 10 }}>
                                    <View style={{ width: '50%', justifyContent: 'center' }}>
                                        <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 14, color: '#101010', textAlign: 'center' }}>Product 1</Text>
                                    </View>
                                    <View style={{ width: '50%', justifyContent: 'center' }}>
                                        <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 12, color: '#101010', textAlign: 'center' }}>Lorem Ipsum</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', width: '100%', marginTop: 10 }}>
                                    <View style={{ width: '50%', justifyContent: 'center' }}>
                                        <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 14, color: '#101010', textAlign: 'center' }}>Total</Text>
                                    </View>
                                    <View style={{ width: '50%', justifyContent: 'center' }}>
                                        <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 12, color: '#101010', textAlign: 'center' }}></Text>
                                    </View>
                                </View>
                            </View>
                        </Neomorph>

                            : <Neomorph
                                inner={false} // <- enable shadow inside of neomorph
                                swapShadows // <- change zIndex of each shadow color
                                style={{
                                    shadowRadius: 5,
                                    borderRadius: 7,
                                    backgroundColor: '#F1F1F1',
                                    width: 310,
                                    height: 240,
                                    justifyContent: 'center', marginTop: 12
                                }}
                            >
                                <View style={{ flexDirection: 'column' }}>
                                    <View style={{ flexDirection: 'row', width: '100%' }}>
                                        <View style={{ width: '25%', justifyContent: 'center' }}>
                                            <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 14, color: '#101010', textAlign: 'center' }}>Amount</Text>
                                        </View>
                                        <View style={{ width: '25%', justifyContent: 'center' }}>
                                            <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 14, color: '#101010', textAlign: 'center' }}>IGST</Text>
                                        </View>
                                        <View style={{ width: '25%', justifyContent: 'center' }}>
                                            <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 14, color: '#101010', textAlign: 'center' }}>CGST</Text>
                                        </View>
                                        <View style={{ width: '25%', justifyContent: 'center' }}>
                                            <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 14, color: '#101010', textAlign: 'center' }}>CESS</Text>
                                        </View>
                                    </View>
                                    <Image source={line} style={{ width: '100%', height: 2, marginTop: 10 }}></Image>
                                    <View style={{ flexDirection: 'row', width: '100%', marginTop: 10 }}>
                                        <View style={{ width: '25%', justifyContent: 'center' }}>
                                            <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 12, color: '#101010', textAlign: 'center' }}>3124</Text>
                                        </View>
                                        <View style={{ width: '25%', justifyContent: 'center' }}>
                                            <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 12, color: '#101010', textAlign: 'center' }}>0.1</Text>
                                        </View>
                                        <View style={{ width: '25%', justifyContent: 'center' }}>
                                            <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 12, color: '#101010', textAlign: 'center' }}>0.2</Text>
                                        </View>
                                        <View style={{ width: '25%', justifyContent: 'center' }}>
                                            <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 12, color: '#101010', textAlign: 'center' }}>0.12</Text>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', width: '100%', marginTop: 10 }}>
                                        <View style={{ width: '25%', justifyContent: 'center' }}>
                                            <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 12, color: '#101010', textAlign: 'center' }}>3124</Text>
                                        </View>
                                        <View style={{ width: '25%', justifyContent: 'center' }}>
                                            <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 12, color: '#101010', textAlign: 'center' }}>0.1</Text>
                                        </View>
                                        <View style={{ width: '25%', justifyContent: 'center' }}>
                                            <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 12, color: '#101010', textAlign: 'center' }}>0.2</Text>
                                        </View>
                                        <View style={{ width: '25%', justifyContent: 'center' }}>
                                            <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 12, color: '#101010', textAlign: 'center' }}>0.12</Text>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', width: '100%', marginTop: 10 }}>
                                        <View style={{ width: '25%', justifyContent: 'center' }}>
                                            <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 12, color: '#101010', textAlign: 'center' }}>3124</Text>
                                        </View>
                                        <View style={{ width: '25%', justifyContent: 'center' }}>
                                            <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 12, color: '#101010', textAlign: 'center' }}>0.1</Text>
                                        </View>
                                        <View style={{ width: '25%', justifyContent: 'center' }}>
                                            <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 12, color: '#101010', textAlign: 'center' }}>0.2</Text>
                                        </View>
                                        <View style={{ width: '25%', justifyContent: 'center' }}>
                                            <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 12, color: '#101010', textAlign: 'center' }}>0.12</Text>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', width: '100%', marginTop: 10 }}>
                                        <View style={{ width: '25%', justifyContent: 'center' }}>
                                            <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 12, color: '#101010', textAlign: 'center' }}>3124</Text>
                                        </View>
                                        <View style={{ width: '25%', justifyContent: 'center' }}>
                                            <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 12, color: '#101010', textAlign: 'center' }}>0.1</Text>
                                        </View>
                                        <View style={{ width: '25%', justifyContent: 'center' }}>
                                            <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 12, color: '#101010', textAlign: 'center' }}>0.2</Text>
                                        </View>
                                        <View style={{ width: '25%', justifyContent: 'center' }}>
                                            <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 12, color: '#101010', textAlign: 'center' }}>0.12</Text>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', width: '100%', marginTop: 10 }}>
                                        <View style={{ width: '25%', justifyContent: 'center' }}>
                                            <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 12, color: '#101010', textAlign: 'center' }}>3124</Text>
                                        </View>
                                        <View style={{ width: '25%', justifyContent: 'center' }}>
                                            <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 12, color: '#101010', textAlign: 'center' }}>0.1</Text>
                                        </View>
                                        <View style={{ width: '25%', justifyContent: 'center' }}>
                                            <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 12, color: '#101010', textAlign: 'center' }}>0.2</Text>
                                        </View>
                                        <View style={{ width: '25%', justifyContent: 'center' }}>
                                            <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 12, color: '#101010', textAlign: 'center' }}>0.12</Text>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', width: '100%', marginTop: 20 }}>
                                        <View style={{ width: '25%', justifyContent: 'center' }}>
                                            <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 14, color: '#101010', textAlign: 'center' }}>5000</Text>
                                        </View>
                                        <View style={{ width: '25%', justifyContent: 'center' }}>
                                            <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 14, color: '#101010', textAlign: 'center' }}>0.5</Text>
                                        </View>
                                        <View style={{ width: '25%', justifyContent: 'center' }}>
                                            <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 14, color: '#101010', textAlign: 'center' }}>0.5</Text>
                                        </View>
                                        <View style={{ width: '25%', justifyContent: 'center' }}>
                                            <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 14, color: '#101010', textAlign: 'center' }}>0.5</Text>
                                        </View>
                                    </View>
                                </View>
                            </Neomorph>

                        }


                    </View>
                </ScrollView>
            </LinearGradient>
        );
    }
};

