import i18n from 'i18n-js';
import {View, Text, SafeAreaView, TouchableOpacity, Image, Modal, FlatList, StyleSheet} from 'react-native'
import React, { useState } from 'react'
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Divider, RadioButton } from 'react-native-paper';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import { LocalizationContext } from '../../LocalizationContext';



const restaurantType = [
    {
        image: require('../../assets/images/restaurantType/asian.png'),
        text: 'Sushi',
        selected: false
    },
    {
        image: require('../../assets/images/restaurantType/noodles.png'),
        text: i18n.t('Asian'),
        selected: false
    },
    {
        image: require('../../assets/images/restaurantType/burger.png'),
        text: 'Burgers',
        selected: false
    },
    {
        image: require('../../assets/images/restaurantType/mexican.png'),
        text: i18n.t('Mexican'),
        selected: false
    },
    {
        image: require('../../assets/images/restaurantType/vegetarian.png'),
        text: i18n.t('Vegetarian'),
        selected: false
    },
    {
        image: require('../../assets/images/restaurantType/cookie.png'),
        text: 'Cookies',
        selected: false
    },
    {
        image: require('../../assets/images/restaurantType/hot_dog.png'),
        text: 'Hot Dogs',
        selected: false
    },
    {
        image: require('../../assets/images/restaurantType/side.png'),
        text: i18n.t('Chicken'),
        selected: false
    },
    {
        image: require('../../assets/images/restaurantType/fish.png'),
        text: i18n.t('Fish'),
        selected: false
    },
    {
        image: require('../../assets/images/restaurantType/breakfast.png'),
        text: i18n.t('Breakfast'),
        selected: false
    },
    {
        image: require('../../assets/images/restaurantType/salad.png'),
        text: i18n.t('Salad'),
        selected: false
    },
    {
        image: require('../../assets/images/restaurantType/ice_cream.png'),
        text: i18n.t('IceCream'),
        selected: false
    },
    {
        image: require('../../assets/images/restaurantType/beverage.png'),
        text: i18n.t('Beverages'),
        selected: false
    },
];

