import React from 'react';
import { View, Text } from 'react-native';

const FlexDirectionBasics = () => {
    return (
        // Try setting `flexDirection` to `column`.
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 30 }}>Share Screen</Text>
        </View>
    );
};

export default FlexDirectionBasics;
