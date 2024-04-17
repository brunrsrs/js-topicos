import React, { useContext } from 'react';
import { StyleSheet, Alert} from 'react-native';
import UserForm from './Componentes/UserForm';
import UserList from './Componentes/UserList';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Button, Icon } from '@rneui/themed';
import UsersContext, { UsersProvider } from './Componentes/UserContextFile'


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <UsersProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='UserList'
          screenOptions={screenOptions}>
          <Stack.Screen
            name="UserList"
            component={UserList}
            options={({ navigation }) => {
              const {state, dispatch} = useContext(UsersContext)
              return {
                title: 'Lista de Usuários',
                headerRight: () => (
                  <>
                    <Button
                      onPress={() => navigation.navigate('UserForm')}
                      type='clear' // pode ser solid ou outline, nesse caso é sem fundo
                      icon={<Icon name="add" size={25} color="white" />} />
                    <Button
                      onPress={() => 
                        Alert.alert('Excluir Todos', 'Deseja excluir todos os usuários?', [
                          {
                              text: 'Sim',
                              onPress(){
                                  dispatch({
                                    type: 'deleteAll'
                                  })
                              }
                          },
                          {
                              text: 'Não'
                          }
                      ])}
                      type='clear' // pode ser solid ou outline, nesse caso é sem fundo
                      icon={<Icon name="delete" size={25} color="white" />} />
                  </>
                )
              }
            }}
          />
          <Stack.Screen
            name="UserForm"
            component={UserForm}
            options={{
              title: 'Formulário de Usuários'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UsersProvider>
  );
}

const screenOptions = {
  headerStyle: {
    backgroundColor: '#f4511e'
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold'
  }
}


