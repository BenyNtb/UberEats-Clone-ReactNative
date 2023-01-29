import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import { useNavigation } from '@react-navigation/native'

export default function BottomTabs() {
  const navigation = useNavigation()
  const [activeTab, setActiveTab] = useState('Home');

  const handlePress = (route: string) => {
    setActiveTab(route);
    navigation.navigate(route);
  };

  const getColor = (route: string) => route === activeTab ? '#ED764C' : '#8E9BAE';

  return (
    <View style={{ flexDirection: 'row', margin: 10, marginBottom: 0, marginHorizontal: 50, justifyContent: "space-between" }}>
      <Icon icon='home' color={getColor('Home')} onPress={() => handlePress('Home')} />
      <Icon icon='search' color={getColor('Search')} onPress={() => handlePress('Search')} />
      <Icon icon='percent' color={getColor('Promo')} onPress={() => handlePress('Promo')} />
      <Icon icon='user' color={getColor('Account')} onPress={() => handlePress('Account')} />
    </View>
  );
}

const Icon = (props: { icon: string; color: string, onPress?: () => void }) => (
  <TouchableOpacity onPress={props.onPress} >
    <View>
      <FontAwesome5
        name={props.icon}
        size={25}
        style={{
          marginBottom: 3,
          bottom: -10,
          alignSelf: 'center',
          color: props.color
        }}
      />
    </View>
  </TouchableOpacity>
);

