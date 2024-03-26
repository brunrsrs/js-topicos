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
        fontSize: 10,
        fontWeight: 'bold',
        height: Dimensions.get('window').width/8,
        width: 15,
        padding: 17,
        backgroundColor: 'pink',
        textAlign: 'center',
        borderWidth: 5,
        borderColor: 'white'
        
    }
})