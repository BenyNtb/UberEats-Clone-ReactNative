import { View, Text, Image } from 'react-native'
import React from 'react'

const image= 'https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80';
const title = 'The Best Burger in Town';
const description = 'American - Burger - €€ - 🔥 - 5 🔥 (7000+)';

export default function About() {
  return (
    <View>
      <RestaurantImage image={image}/>
      <RestaurantTitle title={title}/>
      <RestaurantDescription description={description}/>
    </View>
  )
}

const RestaurantImage = (props: { image: any; }) => (
  <Image source={{uri: props.image}} 
    style={{ 
      width: '100%', 
      height: 180
    }}
  />
);

const RestaurantTitle = (props: { title: any; }) => (
  <Text 
    style={{ 
      fontSize: 29, 
      fontWeight: '600', 
      marginTop: 10, 
      marginHorizontal: 15
    }}
  >
    {props.title}
  </Text>
);

const RestaurantDescription = (props: { description: any; }) => (
  <Text 
    style={{ 
      fontSize: 15, 
      fontWeight: '400', 
      marginTop: 10,
      marginHorizontal: 15
    }}
  >
      {props.description}
  </Text>
);