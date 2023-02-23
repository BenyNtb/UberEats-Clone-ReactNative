import i18n from 'i18n-js';
import { en, fr } from "../localizations";
import * as Localization from "expo-localization";
import { View, Text, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native';
import { Button, Image, Input } from 'react-native-elements';
import { LocalizationContext } from '../LocalizationContext';

export default function Promo() {
    const navigation = useNavigation();
    const { locale, setLocale } = React.useContext(LocalizationContext);
    i18n.fallbacks = true;
    i18n.translations = { en, fr };
    i18n.locale = locale;

    const handleSwitchToFrench = () => {
        setLocale('fr');
    };

  return (
    <>
        <SafeAreaView style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', margin: 80 }}>
        <FontAwesome5 name="chevron-left" size={30} color="black" style={{ right: 110 }} onPress={() => navigation.goBack()} />
        <Text style={{ fontSize: 19, fontWeight: 'bold' }}>{i18n.t('PromoCode')}</Text>
        </SafeAreaView>
        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', margin: 80 }}>
            <Image source={require('../assets/images/promo.png')} style={{ width: 200, height: 200 }} />
        </View>
        <Input placeholder="Enter Promo Code" style={{ borderWidth: 1, borderRadius: 15, height: 70, borderColor: '#5A5FBF' }}  />

        <View style={{ justifyContent: 'center', alignItems: 'center', margin: 40 }}>
            <View style={{ width: 220, height: 75, backgroundColor: '#1A1B26', borderRadius: 15, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>{i18n.t('Apply')}</Text>
            </View>
        </View>
    </>
  )
}