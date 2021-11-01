import React, { useContext } from 'react'
import { View, FlatList, Alert } from 'react-native'
import { Avatar, Icon, ListItem, Button } from 'react-native-elements'
import UsersContext from '../context/UsersContext'

export default props => {

    const { state, dispatch } = useContext(UsersContext)

    function confirmUserDeletion(item) {
        Alert.alert('EXCLUIR USUÁRIO', 'Deseja mesmo excluir o usuário?', [
            {
                text: 'Sim',
                onPress() {
                    dispatch({
                        type: 'deleteUser',
                        payload: item
                    })
                }
            },
            {
                text: 'Não'
            }
        ])
    }

    function getUserItem({ item }) {
        return (
            <ListItem bottomDivider>
                <Avatar source={{ uri: item.avatarUrl }} />
                <ListItem.Content>
                    <ListItem.Title>{item.name}</ListItem.Title>
                    <ListItem.Subtitle>{item.email}</ListItem.Subtitle>
                </ListItem.Content>
                <Button
                    onPress={() => {
                        props.navigation.navigate('UserForm', item);
                    }}
                    type="clear"
                    icon={<Icon name="edit" size={25} color="orange" />}
                />
                <Button
                    onPress={() => { confirmUserDeletion(item) }}
                    type="clear"
                    icon={<Icon name="delete" size={25} color="red" />}
                />
            </ListItem>
        )
    }

    return (
        <View>
            <FlatList
                keyExtractor={item => item.id}
                data={state.users}
                renderItem={getUserItem}
            />
        </View>
    )
}