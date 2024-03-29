import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { Divider } from 'react-native-elements';
import HeaderTabs from '../components/Home/HeaderTabs';
import SearchBar from '../components/Home/SearchBar';
import Categories from '../components/Home/Categories';
import RestaurantItems, { localRestaurants }  from '../components/Home/RestaurantItems';

import BottomTabs from '../components/Home/BottomTabs';

interface HeaderTabsProps {
  activeTab: any;
  setActiveTab: (tab: any) => void;
}

interface SearchBarProps {
  cityHandler: (city: string) => void;
}

interface Restaurant {
  name: string;
  rating: number;
  categories: string[];
  price: string;
  reviews: number;
  review_count: any;
  image_url: string;
}

interface RestaurantItemProps {
  restaurantData: Restaurant[];
}

const YELP_API_KEY = 'tPhwen_ufjZd9Oz6dn-RqfiJnljcg-_reYl49JJXaIp01F8xkTxJTv6ald7dpiL-vAyTNR7EiJn5o7yhjxODuGY7n1Ij4-THXmQCU21j5CUuEEKfnEbkSDlYEdy5Y3Yx';

export default function Home({navigation}: {navigation: any}) {
  const [restaurantData, setRestaurantData] = useState<Restaurant[]>(localRestaurants);
  const [city, setCity] = useState('New York');
  const [activeTab, setActiveTab] = useState('Delivery');
  const getRestaurantFromYelp = async () => {
  const yelpUrl= `https://api.yelp.com/v3/transactions/delivery/search?location=${city}`;
  const apiOptions = {
    headers: {
      Authorization: `Bearer ${YELP_API_KEY}`,
    },
  };
  return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantData(
          json.businesses.filter((business: { transactions: string | string[] }) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
  };
  console.log(city);

  useEffect(() => {
    getRestaurantFromYelp().catch((error) => {
      console.error(error);
    });;
  }, [city, activeTab]);
  useEffect(() => {
    const fetchData = async () => {
      await getRestaurantFromYelp();
    };
    fetchData();
  }, [city, activeTab]);
  console.log('Restaurant data passed to RestaurantItems:', restaurantData);
  
  return (
    <SafeAreaView style={{backgroundColor:'#F7F7F7', flex: 1}}>
      <View style={{backgroundColor: '#F7F7F7', padding: 15}}>
        <HeaderTabs cityHandler={setCity} name={''} style={{ zIndex: 999 }} />
        {/* <SearchBar cityHandler={setCity}/> */}
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{ zIndex: -1 }}>
        <Categories />
        <RestaurantItems  {...{restaurantData,navigation}} />
      </ScrollView>
      <Divider />
        <BottomTabs />
    </SafeAreaView>
  )
}
