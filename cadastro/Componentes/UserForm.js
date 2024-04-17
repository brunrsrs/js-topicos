import React, {useContext, useState} from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Button } from '@rneui/themed';
import UsersContext from "./UserContextFile";

export default ({route,navigation}) => {
    //console.warn(Object.keys(route.params))
    const [user, setUser] = useState(route.params ? route.params : {})
    const {dispatch} = useContext(UsersContext)

    return (
        <View style={style.form}>
            <Text Nome></Text>
            <TextInput
                style={style.input}
                //pega todos os atribuos do user e sobrescreve nome
                onChangeText={name => setUser({...user,name})}
                placeholder="Informe o Nome"
                value={user.name}
            />
            <TextInput
                style={style.input}
                //pega todos os atribuos do user e sobrescreve nome
                onChangeText={email => setUser({...user,email})}
                placeholder="Informe o Email"
                value={user.email}
            />
            <TextInput
                style={style.input}
                //pega todos os atribuos do user e sobrescreve nome
                onChangeText={avatarUrl => setUser({...user,avatarUrl})}
                placeholder="Informe o avatarURL"
                value={user.avatarUrl}
            />

            <Button
                title='Salvar'
                onPress={()=> {
                    dispatch ({
                        type: user.id ? 'updateUser' : 'createUser',
                        payload: user
                    })
                    navigation.goBack()
                }}
            />
        </View>
    )
}

const style = StyleSheet.create({
    input: {
        heigh: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        form: {
            padding: 15,
        }
    }
})