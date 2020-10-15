import React, { useState, useCallback } from 'react';
import { View, Text, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native';
import { ExpenseStyle } from './src/Screens/AddExpenseScreen/ExpenseStyle';
import { GiftedChat, Bubble, Send } from 'react-native-gifted-chat';
import LinearGradient from 'react-native-linear-gradient';
const character1 = require('./assets/icons/character.png');
const back = require('./assets/icons/back.png');
const line = require('./assets/line.png');
export default function RoomScreen() {
    function renderBubble(props) {
        return (
            // Step 3: return the component
            <Bubble
                {...props}
                wrapperStyle={{
                    right: {
                        // Here is the color change
                        backgroundColor: '#6834B4',
                    }
                }}
                textStyle={{
                    right: {
                        color: '#fff',
                        fontFamily: 'Roboto-Regular', fontSize: 14
                    },
                    left: {
                        fontFamily: 'Roboto-Regular', fontSize: 14
                    }
                }}
            />
        );
    }
    const [messages, setMessages] = useState([
        /**
         * Mock message data
         */
        // example of system message
        {
            _id: 1,
            user: {
                _id: 2,
                avatar: character1,
            },
        },
        {
            _id: 2,
            text: 'Choose any option',
            createdAt: new Date(),
            avatar: character1,
            quickReplies: {
                type: 'radio', // or 'checkbox',
                keepIt: true,
                values: [
                    {
                        title: 'Add New Details',
                        value: 'add',
                    },
                    {
                        title: 'View Your Details',
                        value: 'view',
                    },
                ],
            }

        },
        {
            _id: 3,
            user: {
                _id: 2,
                avatar: character1,
            },
        },
        {
            _id: 4,
            text: 'Do you want to register a new company or not ?',
            createdAt: new Date(),
            avatar: character1,
            quickReplies: {
                type: 'radio', // or 'checkbox',
                keepIt: true,
                values: [
                    {
                        title: 'Yes',
                        value: 'yes',
                    },
                    {
                        title: 'No',
                        value: 'no',
                    },
                ],
            }

        },
        {
            _id: 5,
            user: {
                _id: 2,
                avatar: character1,
            },
        },
        {
            _id: 6,
            text: 'Weclome to Ohdit account section',
            user: {
                _id: 2,
            },
        }, {
            _id: 7,
            text: 'Hello',
            createdAt: new Date(),
            user: {
                _id: 2,
            },
        },
    ]);

    // helper method that is sends a message
    function handleSend(newMessage = []) {
        setMessages(GiftedChat.append(messages, newMessage));
    }
    const onSend = useCallback((messages = []) => {
        setMessages((previousMessages) =>
            GiftedChat.append(previousMessages, messages)
        );
    }, []);

    // onQuickReply = (quickReply = []) => {
    //   // when user taps quick Replies
    //   quickReply.forEach((message) => {
    //     if (message.value === 'Add new details') {
    //       this.props.navigation.navigate('AddNew', {
    //         CompanyCode: this.state.SelectCompanyCode,
    //       });
    //     }
    //     if (message.value === 'View your details') {
    //       this.props.navigation.navigate('ViewExpence', {
    //         // userId: this.state.UserCredentials.UserId,
    //         CompanyCode: this.state.SelectCompanyCode,
    //       });
    //     }
    //     const messages = [
    //       {
    //         text: message.title,
    //         _id: IdGenerator(), // custom id generator
    //         createdAt: new Date(Date.now()),
    //         user: { _id: 1 },
    //       },
    //     ];
    //     this.onSend(messages);
    //   });
    // };

    return (
        <LinearGradient
            useAngle={true}
            angle={90}
            start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
            colors={['#6834b4', '#512097']} style={{ flex: 1 }}>
            <View style={{ padding: 20 }}>
                <View style={ExpenseStyle.headerStyle}>
                    <TouchableOpacity
                        // onPress={() => { this.props.navigation.toggleDrawer(); }}
                        style={{ alignSelf: 'flex-start', alignSelf: 'center', padding: 10 }}>
                        <Image source={back} style={{ width: 18, height: 18 }}></Image>
                    </TouchableOpacity>
                    <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 20, color: '#FFFFFF', marginLeft: 20 }}>Add Product</Text>
                </View>
            </View>
            <View style={{ backgroundColor: '#F1F1F1', flex: 1, borderTopLeftRadius: 30, borderTopRightRadius: 30, }}>
                <Image source={line} style={{ width: 50, height: 5, alignSelf: 'center' }}></Image>
                <View style={{ flex: 1 }}>
                    <GiftedChat
                        messages={messages}
                        onSend={(messages) => onSend(messages)}
                        user={{ _id: 1 }}
                        renderBubble={renderBubble}
                        showUserAvatar
                    // onQuickReply={this.onQuickReply}
                    />
                </View>
            </View>

        </LinearGradient>
    );
}