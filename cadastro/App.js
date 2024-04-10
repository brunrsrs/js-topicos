import React from 'react';
import { StyleSheet} from 'react-native';
import UserForm from './Componentes/UserForm';
import UserList from './Componentes/UserList';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Button, Icon } from '@rneui/themed';


const Stack = createNativeStackNavigator()

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='UserList'
          screenOptions={screenOptions}>
          <Stack.Screen
            name="UserList"
            component={UserList}
            options={({ navigation }) => {
              return {
                title: 'Lista de Usuários',
                headerRight: () => (
                  <Button
                    onPress={() => navigation.navigate('UserForm')}
                    type='clear' // pode ser solid ou outline, nesse caso é sem fundo
                    icon={<Icon name="add" size={25} color="white" />} />
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


