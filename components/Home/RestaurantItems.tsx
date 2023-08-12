import i18n from 'i18n-js';
import { en, fr } from "../../localizations";
import * as Localization from "expo-localization";
import { View, Text, TouchableOpacity, Image, ScrollView, ColorValue } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import { Banner } from 'react-native-paper';
import _ from 'lodash';
import Search from '../../screens/Search';
import { LocalizationContext } from '../../LocalizationContext';

interface RestaurantItemProps {
    restaurantData: Restaurant[];
}

interface Restaurant {
    color: ColorValue | undefined;
    logo: string | undefined;
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
        name: "McDonalds",
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
    {
        name: "Yelp",
        image_url: "https://cdn.worldvectorlogo.com/logos/yelp-icon.svg",
        logo: "https://cdn.worldvectorlogo.com/logos/yelp-icon.svg",
        categories: [""],
        price: "",
        reviews: 2300,
        rating: 4.0,
        color: "white"
    }
];

export const yelpRestaurants = [
    {
        name: "Yelp",
        image_url: "https://cdn.worldvectorlogo.com/logos/yelp-icon.svg",
        logo: "https://cdn.worldvectorlogo.com/logos/yelp-icon.svg",
        categories: [""],
        price: "",
        reviews: 2300,
        rating: 4.0,
        color: "white"
    }
];


