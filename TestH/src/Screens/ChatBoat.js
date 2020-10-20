import React from 'react';
import {
    StyleSheet,
    View,
    ToastAndroid,
    Text,
    Dimensions,
    BackHandler,
    SafeAreaView, Image, TouchableOpacity
} from 'react-native';
import { GiftedChat, Send, MessageImage, Bubble } from 'react-native-gifted-chat';
import { DirectLine } from 'asksuite-botframework-directlinejs';
import AsyncStorage from '@react-native-community/async-storage';
// import DocumentPicker from 'react-native-document-picker';
import Icons from 'react-native-vector-icons/Ionicons';
import { IdGenerator } from '../SharedComponents/CustomElements';
// import CustomModal from '../SharedComponents/Modal';
import axios from 'axios';
import { ExpenseStyle } from '../Screens/AddExpenseScreen/ExpenseStyle';
import LinearGradient from 'react-native-linear-gradient';
const character1 = require('../../assets/icons/character.png');
const back = require('../../assets/icons/back.png');
const line = require('../../assets/line.png');
const { height, width } = Dimensions.get('window');
const botMessageToGiftedMessage = (botMessage) => ({
    // messege from chatBot passed to giftedMessage chatting
    ...botMessage,
    _id: botMessage.id,
    createdAt: botMessage.timestamp, // time
    user: {
        _id: 2, //chatt is spitted in the view using this id
        name: 'React Native',
        avatar:
            'https://cdn.iconscout.com/public/images/icon/free/png-512/avatar-user-business-man-399587fe24739d5a-512x512.png',
    },
    quickReplies: {
        // used to show some suggetions from chatBot to giftedchat
        type: 'radio', // or 'checkbox',
        keepIt: false,
        values: botMessage.suggestedActions
            ? botMessage.suggestedActions.actions
            : [],
    },
});
function giftedMessageToBotMessage(message, User) {
    // parms to Botmessenger
    return {
        from: { id: '123', name: 'bfmhg' },
        type: 'message',
        text: message.text,
    };
}

