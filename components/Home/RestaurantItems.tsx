// import { View, Text, Image, TouchableOpacity } from 'react-native'
// import React from 'react';
// import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// import { useNavigation } from '@react-navigation/native';
// import { StackNavigationProp } from '@react-navigation/stack';




// export const localRestaurants = [
//     {
//         name: "Le Conteur",
//         image_url:
//             "https://lh3.googleusercontent.com/p/AF1QipP3JscilNXEPD1GoROFwIIv-Yh3kjhXYZU14cDt=s680-w680-h510",
//         categories: ["Middle Eastern"],
//         price: "€€",
//         reviews: 466,
//         rating: 4.5,
//     },
//     {
//         name: "A L'Angolo",
//         image_url:
//             "https://lh3.googleusercontent.com/p/AF1QipOk7f5xHMWaEHVoyXfiDUHYgzjclXGPSOioQsEn=s680-w680-h510",
//         categories: ["Italian", "Pizzeria"],
//         price: "€€",
//         reviews: 666,
//         rating: 4.5,
//     },
//     {
//         name: "Aux Armes de Bruxelles",
//         image_url:
//         "https://lh3.googleusercontent.com/p/AF1QipPuS_2rHnjY0MHYZ8eyOxJdBNDlZpcayjoCWMSH=s680-w680-h510",
//         categories: ["Belgian", "Flemish"],
//         price: "€€",
//         reviews: 2200,
//         rating: 4.1,
//     },
//     {
//         name: "Kabuki",
//         image_url:
//             "https://lh3.googleusercontent.com/p/AF1QipOQrRO6anBHhzLo_4X8_CG_Rww8Si8EOeNIs6ra=s680-w680-h510",
//         categories: ["Japanese", "Sushi"],
//         price: "€€",
//         reviews: 2300,
//         rating: 4.0,
//     },
// ];


// interface RestaurantItemProps {
//     restaurantData: Restaurant[];
//   }

//   interface Restaurant {
//     review_count: any;
//     name: string;
//     rating: number;
//     categories: string[];
//     price: string;
//     reviews: number;
//     image_url: string;
//   }
//   export type RootStackParamList = {
//     RestaurantDetail: any | undefined;
//   };


//   export default function RestaurantItems(props: RestaurantItemProps) {
//       const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
//     // const navigation = useNavigation();
//     console.log(props.restaurantData)
//     return (
//         <>
//             {props.restaurantData.map((restaurant, index) => (
//                 <TouchableOpacity
//                 key={index}
//                 onPress={() => navigation.navigate('RestaurantDetail', {
//                     name: restaurant.name,
//                     image: restaurant.image_url,
//                     rating: restaurant.rating,
//                     categories: restaurant.categories,
//                     price: restaurant.price,
//                     reviews: restaurant.review_count,
//                 }
//                 )}
//             >
//                 <View 
//                 style={{
//                 marginTop: 10,
//                 padding: 15,
//                 backgroundColor: 'white'
//                 }}>
//                 <RestaurantImage image={restaurant.image_url}/>
//                 <RestaurantInfo name={restaurant.name} 
//                 rating={restaurant.rating}
//                 reviews={restaurant.review_count}
//                 />
//                 </View>
//             </TouchableOpacity>
//                 ))}
//         </>
//     )
// }

// const RestaurantImage = (props: { image: any; }) => (
//     <>
        
//     <Image 
//         source={{
//             uri: props.image
//         }}
//         style={{ width: '100%', height: 180}}
//         />
//     <TouchableOpacity 
//         style={{
//             position: 'absolute', right: 20, top: 20
//         }}>
//         <MaterialCommunityIcons  name='heart-outline' size={25} color='white'/>
//     </TouchableOpacity>
//     </>
// );


// const RestaurantInfo = (props : any) => (
//     <View style={{ 
//         flexDirection: 'row', 
//         justifyContent: 'space-between', 
//         alignItems: 'center', 
//         marginTop: 10
//         }}
//         >
//         <View>
//             <Text style={{ 
//                 fontSize: 15,
//                 fontWeight: 'bold'
//                 }}>{props.name}</Text>
//             <Text style={{
//                 fontSize: 13,
//                 color: 'gray'
//             }}>30-45 min</Text>
//         </View>
//         <View style={{
//             backgroundColor: '#eee',
//             height: 30,
//             width: 30,
//             alignItems: 'center',
//             borderRadius: 15,
//             justifyContent: 'center'
//         }}>
//             <Text >{props.rating}</Text>
//             <Text>{props.review_count}</Text>
//         </View>
        
//     </View>
// );


import { View, Text, TouchableOpacity, Image, ScrollView, ColorValue } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

interface RestaurantItemProps {
    restaurantData: Restaurant[];
  }

  interface Restaurant {
    review_count: any;
    name: string;
    rating: number;
    categories: string[];
    price: string;
    reviews: number;
    image_url: string;
    image: any;
  }
  export type RootStackParamList = {
    RestaurantDetail: any | undefined;
  };

