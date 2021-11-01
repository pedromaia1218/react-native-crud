import React from 'react'
import { View, FlatList } from 'react-native'
import { Avatar, Icon, ListItem, Button } from 'react-native-elements'
import users from '../data/users'

export default props => {

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
                data={users}
                renderItem={getUserItem}
            />
        </View>
    )
}