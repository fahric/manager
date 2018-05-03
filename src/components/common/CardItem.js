import React from 'react';
import { View } from 'react-native';

const CardItem = (props) => {
    return (
    <View style={[styles.cardItemStyle, props.style]}>
        {props.children}
    </View>);
};
const styles = {
    cardItemStyle: {
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
};

export { CardItem };
