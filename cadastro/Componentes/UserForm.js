import React, {useContext, useState} from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Button } from '@rneui/themed';

export default ({route,navigation}) => {
    //console.warn(Object.keys(route.params))
    const [user, setUser] = useState(route.params ? route.params : {})

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

            <Button
                title='Salvar'
                onPress={()=> {
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