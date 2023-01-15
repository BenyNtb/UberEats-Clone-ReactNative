import { View, Text, TouchableOpacity } from 'react-native'
import React, { ReactNode } from 'react'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import { useNavigation } from '@react-navigation/native'

export default function BottomTabs() {
    const navigation = useNavigation()

    return (
        <View
        style={{
            flexDirection: 'row',
            margin: 10,
            marginHorizontal: 30,
            justifyContent: "space-between", 
        }}>
        <Icon icon='home' text='Home' />
        <Icon icon='search' text='Search' />
        <Icon icon='shopping-bag' text='Grocery' />
        <Icon icon='receipt' text='Orders' />
        <Icon icon='user' text='Account' onPress={() => navigation.navigate('Account')} />
        </View>
    )
    }

    const Icon = (props: { text: ReactNode; icon: string; onPress?: () => void }) => (
    <TouchableOpacity onPress={props.onPress} >
        <View>
        <FontAwesome5
            name={props.icon}
            size={25}
            style={{
            marginBottom: 3,
            alignSelf: 'center'
            }}
        />
        <Text>{props.text}</Text>
        </View>
    </TouchableOpacity>
)
