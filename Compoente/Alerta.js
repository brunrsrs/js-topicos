import React from "react";
import {View, Button, Alert} from 'react-native'

export default Alerta = () => {
    const showAlert = () => {
        Alert.alert(
        'Titulo do Alerta',
        'Este é um exemplo de mensagem de alerta',
        [
            {text: 'OK', onPress: () => console.warn('OK pressinado')},
            {text: 'Cncelar', onPress: () => console.warn('Cancelar pressionado')}
        ]
        );
    };

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button title="Mostrar alerta" onPress={ showAlert }/>
    </View>
    );
};