import React from "react";
import {Text, View, StyleSheet} from 'react-native';

export default props => {
    const styles = StyleSheet.create({
        container: {
            height: 10,
            width: 10,
            backgroundColor: props.cor || '#fff',
            //flexGrow:5 
            //esse flex divide o espaço entre os valores
        }
    });
    return (
        <View style = {styles.container}></View>
    )
}