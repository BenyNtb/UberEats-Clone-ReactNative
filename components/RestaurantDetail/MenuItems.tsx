import { View, ScrollView, Text, StyleSheet, Image } from 'react-native';
import { Divider } from 'react-native-elements';
import React from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';


const foods = [
  {
    title: "Sushi",
    description: "4 spring rolls with salmon - avocado, 6 california rolls salmon-avocado, 6 makis salmon-avocado",
    price: "$14.00",
    image:
      "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    title: "Pizza Margherita",
    description:
      "Tomato sauce, mozzarella, oregano",
    price: "$8.20",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=781&q=80",
  },
  {
    title: "Balanced Salad",
    description:
      "Light Rice, Black Beans, Chicken, Fajita Veggies, Fresh Tomato Salsa, Guacamole, and Extra Romaine Lettuce - 61g Carbs, 45g Protein, 33g Fat",
    price: "$14.50",
    image:
      "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photosV2/b0ba3e1b-d300-4b89-8d19-68efae27ef32-retina-large.jpg",
  },
  {
    title: "Burger",
    description:
      "3 premium ground brisket, chuck, and short rib smashed patties, American cheese and our dirty sauce on a Martin’s famous potato roll",
    price: "$18.50",
    image:
      "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/dac788a8-25e3-4d86-81d4-c4202b51a298-retina-large-jpeg",
  },
  {
    title: "Chicken Wings",
    description: "Korean fried chicken: Crispy, juicy, and minimally greasy",
    price: "$15.95",
    image:
      "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/383f45aa-9c2f-49ce-914e-6f201ecff0a9-retina-large.jpg",
  },
  // {
  //   title: "Burger",
  //   description:
  //     "3 premium ground brisket, chuck, and short rib smashed patties, American cheese and our dirty sauce on a Martin’s famous potato roll",
  //   price: "$18.50",
  //   image:
  //     "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/dac788a8-25e3-4d86-81d4-c4202b51a298-retina-large-jpeg",
  // },
];

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  titleStyle: {
    fontSize: 19,
    fontWeight: '600',
  }
})

export default function MenuItems() {
  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
    {foods.map((food, index) => (
    <View key={index}>
       <View style={styles.menuItemStyle}>
        <BouncyCheckbox
        fillColor='#06C167'/>
          <FoodInfo food={food}/>
          <FoodImage food={food} image={undefined} />
        </View>
        <Divider 
          width={0.5}  
          orientation='vertical' 
          style={{ marginHorizontal: 20 }} 
          />
    </View>
    ))}
    </ScrollView>
  );
}

const FoodInfo = (props: { food: { title: any; description: any; price: any; }; }) => (
  <View style={{ width: 240, justifyContent: 'space-evenly' }}>
    <Text style={styles.titleStyle}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = (props: {food: any; image: any; }) => (
  <View>
    <Image source={{uri: (props.food || {}).image}} 
      style={{ 
        width: 100, 
        height: 100,
        borderRadius: 8
      }}
    />
  </View>
  
);