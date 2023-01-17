import { View, ScrollView, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-elements';
import React, { useState } from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { useDispatch, useSelector } from 'react-redux';
import RestaurantDetail from '../../screens/RestaurantDetail';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';






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



export default function MenuItems({ foods, restaurantName, hideCheckbox, marginLeft}: Props) {
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
  
  return (
    <ScrollView>
      <View style={{ marginHorizontal: 30, marginBottom: 15 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Combo Meal</Text>
      </View>  
      <ScrollView showsHorizontalScrollIndicator={false}>
      {foods.map((food: { title: any; description: any; price: any; image?: string;  }, index: React.Key | null | undefined) => {
        const [randomCalories, setRandomCalories] = useState(Math.floor(Math.random() * (2000 - 1000 + 1) + 1000));
        return (
        <View key={index}>
            <View >
              { hideCheckbox ? (
              <></>
              ) : ( 
              <></>
              )}
                <View style={{ 
                        flexDirection: 'row', 
                        alignItems: 'center', 
                        marginBottom: 10, 
                        padding: 10, 
                        backgroundColor: 'white', 
                        borderRadius: 20,
                        width: 370,
                        height: 150,
                        alignSelf: 'center',
                        margin: 10,
                        
                        }}
                    >
                      
                    <Image 
                      source={food.image ? {uri: food.image} : undefined}
                      style={{ width: 100, height: 100, borderRadius: 20, backgroundColor: 'grey' }}
                    />
                    <View style={{ marginLeft: 10, flex: 1 }}>
                      <Text numberOfLines={2} style={{ fontWeight: 'bold', fontSize: 18, bottom: 15, width: 130 }}>{food.title}</Text>
                      <Text numberOfLines={2} style={{color: 'grey', width: 140}}>{food.description}</Text>
                      <Text style={{ fontWeight: 'bold', fontSize: 18, top: 10 }}>{food.price}</Text>
                    </View> 

                    <View style={{
                      alignItems: 'center',
                      backgroundColor: '#C7F6B6',
                      height: 25,
                      width: 75,
                      bottom: 40,
                      left: 50,
                      borderRadius: 5,
                      justifyContent: 'center'
                      }}
                      >
                        <Text style={{ color: 'darkgreen', fontWeight: '600', textAlign: 'center'}}> {randomCalories} Cal.</Text>
                      </View>
                  <BouncyCheckbox
                    fillColor='#06C167'
                    unfillColor="#06C167"
                    iconComponent={<FontAwesome5 name="plus" size={20} color="white" />}
                    size={50}
                    onPress={(checkboxValue) => selectItem(food, checkboxValue)}
                    isChecked={isFoodInCart(food, cartItems)}
                    style={{ top: 40, left: 10 }}
                  />
                </View>
              </View>
            </View>
        )})}
      </ScrollView>
    </ScrollView>
  );
}

// const FoodInfo = (props: { food: { title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; description: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; price: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }; }) => (
//   <View style={{ width: 240, justifyContent: 'space-evenly' }}>
//     <Text style={styles.titleStyle}>{props.food.title}</Text>
//     <Text>{props.food.description}</Text>
//     <Text>{props.food.price}</Text>
//     {/* <Text>{props.food.reviews}</Text> */}
//   </View>
// );

// const FoodImage = (props: { food: any; marginLeft: number; }) => (
//   <View>
//     <Image source={{uri: (props.food || {}).image}} 
//       style={{ 
//         width: 100, 
//         height: 100,
//         borderRadius: 8,
//         marginLeft: props.marginLeft,
//       }}
//     />
//   </View>
  
// );