function renderSend(props) {
    //custom sendButton
    return (
        <Send {...props}>
            <View
                style={{
                    height: '100%',
                    width: 70,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <Icons
                    name="paper-plane-sharp"
                    color="blue"
                    size={26}
                    style={{
                        transform: [{ rotate: '45deg' }],
                    }}
                />
            </View>
        </Send>
    );
}
function renderBubble(props) {
    // custom Messagecontainer Style
    return (
        <Bubble
            {...props}
            wrapperStyle={{
                right: {
                    backgroundColor: '#6834B4',
                    borderRadius: 10
                },
                left: {
                    borderRadius: 10, backgroundColor: '#6834B4'
                },
            }}
            textStyle={{
                right: {
                    color: '#fff',
                    fontFamily: 'Roboto-Regular', fontSize: 14
                },
                left: {
                    fontFamily: 'Roboto-Regular', fontSize: 14, color: 'white'
                }
            }}
        />
    );
}

export default class OhditAccount extends React.Component {
    constructor(props) {
        super(props);
        this.directLine = new DirectLine({
            // chatbotDirectline secretKey Access
            secret: 'Z7xtTQBYGMQ.h1DEEh9KQjeeEhGLyhnDlg9d5Ln2U2-Prbkqhfu-eZ8',
        });
        this.id = 0;
        this.state = {
            messages: [],
            UserCredentials: '',
            isTyping: false,
            pickedImage: [],
            botText: '',
            loadIndicator: false,
            isModalVisible: false,
            SelectCompanyCode: [],
        };
        this.directLine.activity$.subscribe((botMessage) => {
            //initialize chats from botmessage
            const newMessage = botMessageToGiftedMessage(botMessage);
            // if (botMessage.text.includes('Your Company code is')) {
            //     this.GetCompanyCode();
            // }
            console.warn('gfchgvjbk', botMessage);

            const mapedData = this.state.botText !== botMessage.text;
            if (mapedData) {
                // to filter repetition of message, eg: when user send hi, bot also send hi messge as reply
                this.setState({ messages: [newMessage, ...this.state.messages] });
            } else {
                this.setState({ messages: [...this.state.messages] });
            }
        });
    }

    renderMessageImage(props) {
        // custome Image send
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <MessageImage
                    {...props}
                    source={{ uri: props.currentMessage.image }}
                    containerStyle={{ justifyContent: 'center', alignItems: 'center' }}
                />
                {/* {props.currentMessage.image == '' && (
          <MaterialIndicator
            size={30}
            color="white"
            style={{position: 'absolute', alignSelf: 'center'}}
          />
        )} */}
            </View>
        );
    }
    componentDidMount = () => {
        this.props.navigation.addListener('focus', () => {
            this.componentDidMount();
        });
        this.UserIdAsyncRetrieve();
        this.initialMessage();
    };

    initialMessage = async () => {
        const initialMessage = {
            text: 'Hello! 👋 Welcome to Ohdit Account Section',
            user: {
                _id: 2,
                avatar: character1,
            },
            _id: IdGenerator(),
            createdAt: new Date(Date.now()),
        };
        this.setState({ messages: [initialMessage] });
    };

    UserIdAsyncRetrieve = async () => {
        // to retrieve the unique Userid
        try {
            const id = await AsyncStorage.getItem('UserID&Name');
            if (JSON.parse(id) !== null) {
                this.setState({ UserCredentials: JSON.parse(id) });
                this.GetCompanyCode();
            }
        } catch (error) {
            alert(error);
        }
    };
    imagesend() {
        // send the selected image to botmessenger
        const messages = [
            {
                _id: IdGenerator(),
                // text: 'image',
                createdAt: new Date(Date.now()),
                user: {
                    _id: 1,
                    name: 'React Native',
                    avatar: 'https://facebook.github.io/react/img/logo_og.png',
                },
                image: this.state.pickedImage.uri,
            },
        ];
        this.onSend(messages);
    }
    onQuickReply = (quickReply = []) => {
        // when user taps quick Replies
        quickReply.forEach((message) => {
            if (message.value === 'Add new details') {
                this.props.navigation.navigate('AddExpenseScreen', {
                    CompanyCode: this.state.SelectCompanyCode,
                });
            }
            if (message.value === 'View your details') {
                this.props.navigation.navigate('AddProductScreen', {
                    // userId: this.state.UserCredentials.UserId,
                    CompanyCode: this.state.SelectCompanyCode,
                });
            }
            const messages = [
                {
                    text: message.title,
                    _id: IdGenerator(), // custom id generator
                    createdAt: new Date(Date.now()),
                    user: { _id: 1 },
                },
            ];
            this.onSend(messages);
        });
    };
    onSend = (messages) => {
        console.warn('staniya', messages);
        // on user sendMessges to botMessenger
        const { UserCredentials } = this.state;
        this.setState({
            messages: [...messages, ...this.state.messages],
            loadIndicator: true,
            botText: messages[0].text,
        });
        messages.forEach((message) => {
            this.directLine
                .postActivity(giftedMessageToBotMessage(message, '111'))
                .subscribe();
        });
    };

    onPickImage = () => {
        // when user pick image from Documents
        this.setState({ isModalVisible: false }, async () => {
            try {
                const res = await DocumentPicker.pick({
                    type: [DocumentPicker.types.images],
                    readContent: true,
                });
                this.setState({ pickedImage: res });
                this.imagesend(res);
            } catch (err) {
                if (DocumentPicker.isCancel(err)) {
                    ToastAndroid.show('Operation canceled', 300);
                } else {
                    throw err;
                }
            }
        });
    };
    onInputTextChanged = (botText) => {
        //textInputof the gifted Messenger changes
        this.setState({ botText: botText });
    };

    GetCompanyCode = async () => {
        const state = this.state;
        await axios(
            `https://ohditaccounts.azurewebsites.net/get_Company_by_User?UserId=${state.UserCredentials.UserId}`,
        )
            .then((companyCodeRes) => {
                const Ccode = [];
                if (companyCodeRes !== '') {
                    const MapedData = companyCodeRes.data.map((item) => item.companyName);

                    for (let index = 0; index < MapedData.length; index++) {
                        const companycode = {
                            label: MapedData[index],
                            value: MapedData[index],
                        };
                        Ccode.push(companycode);
                    }
                    console.warn(Ccode);
                    this.setState({ SelectCompanyCode: Ccode, isLoading: false });
                }
            })
            .catch((error) => alert(error));
    };
    render() {
        return (
            <LinearGradient
                useAngle={true}
                angle={90}
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                colors={['#6834b4', '#512097']} style={{ flex: 1 }}>
                <View style={{ padding: 20 }}>
                    <View style={ExpenseStyle.headerStyle}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeScreen')}
                            style={{ alignSelf: 'flex-start', alignSelf: 'center', padding: 10 }}>
                            <Image source={back} style={{ width: 18, height: 18 }}></Image>
                        </TouchableOpacity>
                        <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 20, color: '#FFFFFF', marginLeft: 20 }}>Add Product</Text>
                    </View>
                </View>
                <View style={{ backgroundColor: '#F1F1F1', flex: 1, borderTopLeftRadius: 30, borderTopRightRadius: 30, }}>
                    <Image source={line} style={{ width: 50, height: 5, alignSelf: 'center' }}></Image>
                    <View style={{ flex: 1 }}>
                        <View style={styles.container}>
                            <GiftedChat
                                showUserAvatar={character1}
                                showAvatarForEveryMessage
                                textInputStyle={{ left: 30 }}
                                user={{
                                    _id: 1,
                                }}
                                messages={this.state.messages}
                                quickReply={this.state.messages.quickReplies}
                                onSend={this.onSend}
                                renderMessageImage={this.renderMessageImage}
                                renderSend={renderSend}
                                renderBubble={renderBubble}
                                onInputTextChanged={(botText) => this.onInputTextChanged(botText)}
                                onQuickReply={this.onQuickReply}
                            />

                            <Icons
                                name="attach"
                                color="#5B47E0"
                                style={{
                                    position: 'absolute',
                                    bottom: 5,
                                    transform: [{ rotate: '90deg' }],
                                    left: 10,
                                }}
                                size={30}
                                allowFontScaling={false}
                                onPress={() => {
                                    // this.setState({isModalVisible: true});
                                    // this.props.navigation.navigate('AddNew');
                                }}
                            />
                        </View>
                    </View>
                </View>
            </LinearGradient>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: 150,
        height: 100,
        borderRadius: 13,
        margin: 3,
        resizeMode: 'cover',
    },
    imageActive: {
        resizeMode: 'contain',
    },
});
