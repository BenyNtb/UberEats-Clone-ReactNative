import { View, Text, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import LottieView from 'lottie-react-native';
import MenuItems from '../components/RestaurantDetail/MenuItems';


interface Item {
    title: string;
    description: string;
    price: string;
    image: string;
    reviews: number;
}


interface RootState {
    cartReducer: {
      selectedItems: {
          items: Item[];
      };
    };
  }


export default function OrderCompleted() {
    const [lastOrder, setLastOrder] = useState({
        items: [
            {
                title: "Burger",
                description:
                  "3 premium ground brisket, chuck, and short rib smashed patties, American cheese and our dirty sauce on a Martin’s famous potato roll",
                price: "$18.50",
                image:
                  "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/dac788a8-25e3-4d86-81d4-c4202b51a298-retina-large-jpeg",
              },
        ],
    })
    const {items, restaurantName} = useSelector((state: RootState) => state.cartReducer.selectedItems);
    // console.log("items after useSelector", items)
    const total = items.map((item: { price: string; }) => 
    item.price ? Number(item.price.replace("$", "")) : 0
    ).reduce((prev: any, curr: any) => prev + curr, 0);


    const totalUSD = total.toLocaleString("en", {
        style: "currency",
        currency: "USD",
    });

    useEffect(() => {
        setLastOrder({
            items: items,
        });
    }, [items]);

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: 'white',
        }}>
            <View style={{
                margin: 15,
                alignItems: 'center',
                height: '100%',
                }}
            >
                <LottieView  style={{
                    height: 100,
                    alignSelf: 'center',
                    marginBottom: 30,
                    }}
                    autoPlay
                    speed={1}
                    loop={false}
                    source = {require('../assets/animations/check-mark.json')}
                />
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                    }}
                    >
                        Your order at {restaurantName} has been placed for {totalUSD}
                    </Text>
                <ScrollView>
                    <MenuItems
                        foods={lastOrder.items}
                        hideCheckbox={true}
                        marginLeft={10} restaurantName={''} checkboxValue={false}
                    />
                    <LottieView  style={{
                        height: 200,
                        alignSelf: 'center',
                        marginBottom: 30,
                    }}
                    autoPlay
                    speed={1}
                    source = {require('../assets/animations/cooking.json')}
                    />
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}