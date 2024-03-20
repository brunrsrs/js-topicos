import React from "react";
import { Text, Button } from "react-native";

export default props => {
    
    const [numero,SetNumero] = useState(parseInt(props.inicial))

    const inc = () => SetNumero(numero+parseInt(props.passo))
    const dec = () => SetNumero(numero-parseInt(props.passo))

    const handleTextChange = (text) => {
        text.trim() !== "" && !isNaN(text) ? SetNumero(parseInt(text)) : SetNumero(0);
    };

    return (
    <>
        <Button title = "+" onPress = {inc}/>
        <Button title = "-" onPress = {dec}/>
    </>
    )

}