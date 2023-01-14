import { View, ScrollView, Text, StyleSheet, Image } from 'react-native';
import { Divider } from 'react-native-elements';
import React, { useState } from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { useDispatch, useSelector } from 'react-redux';
import RestaurantDetail from '../../screens/RestaurantDetail';






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

interface Item {
  title: string;
  description: string;
  price: string;
  image?: string;
  reviews?: string;
  review_count?: string;
}


interface Props{
  foods: Item[],
  restaurantName:string,
  checkboxValue: boolean,
  hideCheckbox: boolean,
  marginLeft: number,

}

export default function MenuItems({
  foods, 
  restaurantName, 
  hideCheckbox, 
  marginLeft
}: Props
  
  ) {
    const dispatch = useDispatch();
    
    const selectItem = (item: Item, checkboxValue: boolean) => dispatch({
      type: 'ADD_TO_CART', 
      payload: {
        ...item,
        restaurantName: restaurantName,
        checkboxValue: checkboxValue,
      }
    });
    
    

    const cartItems = useSelector((state) => state.cartReducer.selectedItems.items);

  // console.log("state before useSelector",state)
  const isFoodInCart = (_food: { title: any; }, cartItems: any[]) => 
    Boolean(cartItems.find((item: any) => item.title === _food.title));
    console.log("cartItems", cartItems);
    
    const [isChecked, setIsChecked] = useState(false);
  const selectedItems = cartItems.filter((item: any) => item.restaurantName === restaurantName);
  
  // console.log(foods)
  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
    {foods.map((food: { title: any; description: any; price: any; image?: string;  }, index: React.Key | null | undefined) => (
    <View key={index}>
        <View style={styles.menuItemStyle}>
          { hideCheckbox ? (
          <></>
          ) : ( 
          <BouncyCheckbox
            fillColor='#06C167'
            onPress={(checkboxValue) => selectItem(food, checkboxValue)}
            isChecked={isFoodInCart(food, cartItems)}
            // isChecked={isChecked}
          />
          )}
            <FoodInfo food={food}/>
            <FoodImage food={food} marginLeft={ marginLeft ? marginLeft : 0 }/>
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

const FoodInfo = (props: { food: { title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; description: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; price: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }; }) => (
  <View style={{ width: 240, justifyContent: 'space-evenly' }}>
    <Text style={styles.titleStyle}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
    {/* <Text>{props.food.reviews}</Text> */}
  </View>
);

const FoodImage = (props: { food: any; marginLeft: number; }) => (
  <View>
    <Image source={{uri: (props.food || {}).image}} 
      style={{ 
        width: 100, 
        height: 100,
        borderRadius: 8,
        marginLeft: props.marginLeft,
      }}
    />
  </View>
  
);