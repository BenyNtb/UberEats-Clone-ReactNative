import { View, Text, Image } from 'react-native'
import React from 'react'

// const yelpRestaurantInfo = {
//   name: 'The Best Burger in Town',
//   image: 'https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
//   price: '$$',
//   reviews: 7000,
//   rating: 5,
//   categories: [{title: 'American'}, {title: 'Burger'}],
// };


// console.log(About)
export default function About(props: any) {
  // console.log('props: ', props);
  // const {name, image, price, reviews, rating, categories} = props;
  const name = props?.name;
  const image = props?.image;
  const price = props?.price;
  const reviews = props?.reviews;
  const rating = props?.rating;
  const categories = props?.categories;

  // console.log('props: ', props);
  // categories ? console.log('categories: ', categories) : console.log('no categories');

  const formattedCategories = categories ? categories.map((cat: { title: any; }) => cat.title).join(' • ') : '';
  // const description = `${formattedCategories && formattedCategories + " • "} ${price && " • " + price}  ${rating && " • 🎫 " + rating + "⭐"} ${reviews && "(" + reviews + "+)"}`;
  const description = `${formattedCategories ?? ''} ${price ?? ''}  ${rating ?? ''} ${reviews ?? ''}`;



  return (
    <View>
      <RestaurantImage image={image}/>
      <RestaurantName name={name}/>
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

const RestaurantName = (props: { name: any; }) => (
  <Text 
    style={{ 
      fontSize: 29, 
      fontWeight: '600', 
      marginTop: 10, 
      marginHorizontal: 15
    }}
  >
    {props.name}
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