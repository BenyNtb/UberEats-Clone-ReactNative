import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar'
import Categories from '../components/Categories'
import RestaurantItem from '../components/RestaurantItems'

interface HeaderTabsProps {
  activeTab: any;
  setActiveTab: (tab: any) => void;
}

interface SearchBarProps {
  cityHandler: (city: string) => void;
}

export default function Home() {
  const [activeTab, setActiveTab] = useState('Delivery');

  return (
    <SafeAreaView style={{backgroundColor:'#eee', flex: 1}}>
      <View style={{backgroundColor: 'white', padding: 15}}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={undefined} />
      </View>
      {/* @ts-ignore */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItem />
      </ScrollView>
    </SafeAreaView>
  )
}
