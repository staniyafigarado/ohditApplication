import React, { Component } from 'react';
import { View, Text } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {
    createStackNavigator,
    CardStyleInterpolators,
} from '@react-navigation/stack';
// Custom screens
import {
    SplashScreen,
    SigninScreen,
    RegisterScreen,
    OtpScreen,
} from '../Screens';
const Stack = createStackNavigator();
const WrapperNavigations = (props) => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    gestureEnabled: true,
                    gestureDirection: 'horizontal',
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                }}
                initialRouteName="SigninScreen">
                <Stack.Screen
                    name="SplashScreen"
                    component={SplashScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="SigninScreen"
                    component={SigninScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="RegisterScreen"
                    component={RegisterScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="OtpScreen"
                    component={OtpScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default WrapperNavigations;
