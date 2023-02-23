import i18n from 'i18n-js';
import { en, fr } from "../../localizations";
import * as Localization from "expo-localization";
import { View, Text, FlatList, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { LocalizationContext } from '../../LocalizationContext';

const items = [
    {
        image: require('../../assets/images/sushi.png'),
        text: 'Sushi',
        color: '#85AAF2'
    },
    {
        image: require('../../assets/images/asian.png'),
        text: i18n.t('Asian'),
        color: '#9FD6B7'
    },
    {
        image: require('../../assets/images/burger.png'),
        text: 'Burger',
        color: '#F2C063'
    },
    {
        image: require('../../assets/images/pizza.png'),
        text: 'Pizza',
        color: '#F26E50'
    },
    {
        image: require('../../assets/images/taco.png'),
        text: 'Taco',
        color: '#191A26'
    },
    {
        image: require('../../assets/images/vegetarian.png'),
        text: i18n.t('Vegetarian'),
        color: '#8E9BAE'
    }
];


export default function Categories() {
  // const [locale, setLocale] = useState(Localization.locale);
  // i18n.fallbacks = true;
  // i18n.translations = { en, fr };
  // i18n.locale = locale;
  // i18n.locale = "en";
  const { locale, setLocale } = React.useContext(LocalizationContext);
i18n.fallbacks = true;
i18n.translations = { en, fr };
i18n.locale = locale;

const handleSwitchToFrench = () => {
  setLocale('fr');
};

    return (
      <View style={{ marginHorizontal: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{i18n.t('PopularCategories')}</Text>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={items}
          renderItem={({ item }) => (
            <View style={{backgroundColor: '#F7F7F7'}}>
            <View style={{ flex: 1, alignItems: 'center', margin: 10, backgroundColor: item.color, padding: 15, borderRadius: 10, width: 160, height: 100, overflow: 'hidden' }}>
              <Image source={item.image} style={{ width: 80, height: 80, top: -25, left: 50 }} />
              <Text style={{ fontSize: 18, marginTop: 5, bottom: 30, color: 'white', fontWeight: '300', justifyContent: 'flex-start', alignSelf: 'flex-start' }}>{item.text}</Text>
            </View>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    )
  }