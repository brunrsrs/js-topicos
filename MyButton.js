import React from 'react';
import { Text, TouchableHighlight, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

export const X = props => {
    return (
        <TouchableHighlight onPress={props.onClick}>
            <Text style={style.botao}>
                {props.label}
            </Text>
        </TouchableHighlight>
    )
}

export const Y = props => {
    return (
        <TouchableOpacity onPress={props.onClick} activeOpacity={0.01}>
            <Text style={style.botao}>
                {props.label}
            </Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create ({
    botao: {
        fontSize: 40,
        height: Dimensions.get('window').width/4,
        width: Dimensions.get('window').width/4,
        padding: 20,
        backgroundColor: 'pink',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#000'
    }
})