import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar'

export default function Home() {
  return (
    <SafeAreaView style={{backgroundColor:'#eee', flex: 1}}>
      <View style={{backgroundColor: 'white', padding: 15}}>
        <HeaderTabs activeTab={undefined} setActiveTab={undefined}/>
        <SearchBar />
      </View>
    </SafeAreaView>
  )
}