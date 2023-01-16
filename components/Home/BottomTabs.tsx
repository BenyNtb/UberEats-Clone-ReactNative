import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import { useNavigation } from '@react-navigation/native'

export default function BottomTabs() {
    const navigation = useNavigation()

    return (
        <View
        style={{
            flexDirection: 'row',
            margin: 10,
            marginBottom: 0,
            marginHorizontal: 50,
            justifyContent: "space-between", 
        }}>
        <Icon icon='home' onPress={() => navigation.navigate('Home') }/>
        <Icon icon='search' />
        <Icon icon='percent' />
        <Icon icon='user' onPress={() => navigation.navigate('Account')} />
        </View>
    )
    }

    const Icon = (props: {  icon: string; onPress?: () => void }) => (
    <TouchableOpacity onPress={props.onPress} >
        <View>
        <FontAwesome5
            name={props.icon}
            size={25}
            style={{
            marginBottom: 3,
            bottom: -10,
            alignSelf: 'center'
            }}
        />
        <Text>{props.text}</Text>
        </View>
    </TouchableOpacity>
)
