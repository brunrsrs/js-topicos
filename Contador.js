import React, {useState} from 'react';
import { Text, Button, TextInput } from 'react-native';

export default props=> {
    // let numero = props.inicial

    // const inc = () => {
    //     numero++
    //     console.warn(numero)
    // }
    // const dec = () => numero--

    const [numero,SetNumero] = useState(parseInt(props.inicial))

    const inc = () => SetNumero(numero+parseInt(props.passo))
    const dec = () => SetNumero(numero-parseInt(props.passo))

    const handleTextChange = (text) => {
        text.trim() !== "" && !isNaN(text) ? SetNumero(parseInt(text)) : SetNumero(0);
    };

    return (
        <>
            <Text style = {{fontSize: 35, color: '#fff'}}>{numero}</Text>
            <Button title = "+" onPress = {inc}/>
            <Button title = "-" onPress = {dec}/>
            <TextInput
                fontSize= {35} 
                color= {'#fff'}
                placeholder='inciiazlia'
                onChangeText={handleTextChange}
                value = {numero.toString()}
            />
        </>
    )
}