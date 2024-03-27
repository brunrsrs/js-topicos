import React from 'react';
import { Text, TextInput, Button} from 'react-native'

export default class Mega extends React.Component {

    state = {
        qtdNumeros: this.props.qtdNumeros,
        numeros: []
    }
    
    alterarQtdNumeros(qtde){
        this.setState({qtdNumeros: qtde})
    }
    
    gerarNumeroNaoContido = nums => {
        const novo = parseInt(Math.random() * 60)+1
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
    }

    gerarNumeros = () => {
        const {qtdNumeros} = this.state
        const numeros = []
        for (let i = 0; i<qtdNumeros; i++) {
            numeros.push(this.gerarNumeroNaoContido(numeros))
        } 
        numeros.sort((a,b) => a-b)
        this.setState({numeros})
    }

    render() {
        return(
        <>
            <Text style={{color: 'white'}}>
                Gerador de Mega-Sena {this.state.qtdNumeros}
            </Text>
            <Button
                title='Gerar Números'
                onPress={this.gerarNumeros}
            />
            <TextInput
                keyboardType={'numeric'}
                style={{borderBottomWidth: 1, color: 'white', borderColor:'white'}}
                placeholder='Qtde de Números'
                value={this.state.qtdNumeros}
                onChangeText={
                qtde => this.alterarQtdNumeros(qtde)}
            />
            <Text style={{color: 'white'}}>
                {this.state.numeros.join(' | ')}
            </Text>
            {/* <Text style={{color: 'white'}}>
                {this.state.numeros.join(',')}
            </Text> */}
        </>
        )
    }
}