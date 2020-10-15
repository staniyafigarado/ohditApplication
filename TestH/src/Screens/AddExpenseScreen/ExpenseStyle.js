import React from 'react';
import { StyleSheet } from 'react-native';
import { Drawer } from 'react-native-paper';
// import { RFPercentage } from 'react-native-responsive-fontsize';
const ExpenseStyle = StyleSheet.create({
    customTextInput: {
        fontFamily: 'Roboto-Regular', fontSize: 12, color: '#9B9B9B', alignSelf: 'flex-start', marginLeft: 20, width: '80%'
    },
    customTextView: {
        shadowRadius: 2,
        borderRadius: 25,
        backgroundColor: '#F1F1F1',
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center', marginTop: 30
    },
    customTextViewInner: {
        shadowRadius: 2,
        borderRadius: 20,
        backgroundColor: '#F1F1F1',
        width: 290,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center', alignSelf: 'center'
    },

    headerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
    },

});

export { ExpenseStyle };
