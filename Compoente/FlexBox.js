import React from "react";
import { StyleSheet, View } from "react-native";
import Quadrado from "./Quadrado";

export default props => {
    return (
        <View style = {styles.FlexV1}>
            <Quadrado cor='red'></Quadrado>
            <Quadrado cor='gray'></Quadrado>
            <Quadrado cor='green'></Quadrado>
            <Quadrado cor='cyan'></Quadrado>
            <Quadrado cor='yellow'></Quadrado>
        </View>
    )
}

const styles = StyleSheet.create( {
    FlexV1: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#109'
    }
})