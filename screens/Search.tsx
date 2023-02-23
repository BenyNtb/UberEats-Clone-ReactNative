import i18n from 'i18n-js';
import { en, fr } from "../localizations";
import * as Localization from "expo-localization";
import { View, Text, TouchableOpacity, TextInput, SafeAreaView, FlatList, Image, StyleSheet, ImageSourcePropType, Modal, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import SearchBar from '../components/Home/SearchBar'
// import SearchFilter from '../components/Search/SearchFilter
import { Card, Divider } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RadioButton } from 'react-native-paper';
import CardActions from 'react-native-paper/lib/typescript/components/Card/CardActions'
import BottomTabs from '../components/Home/BottomTabs'
import { LocalizationContext } from '../LocalizationContext';


const restaurantType = [
    {
        image: require('../assets/images/restaurantType/all.png'),
        text: 'All',
        selected: false
    },
    {
        image: require('../assets/images/restaurantType/asian.png'),
        text: 'Sushi',
        selected: false
    },
    {
        image: require('../assets/images/restaurantType/noodles.png'),
        text: i18n.t('Asian') ,
        selected: false
    },
    {
        image: require('../assets/images/restaurantType/burger.png'),
        text: 'Burgers',
        selected: false
    },
    {
        image: require('../assets/images/restaurantType/mexican.png'),
        text: i18n.t('Mexican'),
        selected: false
    },
    {
        image: require('../assets/images/restaurantType/vegetarian.png'),
        text: i18n.t('Vegetarian'),
        selected: false
    },
    {
        image: require('../assets/images/restaurantType/cookie.png'),
        text: 'Cookies',
        selected: false
    },
    {
        image: require('../assets/images/restaurantType/hot_dog.png'),
        text: 'Hot Dogs',
        selected: false
    },
    {
        image: require('../assets/images/restaurantType/side.png'),
        text: i18n.t('Chicken'),
        selected: false
    },
    {
        image: require('../assets/images/restaurantType/fish.png'),
        text: i18n.t('Fish'),
        selected: false
    },
    {
        image: require('../assets/images/restaurantType/breakfast.png'),
        text: i18n.t('Breakfast'),
        selected: false
    },
    {
        image: require('../assets/images/restaurantType/salad.png'),
        text: i18n.t('Salad'),
        selected: false
    },
    {
        image: require('../assets/images/restaurantType/ice_cream.png'),
        text: i18n.t('IceCream'),
        selected: false
    },
    {
        image: require('../assets/images/restaurantType/beverage.png'),
        text: i18n.t('Beverages'),
        selected: false
    },
];
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
        name: "Pizza Hut",
        image_url: "https://i.pinimg.com/564x/c6/c0/61/c6c061c5d2f61e9acf174b0ee408254c.jpg",
        logo: "https://upload.wikimedia.org/wikipedia/sco/thumb/d/d2/Pizza_Hut_logo.svg/2177px-Pizza_Hut_logo.svg.png",
        categories: ["Pizza", "Italian"],
        price: "€€€",
        reviews: 4200,
        rating: 4.5,
        color: "#FF9A00"
        },
    {
        name: "KFC",
        image_url: "https://s3-prod.adage.com/s3fs-public/styles/800x600/public/20220425_KFC_Bucket-For-One_3X2.png",
        logo: "https://e7.pngegg.com/pngimages/117/377/png-clipart-kfc-logo-kfc-icon-food-kentucky-fried-chicken-thumbnail.png",
        categories: ["Chicken", "Fast Food"],
        price: "€€",
        reviews: 1500,
        rating: 3.8,
        color: "#FF4136"
        },
    {
        name: "Mama Pho",
        image_url: "https://media-cdn.tripadvisor.com/media/photo-s/15/25/3a/6f/pho-stratford.jpg",
        logo: "https://images.squarespace-cdn.com/content/v1/5bb29c83348cd9266a31cde2/656b2fcf-a790-4418-b114-b19b77598785/Mama+Pho+Logo+082017.png?format=1000w",
        categories: ["Asian","Vietnamese", "Soup"],
        price: "€",
        reviews: 1200,
        rating: 4.5,
        color: "#F26E50"
    },
    {
        name: "Sushi Express",
        image_url: "https://d1ralsognjng37.cloudfront.net/b68b764d-057c-4452-8d0e-846253f5e812",
        logo: "https://www.clipartmax.com/png/middle/341-3418115_logo-sushi-express-sushi-express.png",
        categories: ["Japanese", "Sushi", "Asian"],
        price: "€€",
        reviews: 1500,
        rating: 4.5,
        color: "#00A3FF"
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





export default function Search(props: RestaurantItemProps) {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    console.log(props.restaurantData)
    const [isModalVisible, setIsModalVisible] = useState(false); 
    const [selectedType, setSelectedType] = useState("All");
    const filteredRestaurants = selectedType === 'All' ? localRestaurants : localRestaurants.filter(restaurant => restaurant.categories.includes(selectedType));
    const onTypePress = (item) => {
        if(item.text === 'All'){
            setSelectedType("All")
        } else {
            setSelectedType(item.text);
        }
    }
    const [randomMinutes, setRandomMinutes] = useState (5 *(Math.floor(Math.random()  * 10) * 1 + 1));
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
        

        <View>
            <SafeAreaView style={{ backgroundColor:'white' }}>
                <SearchBar cityHandler={undefined} modalToggle={() => setIsModalVisible(!isModalVisible)}/>
            </SafeAreaView>
            <ScrollView>
            <View style={{ marginTop: 60 }}>
                <View style={{ marginHorizontal: 10 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, left: 10 }}>{i18n.t('Typesofrestaurants')}</Text>
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={restaurantType}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity onPress={() => onTypePress(item)}>
                                <View style={
                                    styles.itemContainer
                                }>
                                    <View style={[ styles.circleBackground, item.text === selectedType ? { borderWidth: 2, borderRadius: 50, borderColor: '#F26E50' } : {}]}>
                                        <Image source={item.image} style={styles.image} />
                                    </View>
                                    <Text style={styles.text}>{item.text}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            
                <View style={{ marginTop: 30, marginHorizontal: 10 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, left: 10 }}>Restaurants</Text>
                    <FlatList
                        data={filteredRestaurants}
                        keyExtractor={(item, index) => item.name}
                        
                        contentContainerStyle={{ paddingHorizontal: 15, paddingVertical: 10 }}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => navigation.navigate('RestaurantDetail', {restaurantId: item.id})}>
                            <View style={{ backgroundColor: 'white', height: 250, marginBottom: 15, padding: 15, borderRadius: 15, borderColor: 'grey' }}>
                                <Image
                                    source={{ uri: item.image_url }}
                                    style={{ borderRadius: 15, width: 350, height: 150 }}
                                />
                                <View style={{ position: 'absolute', top: 10, left: 10 }}>
                                <View style={{ backgroundColor: 'white', padding: 10, left: 15, top: 10, borderRadius: 10, width: 80, height: 40, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                    <FontAwesome5 name="star" size={15} color={'orange'} solid/>
                                    <Text style={{ fontSize: 16 }}>{item.reviews}</Text>
                                </View>
                                </View>
                                <Text style={{ fontSize: 19, fontWeight: 'bold', marginTop: 10, left: 10 }}>{item.name}</Text>
                                <Text style={{ fontSize: 15, marginTop: 10, left: 10 }}>{item.categories.join(', ')}</Text>
                                <View style={{ position: 'absolute', bottom: 10, right: 10 }}>
                                <View style={{ backgroundColor: 'white', padding: 5, borderRadius: 15, flexDirection: 'row', borderColor: 'grey', borderWidth: 0.2, width: 90, justifyContent: 'center', alignItems: 'center' }}>
                                    <FontAwesome5 name="clock" size={15} color={'red'} />
                                    <Text>{randomMinutes} mins</Text>
                                </View>
                                </View>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </View>
            </ScrollView>
            <BottomTabs />
    </View>
);    

}


const styles = StyleSheet.create({
    itemContainer: {
        alignItems: 'center',
        margin: 10
    },
    circleBackground: {
        backgroundColor: 'white',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#EBECF0',
        overflow: 'hidden',
        width: 70,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 30,
        height: 30
    },
    text: {
        fontSize: 18,
        marginTop: 10,
        textAlign: 'center'
    },
});

const RestaurantCard = (props: any) => {
    return (
        <View>
            <View style={{overflow: "hidden"}}>
            <Image
                source={props.image}
                style={{borderRadius: 15, width: "70%", height: 200}}
            />
            <View style={{ position: 'absolute', top: 10, left: 10 }}>
                <View style={{ backgroundColor: 'white', padding: 5, borderRadius: 10 }}>
                <FontAwesome5 name="star" size={15} color={'orange'}/>
                <Text>{props.review}</Text>
                </View>
            </View>
            <Text style={{ fontSize: 19, marginTop: 10, left: 10 }}>{props.name}</Text>
            <Text style={{ fontSize: 15, marginTop: 10, left: 10 }}>{props.categories}</Text>
            <View style={{ position: 'absolute', bottom: 10, right: 10 }}>
                <View style={{ backgroundColor: 'white', padding: 5, borderRadius: 10 }}>
                <FontAwesome5 name="time" size={15} color={'red'}/>
                <Text>30 min</Text>
                </View>
            </View>
            </View>
        </View>
    );
}
;