export default function RestaurantItems(props: RestaurantItemProps) {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const [visible, setVisible] = React.useState(true);
    const shuffledRecentOrders = _.shuffle(props.restaurantData);
    const shuffledFreeDelivery = _.shuffle(props.restaurantData);
    // const [locale, setLocale] = useState(Localization.locale);
    // i18n.fallbacks = true;
    // i18n.translations = { en, fr };
    // i18n.locale = locale;
    // i18n.locale = "en";
    const { locale, setLocale } = React.useContext(LocalizationContext);
    i18n.fallbacks = true;
    i18n.translations = { en, fr };
    i18n.locale = locale;

    const handleSwitchToFrench = () => {
        setLocale('fr');
    };


    return (
        <>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 20 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{i18n.t('PopularRestaurants')}</Text>
                <Text style={{ fontSize: 18, fontWeight: '500', color: '#F26E50' }}>{i18n.t('SeeAll')}</Text>
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
                            width: 220,
                            height: 220,
                            marginRight: 10,
                            borderRadius: 30,
                            marginHorizontal: 10,
                        }}>
                            <RestaurantImage image={restaurant.image_url} />
                            <RestaurantLogo logo={restaurant.logo} color={restaurant.color} image={undefined}/>
                            <RestaurantInfo name={restaurant.name} rating={restaurant.rating} reviews={restaurant.review_count} />
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 20 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{i18n.t('RecentOrders')}</Text>
                <Text style={{ fontSize: 18, fontWeight: '500', color: '#F26E50' }}>{i18n.t('SeeAll')}</Text>
            </View>
                    <View style={{ 
                        flexDirection: 'row', 
                        alignItems: 'center', 
                        marginBottom: 10, 
                        padding: 10, 
                        backgroundColor: 'white', 
                        borderRadius: 15,
                        width: 370,
                        height: 100,
                        alignSelf: 'center', 
                        }}
                    >
                        <Image 
                            source={{ uri: 'https://static.takeaway.com/images/chains/fr/quick/products/menumenu_megagiant-500x500.png?timestamp=1673719116' }} 
                            style={{ width: 80, height: 80, borderRadius: 5, backgroundColor: 'grey' }}
                        />
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 18, bottom: 15 }}>Giant Menu</Text>
                            <Text style={{ color: 'gray', fontSize: 12 }}>{i18n.t("Date", {date: "01.16.2023"})}</Text>
                        </View>
                        <View style={{ alignItems: 'flex-end' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{i18n.t("Price", {price: "10.30"})}</Text>
                            <TouchableOpacity style={{ backgroundColor: '#C7F6B6', padding: 5, borderRadius: 5, flexDirection: 'row', width: 120, height: 35, alignItems: 'center', justifyContent: 'center', top: 15 }}>
                                <Text style={{ color: 'darkgreen', fontWeight: 'bold', textAlign: 'center', alignSelf: 'center' }}>{i18n.t('Reorder')}</Text>
                                <FontAwesome5 name="chevron-right" size={13} color="darkgreen" style={{ marginLeft: 5, alignSelf: 'center' }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ 
                        flexDirection: 'row', 
                        alignItems: 'center', 
                        marginBottom: 10, 
                        padding: 10, 
                        backgroundColor: 'white', 
                        borderRadius: 15,
                        width: 370,
                        height: 100,
                        alignSelf: 'center', 
                        }}
                    >
                        <Image 
                            source={{ uri: 'https://www.dish.guide/ir/restaurant/fa9/fa9b4bb42ad1327ca28a1410e5e1a9e8.jpg' }} 
                            style={{ width: 80, height: 80, borderRadius: 5, backgroundColor: 'grey' }}
                        />
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 18, bottom: 15 }}>Le Montagnard</Text>
                            <Text style={{ color: 'gray', fontSize: 12 }}>{i18n.t("Date", {date: "01.16.2023"})}</Text>
                        </View>
                        <View style={{ alignItems: 'flex-end' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{i18n.t("Price", {price: "10.30"})}</Text>
                            <TouchableOpacity style={{ backgroundColor: '#C7F6B6', padding: 5, borderRadius: 5, flexDirection: 'row', width: 100, height: 35, alignItems: 'center', justifyContent: 'center', top: 15 }}>
                                <Text style={{ color: 'darkgreen', fontWeight: 'bold', textAlign: 'center', alignSelf: 'center' }}>{i18n.t('Reorder')}</Text>
                                <FontAwesome5 name="chevron-right" size={13} color="darkgreen" style={{ marginLeft: 5, alignSelf: 'center' }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ 
                        flexDirection: 'row', 
                        alignItems: 'center', 
                        marginBottom: 10, 
                        padding: 10, 
                        backgroundColor: 'white', 
                        borderRadius: 15,
                        width: 370,
                        height: 100,
                        alignSelf: 'center', 
                        }}
                    >
                        <Image 
                            source={{ uri: 'https://media.timeout.com/images/105943738/750/562/image.jpg' }} 
                            style={{ width: 80, height: 80, borderRadius: 5, backgroundColor: 'grey' }}
                        />
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 18, bottom: 15 }}>Nacho Crunch Grilled Stuft Burrito</Text>
                            <Text style={{ color: 'gray', fontSize: 12 }}>{i18n.t("Date", {date: "01.16.2023"})}</Text>
                        </View>
                        <View style={{ alignItems: 'flex-end' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{i18n.t("Price", {price: "10.30"})}</Text>
                            <TouchableOpacity style={{ backgroundColor: '#C7F6B6', padding: 5, borderRadius: 5, flexDirection: 'row', width: 100, height: 35, alignItems: 'center', justifyContent: 'center', top: 15 }}>
                                <Text style={{ color: 'darkgreen', fontWeight: 'bold', textAlign: 'center', alignSelf: 'center' }}>{i18n.t('Reorder')}</Text>
                                <FontAwesome5 name="chevron-right" size={13} color="darkgreen" style={{ marginLeft: 5, alignSelf: 'center' }} />
                            </TouchableOpacity>
                        </View>
                    </View>
            </View>
            <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 20 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{i18n.t('RecentlyAdded')}</Text>
                <Text style={{ fontSize: 18, fontWeight: '500', color: '#F26E50' }}>{i18n.t('SeeAll')}</Text>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {shuffledRecentOrders.map((restaurant, index) => (
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
                            width: 220,
                            height: 220,
                            marginRight: 10,
                            borderRadius: 30,
                            marginHorizontal: 10,
                        }}>
                            <RestaurantImage image={restaurant.image_url} />
                            <RestaurantLogo logo={restaurant.logo} color={restaurant.color} image={undefined}/>
                            <RestaurantInfo name={restaurant.name} rating={restaurant.rating} reviews={restaurant.review_count} />
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            </View>
            <View>
            <Banner
                style={{
                    backgroundColor: '#F1C260',
                    width: 370,
                    height: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center',
                    borderRadius: 20,
                    marginTop: 20,
                    
                }}
                visible={visible}
                icon={({size}) => (
                    <Image
                    source={{
                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWsMf-iqPYt1AvFET9Imf7NTa6sy_Tko8QvJ3i35j2-VjGDU-NyqU04luq9KpBE-BIAJI&usqp=CAU',
                    }}
                    style={{
                        width: size,
                        height: size,
                        borderRadius: 20,
                    }}
                    />
                )}>
                <Text style={{ color: 'black', fontWeight: 'bold' }}>
                {i18n.t('InviteFriends')}{"\n"} {"\n"}
                </Text>
                
                <Text
                    style={{
                        marginTop: 20,
                        fontWeight: '500',
                        color: '#77877C'
                    }}
                >
                    {i18n.t('FreeCredit')} {"\n"} {i18n.t('TheirFirstOrder')}.
                </Text>
                <FontAwesome5
                    name='chevron-right'
                    size={20}
                    style={{
                        alignSelf: 'flex-end',
                        color: 'lightgrey',
                    }}
                />
            </Banner>
            </View>
            <View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 20 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{i18n.t('FreeDelivery')}</Text>
                    <Text style={{ fontSize: 18, fontWeight: '500', color: '#F26E50' }}>{i18n.t('SeeAll')}</Text>
                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {shuffledFreeDelivery.map((restaurant, index) => (
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
                            width: 220,
                            height: 220,
                            marginRight: 10,
                            borderRadius: 30,
                            marginHorizontal: 10,
                        }}>
                            <RestaurantImage image={restaurant.image_url} />
                            <RestaurantLogo logo={restaurant.logo} color={restaurant.color} image={undefined}/>
                            <RestaurantInfo name={restaurant.name} rating={restaurant.rating} reviews={restaurant.review_count} />
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            </View>
        </>
    )
}    



const RestaurantImage = (props: { image: any; }) => (
    <>
        
    <Image 
        source={{
            uri: props.image
        }}
        style={{ width: 200, height: 120, borderTopLeftRadius: 20, borderTopRightRadius: 20, alignSelf: 'center' }}
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
            width: 60, 
            height: 60, 
            justifyContent: 'center', 
            left: 65, 
            bottom: 30, 
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