import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

interface Item {
    title: string;
    description: string;
    price: string;
    image: string;
}

interface CartState {
    selectedItems: {
        items: Item[];
    };
}

interface RootState {
  cartReducer: CartState;
}

interface ViewCartProps {
    navigation: any;
    restaurantName: any;
}

export default function ViewCart( ViewCartProps: any ) {
    const items = useSelector((state: any) => state.cartReducer.selectedItems.items);
    
    const total = items.map((item: { price: string; }) => 
    item.price ? Number(item.price.replace("$", "")) : 0
    ).reduce((prev: any, curr: any) => prev + curr, 0);


    const totalUSD = total.toLocaleString("en", {
        style: "currency",
        currency: "USD",
    });
    console.log(totalUSD);
    return (
        <>
        { total ? (
            <View style={{
                flex: 1,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
                position: 'absolute',
                bottom: 130,
                zIndex: 999,
            }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    width: '100%',
                }}>
                    <TouchableOpacity style={{
                    marginTop: 20,
                    backgroundColor: 'black',
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    padding: 15,
                    borderRadius: 30,
                    width: 300,
                    position: 'relative',
                    }}>
                        <Text style={{ color: 'white', fontSize: 20, marginRight: 30 }}>
                            View Cart
                        </Text>
                        <Text
                        style={{
                            color: 'white',
                            fontSize: 20,
                        }}>
                            {totalUSD}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            ) : ( 
                <></>
            )}
        </>
    );
}