export const localRestaurants = [
    {
        name: "McDonald's",
        image_url: "https://res.cloudinary.com/drlqmndiv/image/upload/v1673821555/mcdonalds_r1iyr2.jpg",
        logo: "https://res.cloudinary.com/drlqmndiv/image/upload/v1673823178/McDonalds_logo_PNG19_mvibvf.png",
        categories: ["Burgers", "Fast Food"],
        price: "€€",
        reviews: 466,
        rating: 4.0,
        color: "#EA0000"
    },
    {
        name: "Subway",
        image_url: "https://res.cloudinary.com/drlqmndiv/image/upload/v1673821554/subway_wvcjzg.jpg",
        logo: "https://res.cloudinary.com/drlqmndiv/image/upload/v1673823178/Subway_logo_PNG5_znk3jp.png",
        categories: ["Sandwiches", "Fast Food"],
        price: "€€",
        reviews: 666,
        rating: 4.5,
        color: "#ADBF21"
    },
    {
        name: "Starbucks",
        image_url: "https://res.cloudinary.com/drlqmndiv/image/upload/v1673821555/starbucks_svgldg.png",
        logo: "https://res.cloudinary.com/drlqmndiv/image/upload/v1673823178/Starbucks_logo_PNG11_cp2ycx.png",
        categories: ["Cafe", "Coffee"],
        price: "€€",
        reviews: 2200,
        rating: 4.1,
        color: "#95BFB3"
    },
    {
        name: "Quick",
        image_url: "https://res.cloudinary.com/drlqmndiv/image/upload/v1673821553/quick_x274zt.jpg",
        logo: "https://res.cloudinary.com/drlqmndiv/image/upload/v1673823219/quick-1-logo-png-transparent_zqwcgk.png",
        categories: ["Burgers", "Fast Food"],
        price: "€€",
        reviews: 2300,
        rating: 4.0,
        color: "#D98494"
    },
    {
        name: "O'Tacos",
        image_url: "https://res.cloudinary.com/drlqmndiv/image/upload/v1673821555/otacos_lbbpg0.jpg",
        logo: "https://res.cloudinary.com/drlqmndiv/image/upload/v1673823465/1571829223-logoavant_llrpg3.avif",
        categories: ["Mexican", "Fast Food"],
        price: "€€",
        reviews: 2300,
        rating: 4.0,
        color: "#F26E50"
    },
    {
        name: "Burger King",
        image_url: "https://res.cloudinary.com/drlqmndiv/image/upload/v1673821554/burgerking_hl59yq.jpg",
        logo: "https://res.cloudinary.com/drlqmndiv/image/upload/v1673823178/pngegg_ikhbgh.png",
        categories: ["Burgers", "Fast Food"],
        price: "€€",
        reviews: 2300,
        rating: 4.0,
        color: "#00A3FF"
    },
    {
        name: "Taco Bell",
        image_url: "https://res.cloudinary.com/drlqmndiv/image/upload/v1673821554/tacobell_wvhedh.jpg",
        logo: "https://res.cloudinary.com/drlqmndiv/image/upload/v1673823178/tacologo_ykuota.png",
        categories: ["Mexican", "Fast Food"],
        price: "€€",
        reviews: 2300,
        rating: 4.0,
        color: "#5A5FBF"
    },
];




export default function RestaurantItems(props: RestaurantItemProps) {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    return (
        <>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 20 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Popular Restaurants</Text>
                <Text style={{ fontSize: 18, fontWeight: '500', color: '#F26E50' }}>See All</Text>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {props.restaurantData.map((restaurant, index) => (
                    <TouchableOpacity key={index} onPress={() => navigation.navigate('RestaurantDetail', {
                        name: restaurant.name,
                        image: restaurant.image_url,
                        rating: restaurant.rating,
                        categories: restaurant.categories,
                        price: restaurant.price,
                        reviews: restaurant.review_count,
                    })}>
                        <View style={{
                            marginTop: 10,
                            padding: 15,
                            backgroundColor: 'white',
                            width: 260,
                            height: 280,
                            marginRight: 10,
                            borderRadius: 30,
                            marginHorizontal: 30,
                        }}>
                            <RestaurantImage image={restaurant.image_url} />
                            <RestaurantLogo logo={restaurant.logo} color={restaurant.color}/>
                            <RestaurantInfo name={restaurant.name} rating={restaurant.rating} reviews={restaurant.review_count} />
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </>
    )
}    



const RestaurantImage = (props: { image: any; }) => (
    <>
        
    <Image 
        source={{
            uri: props.image
        }}
        style={{ width: '100%', height: 160, borderTopLeftRadius: 20, borderTopRightRadius: 20,}}
        />
    <TouchableOpacity 
        style={{
            position: 'absolute', right: 20, top: 20
        }}>
    </TouchableOpacity>
    </>
);

const RestaurantLogo = (props: {
    color: ColorValue | undefined;
    logo: string | undefined; image: any; 
}) => (
    <>
        
        <View style={{ 
            width: 80, 
            height: 80, 
            justifyContent: 'center', 
            left: 75, 
            bottom: 40, 
            borderRadius: 40, 
            backgroundColor: props.color,
            alignItems: 'center',
            borderWidth: 5,
            borderColor: 'white',
            shadowOpacity: 0,
        }}>
            <Image 
                source={{
                    uri: props.logo
                }}
                style={{ 
                    width: 50, 
                    height: 50, 
                    borderRadius: 20, 
                }}
            />
</View>
    <TouchableOpacity 
        style={{
            position: 'absolute', right: 20, bottom: 10
        }}>
    </TouchableOpacity>
    </>
);


const RestaurantInfo = (props : any) => (
    <View style={{ 
        justifyContent: 'center', 
        alignItems: 'center', 
        // marginTop: 20,
        paddingTop: 30,
        bottom: 60,
        }}
        >
        <View>
            <Text style={{ 
                fontSize: 18,
                fontWeight: 'bold',
                }}>{props.name}</Text>
        </View>
    </View>
);