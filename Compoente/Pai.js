import React, { useState } from "react";
import {Text} from 'react-native';
import Filho from './Filho'

export default pai => {
    const [num, setNum] = useState(0)
    const [texto, setTexto] = useState('Valor')

    const exibirValor = (numero, texto) => {
        setNum(numero)
        setTexto(texto)
    }

    return (
        <>
            <Filho
                min={1}
                max={10}
                funcao = {exibirValor}
            />
            <Text style= {{fontSize: 35, color: 'white'}}> {texto}: {num} </Text>
        </>
    )
}