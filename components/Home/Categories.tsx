// import {ScrollView, View, Text, Image} from 'react-native'
// import React from 'react';

// const items = [
//     {
//         image: require('../../assets/images/shopping-bag.png'),
//         text: 'Pickup'
//     }, {
//         image: require('../../assets/images/soft-drink.png'),
//         text: 'Soft Drinks'
//     }, {
//         image: require('../../assets/images/bread.png'),
//         text: 'Bakery Items'
//     }, {
//         image: require('../../assets/images/fast-food.png'),
//         text: 'Fast Foods'
//     }, {
//         image: require('../../assets/images/deals.png'),
//         text: 'Deals'
//     }, {
//         image: require('../../assets/images/coffee.png'),
//         text: 'Coffee & Tea'
//     }, {
//         image: require('../../assets/images/desserts.png'),
//         text: 'Desserts'
//     }
// ];

// export default function Categories() {
//     return (
//         <View
//         style={{ marginTop: 5, backgroundColor: 'white', paddingVertical: 10, paddingLeft: 20}}
//         >
//             <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//                 {items.map((item, index) => (
//                 <View key= {index} style={{ alignItems: 'center', marginRight: 30}}>
//                     <Image
//                 source={item.image}
//                 style={{
//                 width: 50,
//                 height: 40,
//                 resizeMode: 'contain'
//             }}/>
//             <Text style={{ fontSize: 13, fontWeight: "900" }}>{item.text}</Text>
//                 </View>
//         ))}
//         </ScrollView>
//         </View>
        
//     )
// }


import { View, Text, FlatList, Image, ScrollView } from 'react-native'
import React from 'react'
import { Card } from 'react-native-elements'

const items = [
    {
        image: require('../../assets/images/sushi.png'),
        text: 'Sushi',
        color: '#85AAF2'
    },
    {
        image: require('../../assets/images/asian.png'),
        text: 'Asian',
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
        text: 'Vegetarian',
        color: '#8E9BAE'
    }
]

export default function Categories() {
    return (
      <View style={{ marginHorizontal: 20}}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Popular categories</Text>
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