export default function SearchBar({cityHandler} : {
    cityHandler: any
}) {
    // function setIsModalVisible(arg0: boolean): void {
    //     throw new Error('Function not implemented.');
    // }
    const { locale, setLocale } = React.useContext(LocalizationContext);
    i18n.fallbacks = true;
    // i18n.translations = { en, fr };
    i18n.locale = locale;

    const handleSwitchToFrench = () => {
    setLocale('fr');
    };
    const [isModalVisible, setIsModalVisible] = useState(false); 
    const [ratingChecked, setRatingChecked] = useState(false);
    const [deliveryPriceChecked, setDeliveryPriceChecked] = useState(false);
    const [deliveryTimeChecked, setDeliveryTimeChecked] = useState(false);

    const [sortBy, setSortBy] = useState<string | undefined>(undefined);

    const [selectedTypes, setSelectedTypes] = useState([]);

    const handleTypePress = (index) => {
        const updatedTypes = [...selectedTypes];
        if(updatedTypes.includes(restaurantType[index].text)){
            const filtered = updatedTypes.filter(item => item !== restaurantType[index].text)
            setSelectedTypes(filtered)
        }else{
            setSelectedTypes([...updatedTypes, restaurantType[index].text])
        }
    }
    
    
    const handleCheck = (item: any) => {
        const newData = [...restaurantType];
        const index = newData.indexOf(item);
        newData[index].checked = !newData[index].checked;
        setSelectedTypes(newData);
        }
    //function to handle the checkbox
    const handleRadio = (name: string) => {
        if(name === 'rating') {
            setRatingChecked(!ratingChecked);
        }
        if(name === 'deliveryPrice') {
            setDeliveryPriceChecked(!deliveryPriceChecked);
        }
        if(name === 'deliveryTime') {
            setDeliveryTimeChecked(!deliveryTimeChecked);
        }
    }

    // function to apply the filter
    const applyFilter = () => {
        // apply the filter on the restaurantType data based on the checkboxes
        //...
        setIsModalVisible(false);
    }

    function SearchBar({cityHandler, modalToggle} : {
        cityHandler: any,
        modalToggle: any
    })

    

    return (
        <>
            <SafeAreaView
                style={{
                marginTop: 50,
                flexDirection: 'row',
                justifyContent: 'flex-start',
                left: 10,
            }}>
                <View>
                    <View style={{ position: 'absolute', zIndex: 999, left: 20, bottom: 40 }}>
                        <Ionicons name="location-sharp" size={40} color={'#5A5FBF'}/>
                    </View>
                    <GooglePlacesAutocomplete
                        placeholder={i18n.t('SearchRestaurants')}
                        query={{
                        key: "AIzaSyBkfSuG-jyDRWnfC6FJqshnki840_vXdnM"
                        }}
                        currentLocation={true}
                        currentLocationLabel='Current location'
                        onPress={(data, details = null) => {
                        const city = data.description.split(",")[0];
                        cityHandler(city);
                        }}
                        styles={{
                        textInput: {
                            borderRadius: 15,
                            fontWeight: '400',
                            marginTop: 7,
                            height: 70,
                            left: 10,
                            justifyContent: 'center',
                            alignContent: 'center',
                            fontSize: 18,
                            paddingLeft: 50,
                            borderWidth: 1,
                            borderColor: 'lightgrey',
                        },
                        textInputContainer: {
                            borderRadius: 20,
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginRight: 10,
                            width: 320,
                            bottom: 40
                        }
                        }}
                    />
                </View>
                <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', bottom: 10, right: 10 }}>
                <TouchableOpacity onPress={() => setIsModalVisible(true)} style={{ bottom: 20, left: 20, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderRadius: 15, borderColor: 'lightgrey', height: 60, width: 60 }}>
                    <FontAwesome5 name="filter" size={30}/>
                </TouchableOpacity>
                    <Modal
                        animationType='slide'
                        transparent={true}
                        visible={isModalVisible}
                        onRequestClose={() => {
                            setIsModalVisible(false);
                        }}
                    >
                        <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                            <View style={{ width: '100%', backgroundColor: '#F7F7F7', borderRadius: 25, padding: 20, top: 90 }}>
                                <View >
                                <View style={{ alignSelf:'center',marginVertical:10 }}>
                                    <Text style={{fontSize:18,fontWeight:'bold'}}>{i18n.t('Filter')}</Text>
                                </View>
                                <View style={{ alignSelf:'flex-end',marginVertical:10 }}>
                                    <Text style={{ color: 'red' }}>{i18n.t('Clear')}</Text>
                                </View>
                                <View style={{ marginVertical:10 }}>
                                    <Text style={{ fontWeight: 'bold' }}>{i18n.t('SortBy')}</Text>
                                </View>
                                <View style={{ borderRadius:15, backgroundColor: 'white', height: 220, width: 390 }}>
                                    <RadioButton.Group onValueChange={value => setSortBy(value)} value={sortBy} theme={'#5666BF'} >
                                        <View style={{ flexDirection: 'row', alignItems: 'center',marginVertical: 10, margin: 20, padding: 10  }}>
                                        <RadioButton value="rating" />
                                            <Text style={{ fontWeight: 'bold' }}>{i18n.t('Rating')}</Text>
                                        </View>
                                        <Divider style={{ backgroundColor: 'black', marginHorizontal: 20 }} />
                                        <View style={{ flexDirection: 'row', alignItems: 'center',marginVertical: 10, margin: 20, padding: 10  }}>
                                            <RadioButton value="deliveryPrice" />
                                            <Text style={{ fontWeight: 'bold' }}>{i18n.t('DeliveryPrice')}</Text>
                                        </View>
                                        <Divider style={{ backgroundColor: 'black', marginHorizontal: 20 }} />
                                        <View style={{ flexDirection: 'row', alignItems: 'center',marginVertical: 10, margin: 20, padding: 10  }}>
                                            <RadioButton value="deliveryTime" />
                                            <Text style={{ fontWeight: 'bold' }}>{i18n.t('DeliveryTime')}</Text>
                                        </View>
                                    </RadioButton.Group>
                                </View>
                                <View style={{ marginVertical:10 }}>
                                    <Text>{i18n.t('Typesofrestaurants')}</Text>
                                </View>
                                <FlatList
                                    numColumns={4}
                                    data={restaurantType}
                                    keyExtractor={(item, index) => index.toString()}
                                    renderItem={({ item }) => (
                                    <TouchableOpacity
                                    style={styles.itemContainer}
                                    onPress={() => handleCheck(item)}
                                >
                                <View style={[styles.circleBackground,item.checked ? { borderWidth: 2, borderColor: '#F26E50' } : {} ]}>
                                <Image source={item.image} style={styles.image} />
                                </View>
                                <Text style={styles.text}>{item.text}</Text>
                                </TouchableOpacity>
                                )}
                                />
                                </View>
                            </View>
                        </View>
                    </Modal>
                </View>
            </SafeAreaView>
            
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
    },
});