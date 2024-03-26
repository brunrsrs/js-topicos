import React from "react";
import { StyleSheet, View } from "react-native";

export default props => {
    return (
        <View style = {styles.card}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
card : {
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    margin: 10
}
})