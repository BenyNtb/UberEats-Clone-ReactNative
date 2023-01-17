import { View, Text, TouchableOpacity, TextInput, SafeAreaView, FlatList, Image, StyleSheet, ImageSourcePropType } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import SearchBar from '../components/Home/SearchBar'
import { Card } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';


const restaurantType = [
    {
        image: require('../assets/images/restaurantType/asian.png'),
        text: 'Sushi',
    },
    {
        image: require('../assets/images/restaurantType/noodles.png'),
        text: 'Asian',
    },
    {
        image: require('../assets/images/restaurantType/burger.png'),
        text: 'Burgers',
    },
    {
        image: require('../assets/images/restaurantType/mexican.png'),
        text: 'mexican',
    },
    {
        image: require('../assets/images/restaurantType/vegetarian.png'),
        text: 'Vegetarian',
    },
    {
        image: require('../assets/images/restaurantType/cookie.png'),
        text: 'Cookies',
    },
    {
        image: require('../assets/images/restaurantType/hot_dog.png'),
        text: 'Hot Dogs',
    },
    {
        image: require('../assets/images/restaurantType/side.png'),
        text: 'Chicken',
    },
    {
        image: require('../assets/images/restaurantType/fish.png'),
        text: 'Fish',
    },
    {
        image: require('../assets/images/restaurantType/breakfast.png'),
        text: 'Breakfast',
    },
    {
        image: require('../assets/images/restaurantType/salad.png'),
        text: 'Salad',
    },
    {
        image: require('../assets/images/restaurantType/ice_cream.png'),
        text: 'Ice Cream',
    },
    {
        image: require('../assets/images/restaurantType/beverage.png'),
        text: 'Beverage',
    },
];


interface SearchProps {
    restaurantData: Restaurant[];
}

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
    

    return (
        <>
            <SafeAreaView style={{ backgroundColor:'white' }}>
                <SearchBar cityHandler={undefined}/>
            </SafeAreaView>
            <View style={{ marginTop: 60 }}>
                <View style={{ marginHorizontal: 10 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, left: 10 }}>Types of restaurants</Text>
                        <FlatList
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data={restaurantType}
                            renderItem={({ item }) => (
                                <View style={styles.itemContainer}>
                                    <View style={styles.circleBackground}>
                                        <Image source={item.image} style={styles.image} />
                                    </View>
                                    <Text style={styles.text}>{item.text}</Text>
                                </View>
                            )}
                            keyExtractor={(item, index) => index.toString()}
                        />
                </View>
            </View>
            <View style={{ marginTop: 30, marginHorizontal: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, left: 10 }}>Restaurant</Text>
                {/* {props.restaurantData.map((item: Restaurant, index: number) => (
                    <RestaurantCard
                    key={index}
                    image={{uri: item.image_url}}
                    review={item.rating}
                    name={item.name}
                    categories={item.categories.join(', ')}
                    />
                    ))}                 */}
            </View>
        </>
    )
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
    }
});

const RestaurantCard = (props: any) => {
    return (
        <View>
            <View style={{overflow: "hidden"}}>
            <Image
                source={props.image}
                style={{borderRadius: 15, width: "90%", height: 200}}
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