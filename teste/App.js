import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import {MeuComponente, somar} from './Compoente/meuComponente';
import ListaProdutos from './Compoente/ListaProdutos';
import produtos from './Compoente/produtos';
import {X, Y} from './Compoente/MyButton';
import Contador from './Compoente/Contador';
import Alerta from './Compoente/Alerta';
import Pai from './Compoente/Pai';
import CompProps from './Compoente/CompProps';
import Card from './Compoente/Card';
import Familia from './Compoente/Familia';
import Membro from './Compoente/Membro';
import UsuarioLogado from './Compoente/UsuarioLogado';
import FlexBox from './Compoente/FlexBox';
import Mega from './Compoente/Mega';

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

      <X 
      label = "high"
      onClick = {()=>{console.warn("Teste")}}
      />

      <Y 
      label = "oppa"
      onClick = {()=>{console.warn("Teste")}}
      />

      <FlexBox></FlexBox>

      <Mega></Mega>

      <Alerta></Alerta>

      <Pai></Pai>
      <Contador passo="10" inicial = "0"/>

      <SafeAreaView style = {styles.container}>
        <CompProps>
          <Text style = {{color: 'white'}}> Componente texto </Text>
          <Text style = {{color: 'white'}}> Componente texto </Text>
        </CompProps>
      </SafeAreaView>

      <Card>
        <Familia>
          <Membro nome="Maria" sobrenome="Santos"/>
          <Membro nome="Luan" sobrenome="Santos"/>
        </Familia>
      </Card>

      <SafeAreaView>
        <UsuarioLogado usuario = {{nome: 'Lucas', email: 'lucas@unesp.br'}}></UsuarioLogado>
        <UsuarioLogado usuario = {{email: 'lucas@unesp.br'}}></UsuarioLogado>
        <UsuarioLogado usuario = {{}}></UsuarioLogado>
      </SafeAreaView>

      <Button
        title="Mostrar lista"
        onPress={() =>
          {setMostraMensagem(!mostrarMensagem)}}
      />

      {mostrarMensagem && <ListaProdutos lista={produtos} nome="produts"/>}
    
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
