import React from 'react';
import { StyleSheet } from 'react-native';
import { Drawer } from 'react-native-paper';
// import { RFPercentage } from 'react-native-responsive-fontsize';
const CommonStyles = StyleSheet.create({
    MonB24CD: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 24,
        color: '#FFFFFF'
    },
    container: {
        flex: 1,
        flexDirection: 'column', backgroundColor: '#F1F1F1', padding: 20, justifyContent: 'center', alignItems: 'center'
    },
    headerContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
    },
    headerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
    },

    txtPrimary: { fontFamily: 'Roboto-Medium', fontSize: 12, textAlign: 'center' },
    txtSecondary: { fontFamily: 'Roboto-Medium', fontSize: 16, textAlign: 'center' },
    // inner neomorph
    customInput: {
        shadowRadius: 2,
        borderRadius: 20,
        backgroundColor: '#F1F1F1',
        width: 290,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center', alignSelf: 'center'
    },
    customBox: {
        shadowRadius: 2,
        borderRadius: 10,
        backgroundColor: '#F1F1F1',
        width: 50,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center', marginTop: 20, marginRight: 10
    },
    customBoxInner: {
        shadowRadius: 2,
        borderRadius: 10,
        backgroundColor: '#F1F1F1',
        width: 40,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center', alignSelf: 'center'
    },
    lineStyle: {
        width: 25, height: 2
    },
    //   outer neomorph
    customInputWrapper: {
        shadowRadius: 2,
        borderRadius: 25,
        backgroundColor: '#F1F1F1',
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center', marginTop: 30
    },
    customButtonPrimary: {
        shadowRadius: 1,
        borderRadius: 25,
        backgroundColor: '#512097',
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center', marginTop: 30
    },
    buttonTxtPrimary: {
        color: '#FFFFFF', fontFamily: 'Roboto-Medium', fontSize: 18
    }
    , buttonTxtSecondary: {
        color: '#6834B4', fontFamily: 'Roboto-Medium', fontSize: 18
    },
    customButtonSecondary: {
        shadowRadius: 5,
        borderRadius: 25,
        backgroundColor: '#F1F1F1',
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center', marginTop: 20
    },
    customTextInput: {
        fontFamily: 'Roboto-Regular', fontSize: 12, color: '#9B9B9B', alignSelf: 'flex-start', marginLeft: 20
    },
    homeViewStyle: {
        shadowRadius: 5,
        borderRadius: 10,
        backgroundColor: '#F1F1F1',
        width: 322,
        height: 82,
        justifyContent: 'center',
        marginTop: 20,
        alignItems: 'center',
    },
    homeViewStyleInner: {
        shadowRadius: 5,
        borderRadius: 10,
        backgroundColor: '#F1F1F1',
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    DrawerIconStyle: {
        shadowRadius: 2,
        borderRadius: 10,
        backgroundColor: '#F1F1F1',
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    }

});

export { CommonStyles };
