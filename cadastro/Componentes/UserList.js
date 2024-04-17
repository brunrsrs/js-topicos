import React, { useContext } from 'react';
import { View, Text, Alert, FlatList } from 'react-native'; // Adicionando a importação de 'react-native'
import { ListItem, Avatar, Icon, Button } from '@rneui/themed';
import UsersContext from './UserContextFile';

export default function UserList(props) {

    const {state, dispatch} = useContext(UsersContext)

    function getActions(user) {
        return (
            <>
                <Button
                    onPress={() => props.navigation.navigate('UserForm', user)}
                    type = 'clear'
                    icon = {<Icon name = 'edit' size = {25} color = 'orange' />}
                />
                <Button
                    onPress={() => confirmUserDeletion(user)}
                    type = 'clear'
                    icon = {<Icon name = 'delete' size = {25} color = 'red' />}
                />
            </>
        )
    }

    function confirmUserDeletion(user) {
        Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [
            {
                text: 'Sim',
                onPress(){
                    console.warn('delete:' + user.id)
                    dispatch({
                        type: "deleteUser",
                        payload: user,
                    })
                }
            },
            {
                text: 'Não'
            }
        ])
    }

    function getUsersItems({ item: user }) {
        return (
            <ListItem
                onPress={() => props.navigation.navigate('UserForm', user)}
                bottomDivider>
                <Avatar
                    rounded
                    source={{ uri: user.avatarUrl }} // Corrigindo o acesso à propriedade 'uri' para o avatarUrl
                />
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                {getActions(user)}
            </ListItem>
        );
    }

    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={state.users}
                renderItem={getUsersItems}
            />
        </View>
    );
}