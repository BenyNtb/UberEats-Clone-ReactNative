import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'



export default function HeaderTabs(props: { activeTab: any; setActiveTab: any; }) {
  return (
    <View style={{flexDirection: 'row', alignSelf: 'center'}}>
        <HeaderButton 
        text='Delivery'
        btnColor='black' 
        textColor='white' 
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
        
        />
        <HeaderButton 
        text='Pickup' 
        btnColor='white' 
        textColor='black'
        activeTab={props.activeTab} 
        setActiveTab={props.setActiveTab}
        
        />
    </View>
  )
}

const HeaderButton = (props: { activeTab:any; setActiveTab:any; text: string | number | boolean; btnColor: string; textColor: string}) => (
        <TouchableOpacity style={{
            backgroundColor: props.activeTab === props.text ? 'black' : 'white',
            paddingVertical: 6,
            paddingHorizontal: 16,
            borderRadius: 30,
        }}
        onPress={() => props.setActiveTab?(props.text):null}
        >
            <Text style={{
                color: props.activeTab === props.text ? 'white' : 'black',
                fontSize: 15,
                fontWeight: '900'
            }}>
                {props.text}
            </Text>
        </TouchableOpacity>
);