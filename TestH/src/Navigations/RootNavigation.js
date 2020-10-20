import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Dimensions,
    Image,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';
import { Shadow, Neomorph } from 'react-native-neomorph-shadows';
import AsyncStorage from '@react-native-community/async-storage';
import { ProgressBar } from '@react-native-community/progress-bar-android';
import { createAppContainer, StackActions, NavigationActions } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { CommonStyles } from '../SharedComponents/CustomStyles';
import 'react-native-gesture-handler';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
// import { Icon } from 'react-native-elements';
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import OtpScreen from '../Screens/OtpScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import ResetLink1Screen from '../Screens/ResetLink1Screen';
import ResetLinkScreen from '../Screens/ResetLinkScreen';
import ResetPasswordScreen from '../Screens/ResetPasswordScreen';
import SigninScreen from '../Screens/SigninScreen';
import SplashScreen3 from '../Screens/SplashScreen3';
import HomeScreen from '../Screens/HomeScreen';
import TeamScreen from '../Screens/TeamScreen';
import ShareScreen from '../Screens/ShareScreen';
import SettingsScreen from '../Screens/SettingsScreen';
import Modal from '../Screens/CustomModel';
// import Logout from '../Screens/Logot';
import ChatBoat from '../Screens/ChatBoat';
import AddExpenseScreen from '../Screens/AddExpenseScreen';
import AddProductScreen from '../Screens/AddProductScreen';
import AddProductScreen1 from '../Screens/AddProductscreen1';
import AddProductDetailsScreen from '../Screens/AddProductDetailsScreen';
import DrawerContentModel from '../SharedComponents/DrawerComponent';
const { width, height } = Dimensions.get('window');
const close = require('../../assets/icons/close.png');
const ohdit = require('../../assets/icons/ohdit.png');
const ohditlogo = require('../../assets/ohditLogo.png');
const compIcon = require('../../assets/icons/companyIcon.png');
const people = require('../../assets/icons/people.png');
const share = require('../../assets/icons/share.png');
const settings = require('../../assets/icons/settings.png');
const logout = require('../../assets/icons/logout.png');
const DrawerContent = (props) => (
    <View>
        <DrawerContentModel />
        <View style={{ height: height * .7, padding: width * .05, justifyContent: 'space-around' }}>
            <ScrollView>
                <DrawerItems {...props} />
            </ScrollView>
        </View>
        <View style={{}}>
            {/* Bottom view */}
        </View>
    </View>

);
class App extends React.Component {

