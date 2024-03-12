import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {MeuComponente, somar} from './Compoente/meuComponente';
import ListaProdutos from './Compoente/ListaProdutos';
import produtos from './Compoente/produtos';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Texto na main 
      </Text>

      <Button
        title="BUTÃO"
        onPress={() =>
          produtos.map(p=> {
            return <Text key = {p.id} style={{color: '#fff'}}> {p.id} - {p.nome} - preço R$ {p.preco} </Text>
        })
        }
      />

      <Text style = {styles.text}>
        Soma: {somar(2,3)}
      </Text>

      <MeuComponente style={styles.text}>
      </MeuComponente>

      <Text></Text>

      <ListaProdutos lista = {produtos} nome = 'aaaa'>
      </ListaProdutos>
    
      <Text></Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  }
});
