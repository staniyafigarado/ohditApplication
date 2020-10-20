import React, { Component } from 'react';
import { View, Text, TextInput, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Shadow, Neomorph } from 'react-native-neomorph-shadows';
import { CommonStyles } from '../SharedComponents/CustomStyles';
import LinearGradient from 'react-native-linear-gradient';
import ModalStyle from './CustomModel';
import Modal from 'react-native-modal';
const menu = require('../../assets/icons/menuIcon.png');
const dashboardIcon = require('../../assets/icons/dashboardIcon.png');
const line = require('../../assets/line.png');
const compIcon = require('../../assets/icons/companyIcon.png');
const hand = require('../../assets/icons/handshake.png');
const account = require('../../assets/icons/account.png');
const close = require('../../assets/icons/closeWhite.png');
const dot1 = require('../../assets/icons/dotIcon1.png');
const dot2 = require('../../assets/icons/dotIcon2.png');
const dot3 = require('../../assets/icons/dotIcon3.png');
const compImg = require('../../assets/compImg.png');
const incopImg = require('../../assets/IncopImg.png');
const accountImg = require('../../assets/accountImg.png');
const { width, height } = Dimensions.get('window');
export default class AlignItemsBasics extends Component {
    state = {
        isModalVisible: false,
        count: 1
    };
    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };
    increment() {
        this.setState({
            count: this.state.count + 1
        });

    };

    decrement() {
        this.setState({
            count: this.state.count - 1
        });
    };
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
                        <View style={{ alignSelf: 'flex-end', paddingTop: -5, bottom: 10 }}>
                            <Image source={dashboardIcon} style={{ width: 17.3, height: 17.3 }}></Image>
                        </View>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={CommonStyles.MonB24CD}>Hello, John</Text>
                        <Text style={{ fontFamily: 'Montserrat-Bold', fontSize: 24, color: '#FFFFFF', opacity: 0.7 }} >Talk to our assistant</Text>
                        <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 14, color: '#FFFFFF', opacity: 0.5 }}>ask anything</Text>
                        <TouchableOpacity
                            // onPress={() => this.props.navigation.navigate('Modal')}
                            onPress={() => this.toggleModal()}
                            style={{ backgroundColor: '#F1F1F1', width: 144, height: 40, borderRadius: 20, justifyContent: 'center', marginTop: 15 }}>
                            <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 14, color: '#101010', textAlign: 'center' }}>Get Started</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ backgroundColor: '#F1F1F1', flex: 1, borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 20, alignItems: 'center' }}>
                    <Image source={line} style={{ width: 50, height: 5 }}></Image>
                    <Text style={{ fontFamily: 'Montserrat-SemiBold', fontSize: 22, alignSelf: 'flex-start', color: '#101010', marginTop: 10 }}>Heading</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ChatBoat')}>
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
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ChatBoat')}>
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
                    </TouchableOpacity>
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
                    {/* Custom Modal */}
                    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                        <Modal isVisible={this.state.isModalVisible}>
                            <View style={{
                                justifyContent: 'center',
                                alignItems: 'center'
                            }} >
                                <View style={{ backgroundColor: '#6834B4', height: height * 0.65, borderRadius: 10, width: width * 0.95 }}>
                                    <View style={{ alignItems: 'center', flexDirection: 'row', padding: 20, width: '100%' }}>
                                        <View style={{ width: '90%', flexDirection: 'row' }}>
                                            <Text style={{
                                                fontFamily: 'Roboto-Medium',
                                                fontSize: 14,
                                                color: '#FFFFFF'
                                            }}>{this.state.count}</Text>
                                            <Text style={{
                                                fontFamily: 'Roboto-Medium',
                                                fontSize: 14,
                                                color: '#FFFFFF'
                                            }}> / 3</Text>
                                        </View>
                                        <View>
                                            <TouchableOpacity onPress={() => this.toggleModal()} style={{ padding: 10 }}>
                                                <Image source={close} style={{ width: 17, height: 17, }}></Image>
                                            </TouchableOpacity>
                                        </View>
                                    </View>

                                    {this.state.count == 1 ? <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                        <View style={{ width: '100%', height: '50%' }}>
                                            <Image source={compImg} style={{
                                                width: 250, height: 146,
                                                alignSelf: 'center'
                                            }}></Image>
                                        </View>
                                        <Text style={{
                                            fontFamily: 'Montserrat-Bold',
                                            fontSize: 18, color: '#FFFFFF',
                                            textAlign: 'center'
                                        }}>Company Registration</Text>
                                        <Text style={{
                                            fontFamily: 'Roboto-Regular',
                                            fontSize: 12, color: '#FFFFFF',
                                            textAlign: 'center', padding: 20
                                        }}>Lorem ipsum dolor sit amet, consetetur
                                            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                             dolore magna aliquyam erat, sed diam</Text>
                                        <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', height: '10%' }}>
                                            <TouchableOpacity
                                                //  onPress={() => this.decrement()}
                                                style={{ padding: 20 }}>
                                                <Text style={{
                                                    fontFamily: 'Roboto-Medium',
                                                    fontSize: 14,
                                                    color: '#FFFFFF', textAlign: 'center', opacity: 0.5
                                                }}>Prev</Text>
                                            </TouchableOpacity>
                                            <View style={{ width: 210, alignItems: 'center' }}>
                                                <Image source={dot1} style={{ width: 24, height: 6 }}></Image>
                                            </View>
                                            <TouchableOpacity onPress={() => this.increment()}
                                                style={{ padding: 20 }}>
                                                <Text style={{
                                                    fontFamily: 'Roboto-Medium',
                                                    fontSize: 14,
                                                    color: '#FFFFFF', textAlign: 'center'
                                                }}>Next</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>

                                        : this.state.count == 2 ? <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                            <View style={{ width: '100%', height: '50%' }}>
                                                <Image source={incopImg} style={{
                                                    width: 178, height: 168,
                                                    alignSelf: 'center'
                                                }}></Image>
                                            </View>
                                            <Text style={{
                                                fontFamily: 'Montserrat-Bold',
                                                fontSize: 18, color: '#FFFFFF',
                                                textAlign: 'center'
                                            }}>Incorporation</Text>
                                            <Text style={{
                                                fontFamily: 'Roboto-Regular',
                                                fontSize: 12, color: '#FFFFFF',
                                                textAlign: 'center', padding: 20
                                            }}>Lorem ipsum dolor sit amet, consetetur
                                                sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                             dolore magna aliquyam erat, sed diam</Text>
                                            <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', height: '10%' }}>
                                                <TouchableOpacity onPress={() => this.decrement()}
                                                    style={{ padding: 20 }}>
                                                    <Text style={{
                                                        fontFamily: 'Roboto-Medium',
                                                        fontSize: 14,
                                                        color: '#FFFFFF', textAlign: 'center'
                                                    }}>Prev</Text>
                                                </TouchableOpacity>
                                                <View style={{ width: 210, alignItems: 'center' }}>
                                                    <Image source={dot2} style={{ width: 24, height: 6 }}></Image>
                                                </View>
                                                <TouchableOpacity onPress={() => this.increment()}
                                                    style={{ padding: 20 }}>
                                                    <Text style={{
                                                        fontFamily: 'Roboto-Medium',
                                                        fontSize: 14,
                                                        color: '#FFFFFF', textAlign: 'center'
                                                    }}>Next</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View> : <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                <View style={{ width: '100%', height: '50%' }}>
                                                    <Image source={accountImg} style={{
                                                        width: 169, height: 160,
                                                        alignSelf: 'center', marginVertical: 13
                                                    }}></Image>
                                                </View>
                                                <Text style={{
                                                    fontFamily: 'Montserrat-Bold',
                                                    fontSize: 18, color: '#FFFFFF',
                                                    textAlign: 'center'
                                                }}>Accounts</Text>
                                                <Text style={{
                                                    fontFamily: 'Roboto-Regular',
                                                    fontSize: 12, color: '#FFFFFF',
                                                    textAlign: 'center', padding: 20
                                                }}>Lorem ipsum dolor sit amet, consetetur
                                                    sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                             dolore magna aliquyam erat, sed diam</Text>
                                                <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', height: '10%' }}>
                                                    <TouchableOpacity onPress={() => this.decrement()}
                                                        style={{ padding: 20 }}>
                                                        <Text style={{
                                                            fontFamily: 'Roboto-Medium',
                                                            fontSize: 14,
                                                            color: '#FFFFFF', textAlign: 'center'
                                                        }}>Prev</Text>
                                                    </TouchableOpacity>
                                                    <View style={{ width: 210, alignItems: 'center' }}>
                                                        <Image source={dot3} style={{ width: 24, height: 6 }}></Image>
                                                    </View>
                                                    <TouchableOpacity onPress={() => this.toggleModal()}
                                                        style={{ padding: 20 }}>
                                                        <Text style={{
                                                            fontFamily: 'Roboto-Medium',
                                                            fontSize: 14,
                                                            color: '#FFFFFF', textAlign: 'center'
                                                        }}>Next</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                    }
                                </View>
                            </View>
                        </Modal>
                    </View>
                </View>

            </LinearGradient>
        );
    }
};
