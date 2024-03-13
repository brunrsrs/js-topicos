import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {MeuComponente, somar} from './Compoente/meuComponente';
import ListaProdutos from './Compoente/ListaProdutos';
import produtos from './Compoente/produtos';
import {X, Y} from './Compoente/MyButton';
import Contador from './Compoente/Contador';

export default function App() {
  const [mostrarMensagem, setMostraMensagem] = React.useState(false);
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Texto na main 
      </Text>


      <Text style = {styles.text}>
        Soma: {somar(2,3)}
      </Text>

      <MeuComponente style={styles.text}>
      </MeuComponente>

      <Text></Text>

      {/* <MyButton 
        label = "OK"
        onClick = {()=> {console.warn("Testando")}}
      /> */}

      <Y 
      label = "OK"
      onClick = {()=>{console.warn("Teste")}}
      />

      <X 
      label = "OK"
      onClick = {()=>{console.warn("Teste")}}
      />


      <Text></Text>

      <Contador passo="1094813218759187592194210109481321875918759219421010948132187591875921942101094813218759187592194210109481321875918759219421010948132187591875921942101094813218759187592194210109481321875918759219421010948132187591875921942101094813218759187592194210109481321875918759219421010948132187591875921942101094813218759187592194210109481321875918759219421010948132187591875921942101094813218759187592194210109481321875918759219421010948132187591875921942101094813218759187592194210109481321875918759219421010948132187591875921942101094813218759187592194210109481321875918759219421010948132187591875921942101094813218759187592194210109481321875918759219421010948132187591875921942101094813218759187592194210109481321875918759219421010948132187591875921942101094813218759187592194210" inicial = "0"/>

      <Text></Text>
      <Button
        title="Mostrar lista"
        onPress={() =>
          {setMostraMensagem(!mostrarMensagem)}}
      />

      {mostrarMensagem && <ListaProdutos lista={produtos} nome="produts"/>}
    
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