    constructor() {
        super();
        this.state = {
            isVisible: true,
        }
    }
    static navigationOptions = {
        headerShown: false
    };
    Hide_Splash_Screen = () => {
        this.setState({
            isVisible: false
        });

        this.retrieveData()
    }
    async retrieveData() {
        try {

            const userData = await AsyncStorage.getItem('userData');

            if (userData !== null) {
                const resetAction = StackActions.reset({
                    index: 0,
                    actions: [NavigationActions.navigate({ routeName: 'HomeScreen' })],
                });
                this.props.navigation.dispatch(resetAction);
            }
            else
                this.props.navigation.push('SigninScreen')
            //this.props.navigation.push('Home')
        } catch (error) {

        }
    }
    componentDidMount() {
        var that = this;
        setTimeout(function () {
            that.Hide_Splash_Screen();
        }, 2000);
    }
    render() {

        return (
            <View style={CommonStyles.container}>
                <Image source={ohditlogo}
                    style={{ width: 229, height: 182 }}></Image>
                <View style={{ justifyContent: 'flex-end', width: width * .4, top: height * .3 }}>

                    <ProgressBar styleAttr="Horizontal" color="#6834B4" />
                </View>
            </View>
        );
    }
};
const TabNavigator = createBottomTabNavigator(
    {
        ChatBoat: { screen: ChatBoat },
        HomeScreen: {
            screen: HomeScreen,
            navigationOptions: {
                tabBarVisible: false
            }
        },
        RegisterScreen: { screen: RegisterScreen },
    },

    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let IconComponent = Ionicons;
                let iconName;
                if (routeName === 'ChatBoat') {
                    iconName = `duplicate${focused ? '-sharp' : '-outline'}`;
                } else if (routeName === 'HomeScreen') {
                    iconName = `ios-home${focused ? '-sharp' : '-outline'}`;
                }
                else if (routeName === 'RegisterScreen') {
                    iconName = `ios-search-circle${focused ? '-sharp' : '-outline'}`;
                }
                //return <IconComponent name={iconName} size={30} color={tintColor} />;
                return <View style={{ margin: 20, width: width * 0.1, height: width * 0.1, borderRadius: width * .05, alignItems: 'center', justifyContent: 'center' }}>
                    <IconComponent name={iconName} size={30} color={tintColor} />
                </View>
            },
        }),
        tabBarOptions: {
            activeTintColor: '#FFFFFF',
            inactiveTintColor: 'rgba(255,255,255,0.7)',
            showLabel: false,
            style: {
                backgroundColor: '#512097',
                borderTopLeftRadius: 25,
                borderTopRightRadius: 25,
                padding: 10,
                paddingLeft: 10,
                height: height * 0.09,


            },
        },

    },
);
// drawer navigation
const MyDrawerNavigator = createDrawerNavigator({
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: {
            title: `Home`,
            drawerLabel: "Company",
            drawerIcon: () => (
                <Neomorph
                    inner={false} // <- enable shadow inside of neomorph
                    swapShadows // <- change zIndex of each shadow color
                    style={CommonStyles.DrawerIconStyle} >
                    <Image source={compIcon} style={{ width: 20, height: 23 }}></Image>
                </Neomorph>
            )
        },

    },
    TeamScreen: {
        screen: TeamScreen,
        navigationOptions: {
            title: `Team`,
            drawerLabel: "Team",
            drawerIcon: () => (
                <Neomorph
                    inner={false} // <- enable shadow inside of neomorph
                    swapShadows // <- change zIndex of each shadow color
                    style={CommonStyles.DrawerIconStyle} >
                    <Image source={people} style={{ width: 15, height: 10 }}></Image>
                </Neomorph>
            )
        },
    },
    ShareScreen: {
        screen: ShareScreen,
        navigationOptions: {
            title: `Share`,
            drawerLabel: "Share",
            drawerIcon: () => (
                <Neomorph
                    inner={false} // <- enable shadow inside of neomorph
                    swapShadows // <- change zIndex of each shadow color
                    style={CommonStyles.DrawerIconStyle} >
                    <Image source={share} style={{ width: 12, height: 13 }}></Image>
                </Neomorph>
            )
        },
    },
    SettingsScreen: {
        screen: SettingsScreen,
        navigationOptions: {
            title: `Settings`,
            drawerLabel: "Settings",
            drawerIcon: () => (
                <Neomorph
                    inner={false} // <- enable shadow inside of neomorph
                    swapShadows // <- change zIndex of each shadow color
                    style={CommonStyles.DrawerIconStyle} >
                    <Image source={settings} style={{ width: 12, height: 13 }}></Image>
                </Neomorph>
            )
        },
    },
    Logout: {
        screen: HomeScreen,
        navigationOptions: {
            title: `Logout`,
            drawerLabel: "Logout",
            drawerIcon: () => (
                <Neomorph
                    inner={false} // <- enable shadow inside of neomorph
                    swapShadows // <- change zIndex of each shadow color
                    style={CommonStyles.DrawerIconStyle} >
                    <Image source={logout} style={{ width: 12, height: 13 }}></Image>
                </Neomorph>
            )
        },
    },

},
    {
        contentComponent: DrawerContent,
        drawerPosition: 'left',
        drawerWidth: width * .8,
        contentOptions: {
            activeBackgroundColor: '#F1F1F1',
            itemStyle: { paddingVertical: 15 },
            labelStyle: {
                fontFamily: 'Roboto-Regular',
                fontSize: 14, fontWeight: 'normal'
            },


        },
        drawerBackgroundColor: '#F1F1F1'
    })
const MainNavigator = createStackNavigator({
    App: { screen: App, headerShown: false },
    SigninScreen: { screen: SigninScreen },
    RegisterScreen: { screen: RegisterScreen },
    SplashScreen3: { screen: SplashScreen3 },
    OtpScreen: { screen: OtpScreen },
    ResetPasswordScreen: { screen: ResetPasswordScreen },
    ResetLinkScreen: { screen: ResetLinkScreen },
    ResetLink1Screen: { screen: ResetLink1Screen },
    HomeScreen: { screen: MyDrawerNavigator },
    TeamScreen: { screen: TeamScreen },
    ShareScreen: { screen: ShareScreen },
    ChatBoat: { screen: TabNavigator },
    AddExpenseScreen: { screen: AddExpenseScreen },
    AddProductScreen: { screen: AddProductScreen },
    AddProductScreen1: { screen: AddProductScreen1 },
    AddProductDetailsScreen: { screen: AddProductDetailsScreen },
    Modal: { screen: Modal }
},
    { headerMode: 'none' }
);

const App1 = createAppContainer(MainNavigator);

export default App1;