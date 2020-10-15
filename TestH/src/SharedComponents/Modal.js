import {
  View,
  Animated,
  Dimensions,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import Icons from 'react-native-vector-icons/Ionicons';
import Color from '../Constants/Color';
const {height, width} = Dimensions.get('window');
function CustomModal(props) {
  return (
    <Modal
      isVisible={props.isVisible}
      animationIn="fadeInUp"
      onBackdropPress={props.hide}
      backdropOpacity={0}>
      <View style={styles.MainView}>
        <Icons
          onPress={props.onImagePick}
          name="image-sharp"
          size={30}
          style={styles.IconStyle}
          color="#E4421B"
        />
        <Icons name="document-text" size={30} style={styles.IconStyle} />
        <Icons
          name="chevron-down"
          size={30}
          style={styles.IconStyle}
          onPress={props.hide}
        />
      </View>
    </Modal>
  );
}
export default CustomModal;
const styles = StyleSheet.create({
  MainView: {
    height: '20%',
    width: width,
    backgroundColor: 'white',
    alignSelf: 'center',
    bottom: -height * 0.01,
    position: 'absolute',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
  },
  IconStyle: {
    padding: 10,
    borderRadius: 80,
    backgroundColor: Color.lightGray,
  },
});
