import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


export const localRestaurants = [
    {
        name: "Le Conteur",
        image_url:
            "https://lh3.googleusercontent.com/p/AF1QipP3JscilNXEPD1GoROFwIIv-Yh3kjhXYZU14cDt=s680-w680-h510",
        categories: ["Middle Eastern"],
        price: "€€",
        reviews: 466,
        rating: 4.5,
    },
    {
        name: "A L'Angolo",
        image_url:
            "https://lh3.googleusercontent.com/p/AF1QipOk7f5xHMWaEHVoyXfiDUHYgzjclXGPSOioQsEn=s680-w680-h510",
        categories: ["Italian", "Pizzeria"],
        price: "€€",
        reviews: 666,
        rating: 4.5,
    },
    {
        name: "Aux Armes de Bruxelles",
        image_url:
        "https://lh3.googleusercontent.com/p/AF1QipPuS_2rHnjY0MHYZ8eyOxJdBNDlZpcayjoCWMSH=s680-w680-h510",
        categories: ["Belgian", "Flemish"],
        price: "€€",
        reviews: 2200,
        rating: 4.1,
    },
    {
        name: "Kabuki",
        image_url:
            "https://lh3.googleusercontent.com/p/AF1QipOQrRO6anBHhzLo_4X8_CG_Rww8Si8EOeNIs6ra=s680-w680-h510",
        categories: ["Japanese", "Sushi"],
        price: "€€",
        reviews: 2300,
        rating: 4.0,
    },
];


export default function RestaurantItem() {
    return (
        <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
            {localRestaurants.map((restaurant, index) => (
            <View 
            key={index}
            style={{
            marginTop: 10,
            padding: 15,
            backgroundColor: 'white'
            }}>
            <RestaurantImage image={restaurant.image_url}/>
            <RestaurantInfo name={restaurant.name} 
            rating={restaurant.rating}
            />
            </View>
            ))}
        </TouchableOpacity>
        
    )
}

const RestaurantImage = (props: { image: any; }) => (
    <>
        
    <Image 
        source={{
            uri: props.image
        }}
        style={{ width: '100%', height: 180}}
    />
    <TouchableOpacity 
        style={{
            position: 'absolute', right: 20, top: 20
            }}>
        <MaterialCommunityIcons  name='heart-outline' size={25} color='white'/>
    </TouchableOpacity>
    </>
);

const RestaurantInfo = (props: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; rating: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => (
    <View style={{ 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginTop: 10
        }}>
        <View>
            <Text style={{ 
                fontSize: 15,
                fontWeight: 'bold'
                }}>{props.name}</Text>
            <Text style={{
                fontSize: 13,
                color: 'gray'
            }}>30-45 min</Text>
        </View>
        <View style={{
            backgroundColor: '#eee',
            height: 30,
            width: 30,
            alignItems: 'center',
            borderRadius: 15,
            justifyContent: 'center'
        }}>
            <Text >{props.rating}</Text>
        </View>
        
    </View>
);