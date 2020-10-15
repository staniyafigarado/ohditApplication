/* eslint-disable prettier/prettier */
import React from 'react'
import { View, SafeAreaView } from 'react-native';
import MainNav from './src/Navigations/RootNavigation';
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{ backgroundColor: "#F1F1F1", flex: 1 }}>
        <SafeAreaView style={{ flex: 1 }}>
          <MainNav />
        </SafeAreaView>
      </View>
    );
  }
}
/*Ufollowers page for viewing user followers....... by staniya figarado*/

