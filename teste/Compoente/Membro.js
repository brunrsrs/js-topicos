import React from 'react';
import { Text, View } from 'react-native';

export default props => {
    return (
        <View>
            <Text style={{color: 'white'}}> {props.nome} {props.sobrenome} </Text>
        </View>
    )
}