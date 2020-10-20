import React, { Component } from 'react';
import { Button, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
const close = require('../../../assets/icons/closeAsh.png');
const dot1 = require('../../../assets/icons/dotIcon1.png');
const dot2 = require('../../../assets/icons/dotIcon2.png');
const dot3 = require('../../../assets/icons/dotIcon3.png');
const compImg = require('../../../assets/compImg.png');
const incopImg = require('../../../assets/IncopImg.png');
const accountImg = require('../../../assets/accountImg.png');
// import style from '../CustomModel/ModalStyles';
export default class ModalTester extends Component {
    state = {
        isModalVisible: true,
        count: 1
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


    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Modal isVisible={this.state.isModalVisible}>
                    <View style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }} >
                        <View style={{ backgroundColor: '#F1F1F1', width: 351, height: 309, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity style={{ padding: 10, alignSelf: 'flex-end', bottom: 30 }}>
                                <Image source={close} style={{ width: 16, height: 16 }}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('AddExpenseScreen')}
                                style={{ width: 291, height: 50, backgroundColor: '#512097', justifyContent: 'center', borderRadius: 7 }}>
                                <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 16, color: '#FFFFFF', textAlign: 'center' }}>Add Expense</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: 291, height: 50, backgroundColor: '#512097', justifyContent: 'center', marginTop: 15, borderRadius: 7 }}>
                                <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 16, color: '#FFFFFF', textAlign: 'center' }}>View Expense</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: 291, height: 50, borderColor: '#512097', borderWidth: 1, justifyContent: 'center', marginTop: 15, borderRadius: 7 }}>
                                <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 16, color: '#512097', textAlign: 'center' }}>Others</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View >
        );
    }
}