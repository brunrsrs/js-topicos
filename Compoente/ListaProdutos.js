import { Text } from 'react-native';
import React from 'react';

export default props => {
    function carregaLista() {
        return props.lista.map(p=> {
            return <Text key = {p.id} style={{color: '#fff'}}> {p.id} - {p.nome} - preço R$ {p.preco} </Text>
        })
    }

    return (
        <>
            <Text style={{color: '#fff'}}> 
                Lista de {props.nome}:
            </Text>
            {/*carregaLista()*/}
            <Text></Text>
            {props.lista.map(p=> {
                return <Text key = {p.id}  style={{color: '#fff'}}> {p.id} - {p.nome} - preço R$ {p.preco}
            </Text>
            })}

        </>
    )
}