import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput, Button } from 'react-native'

export default ({ route, navigation }) => {

    const [item, setUser] = useState(route.params ? route.params : {})

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