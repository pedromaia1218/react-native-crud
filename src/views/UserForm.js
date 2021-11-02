import React, { useState, useContext } from 'react'
import { Text, View, StyleSheet, TextInput, Button } from 'react-native'
import UsersContext from '../context/UsersContext'

const UserForm = ({ route, navigation }) => {
    
    const [item, setUser] = useState(route.params ? route.params : {})
    const { state, dispatch } = useContext(UsersContext)

    return (
        <View style={style.form}>
            <Text>Nome</Text>
            <TextInput
                style={style.input}
                onChangeText={name => setUser({ ...item, name })}
                placeholder='Coloque aqui seu nome'
                value={item.name}
            />
            <Text>Email</Text>
            <TextInput
                style={style.input}
                onChangeText={email => setUser({ ...item, email })}
                placeholder='Coloque aqui seu email'
                value={item.email}
            />
            <Text>Avatar</Text>
            <TextInput
                style={style.input}
                onChangeText={avatarUrl => setUser({ ...item, avatarUrl })}
                placeholder='Coloque aqui seu avatarUrl'
                value={item.avatarUrl}
            />
            <Button
                title="Salvar"
                onPress={() => {
                    dispatch({
                        type: item.id ? 'updateUser' : 'createUser',
                        payload: item
                    })
                    navigation.goBack()
                }}
            />
        </View>
    )
}

const style = StyleSheet.create({
    form: {
        padding: 15
    },
    input: {
        borderColor: 'gray',
        paddingBottom: 10,
        borderWidth: 1,
        paddingLeft: 10,
        marginBottom: 15
    }
})

export default UserForm