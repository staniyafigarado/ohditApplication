import DateTimePicker from '@react-native-community/datetimepicker';
import { View } from 'react-native';
import React from 'react';
function IdGenerator() {
  var S4 = function () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  return (
    S4() +
    S4() +
    '-' +
    S4() +
    '-' +
    S4() +
    '-' +
    S4() +
    '-' +
    S4() +
    S4() +
    S4()
  );
}
function DateAndTimePicker(props) {
  return (
    <View style={{ flex: 1 }}>
      {props.isVisible && (
        <DateTimePicker
          testID="dateTimePicker"
          value={new Date()}
          mode={props.mode}
          is24Hour={true}
          display="default"
          onChange={props.date} //recive date
        />
      )}
    </View>
  );
}
module.exports = { IdGenerator, DateAndTimePicker };
