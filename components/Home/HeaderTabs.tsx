import i18n from 'i18n-js';
import { en, fr } from "../../localizations";
import * as Localization from "expo-localization";
import { View, Text, TouchableOpacity, Animated, Easing } from 'react-native'
import React, { useState } from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Banner } from 'react-native-paper';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

// const { t } = i18n;

const Icon = (props: { icon: string; onPress?: () => void }) => (
  <TouchableOpacity onPress={props.onPress} >
      <View>
      <FontAwesome5
          name={props.icon}
          size={25}
          style={{
          marginBottom: 3,
          alignSelf: 'flex-end',
          top: -40,
          right: 20,
          }}
      />
      </View>
  </TouchableOpacity>
)

const SearchBanner = () => {
  const [locale, setLocale] = useState(Localization.locale);
  i18n.fallbacks = true;
  i18n.translations = { en, fr };
  i18n.locale = locale;
  i18n.locale = "en";
  
  return (
      <Banner
          visible={true}
          icon={({size}) => (
              <FontAwesome5
                  name="location-arrow"
                  size={20}
                  color="#5F61B8"
              />
          )}
          style={{
              backgroundColor: '#fff',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 20,
          }}>
            
            <Text>
              {i18n.t('CurrentLocation')} {"\n"}
            </Text>
            <View style={{width: 230}}>
              <Text ellipsizeMode='tail' numberOfLines={1} style={{ color: 'black', fontWeight: 'bold' }}>
                175 Greenwich St, New York, United States
              </Text>
            </View>
            <View style={{ left: 30, bottom: 30 }}>
              <FontAwesome5
                  name='chevron-right'
                  size={20}
                  style={{
                      alignSelf: 'flex-end',
                      color: '#5F61B8',
                      // marginRight: 70,
                      left: 90,
                  }}
              />
            </View>
      </Banner>
  );
};


export default function HeaderTabs({cityHandler} : { cityHandler: any }) {
  const [slideAnim] = useState(new Animated.Value(0));
  const [isSlide, setIsSlide] = useState(false);

  const toggleSearch = () => {
    if (isSlide) {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: true
      }).start();
      setIsSlide(false);
    } else {
      Animated.timing(slideAnim, {
        toValue: 1,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: true
      }).start();
      setIsSlide(true);
    }
  }
  const [locale, setLocale] = useState(Localization.locale);
  
  i18n.fallbacks = true;
  i18n.translations = { en, fr };
  i18n.locale = locale;
  i18n.locale = "en";

  return (
    <>
      <View style={{ left: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{i18n.t('Hello')} Megan👋</Text>
        <Text style={{ fontWeight: '500' }}>{i18n.t('Delivering')}</Text>
      </View>
        <Icon icon='search' onPress={toggleSearch} />
        <SearchBanner />
        <Animated.View
          style={{
            position: 'absolute',
            bottom: 90,
            left: 0,
            opacity: slideAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1]
            }),
            zIndex: 1
          }}
        >
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ backgroundColor: '#fff', width: '90%', height: '50%', borderRadius: 20 }}>
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <GooglePlacesAutocomplete
                placeholder='Search Restaurants'
                query={{
                key: "AIzaSyBkfSuG-jyDRWnfC6FJqshnki840_vXdnM"
                }}
                currentLocation={true}
                currentLocationLabel='Current location'
                onPress={(data, details = null) => {
                const city = data.description.split(",")[0];
                cityHandler(city);
                }}
                styles={{
                
                textInput: {
                    borderRadius: 15,
                    fontWeight: '400',
                    marginTop: 7,
                    height: 70,
                    left: 10,
                    justifyContent: 'center',
                    alignContent: 'center',
                    fontSize: 18,
                    paddingLeft: 50,
                    borderWidth: 1,
                    borderColor: '#F26E50',
                },
                textInputContainer: {
                    borderRadius: 20,
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginRight: 10,
                    width: 320,
                    bottom: 40
                }
                }}
              />
              </View>
            </View>
          </View>
        </Animated.View>
    </>
  )
}


