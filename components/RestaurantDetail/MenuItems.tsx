import { View, ScrollView, Text, StyleSheet, Image, TouchableOpacity, LayoutAnimation } from 'react-native';
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
  },
  selectedItemsContainer: {
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    width: '90%',
    alignSelf: 'center',
  },
  selectedItemsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  selectedItemName: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  selectedItemAmount: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  trashIcon: {
    marginRight: 10,
  },
});

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

  const selectItem = (item: Item, checkboxValue: boolean, quantity: number) => dispatch({
      type: 'ADD_TO_CART', 
      payload: {
        ...item,
        restaurantName: restaurantName,
        checkboxValue: checkboxValue,
        quantity: quantity
      }
  });
  
  const cartItems = useSelector((state) => state.cartReducer.selectedItems.items);
  
  const isFoodInCart = (_food: { title: any; }, cartItems: any[]) => 
      Boolean(cartItems.find((item: any) => item.title === _food.title));
  
  const [isChecked, setIsChecked] = useState(false);
  const selectedItems = cartItems.filter((item: any) => item.restaurantName === restaurantName);
  
  const [quantity, setQuantity] = useState(0);
  
  const handleCheckboxPress = (item: Item) => {
      LayoutAnimation.configureNext({
          duration: 500,
          update: {
              type: LayoutAnimation.Types.easeInEaseOut
          }
      });
  
      setIsChecked(!isChecked);
      setQuantity(prevQuantity => prevQuantity + 1);
      selectItem(item, true, quantity + 1);
  };
  
  const handleTrashPress = (item: Item) => {
      LayoutAnimation.configureNext({
          duration: 500,
          update: {
              type: LayoutAnimation.Types.easeInEaseOut
          }
      });
      setIsChecked(false);
      setQuantity(0);
      selectItem(item, true, quantity - 1);
      dispatch({ type: 'REMOVE_FROM_CART', payload: item });
  };
  
  const handlePlusPress = (item: Item) => {
      setQuantity(quantity + 1);
      selectItem(item, true, quantity + 1);
  };
  
  
  



  
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
                    // onPress={handleCheckboxPress => selectItem(food, true, quantity)}
                    isChecked={isFoodInCart(food, cartItems)}
                    style={{ top: 40, left: 10 }}
                    onPress={() => handleCheckboxPress(food)}
                  />
                </View>
                {isChecked && (
      <View style={{backgroundColor: '#F8F8F8', width: 370, height: 90, bottom: 25, left: 28, zIndex: -1, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
        <View style={{  flexDirection: 'row',  top: 30 }}>
          <Text style={{ color: 'red', marginHorizontal: 10, fontWeight: 'bold' }}> {quantity}X </Text>
          <View style={{ flexDirection: 'column' }}>
            <Text style={{ fontWeight: 'bold' }}>{food.title}</Text>
            <Text>{food.price}</Text>
          </View>
        </View>
        <View style={{ justifyContent: 'space-between', flexDirection: 'row', left: 230, width: 130, height: 45, backgroundColor: 'white', borderRadius: 20, borderColor: '#F2F2F2', borderWidth: 2 }}>
          <View style={{ width: 30, height: 30, backgroundColor: '#ECB5B1', borderRadius: 50, justifyContent: 'center', alignItems: 'center', top: 5, marginHorizontal: 5 }} >
            <FontAwesome5 name='trash' color='red' size={15} onPress={() => handleTrashPress(food)} />
          </View>
            <Text style={{ fontSize: 18, top: 5 }}>
              {quantity}
            </Text>
            <View style={{ width: 30, height: 30, backgroundColor: '#DBE2F5', borderRadius: 50, justifyContent: 'center', alignItems: 'center', top: 5, marginHorizontal: 5 }} >
              <FontAwesome5 name='plus' color='#5A5FBF' size={15} light onPress={() => handlePlusPress(food)} />
            </View>
          </View>
                </View>
              )}
            </View>
          </View>
        );
      })}
      </ScrollView>
    </ScrollView>
  );
}


