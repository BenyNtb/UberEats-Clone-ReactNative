import { View, Text, LayoutAnimation, Image, StyleSheet, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useDispatch } from 'react-redux';
import MapView, { Marker } from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';
import { Banner } from 'react-native-paper';
import { ScrollView } from 'native-base';




interface Item {
    title: string;
    description: string;
    price: string;
    image?: string;
    reviews?: string;
    review_count?: string;
}
const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '40%',
        borderRadius: 20,
    },
})



export default function OrderItem({item}: {item: any}) {
    const { title, price, image } = item;
    const dispatch = useDispatch();
    const [isChecked, setIsChecked] = useState(false);
    const [quantity, setQuantity] = useState(0);
    const handleCheckboxPress = (item: Item) => {
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

    const number = 12345;
        const maskedNumber = "**** **** ****" + number.toString().substr(-4);

    const latitude = 40.7111628;
    const longitude = -74.0066538;
    const [visible, setVisible] = React.useState(true);
    
    return (
        
        <View>
            <View style={{ marginBottom: 20 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Your Order</Text>
            </View>
            <View style={{ 
                width: 400, 
                height: 90, 
                bottom: 25, 
                zIndex: 999, 
                borderRadius: 20, 
                borderWidth: 2, 
                borderColor: '#F4F4F4', 
                top: -5,
                backgroundColor: 'white',
                }}>
                <View style={{ 
                    flexDirection: 'row',  
                    top: 30, 
                    left: 15,
                    zIndex: 999, 
                }}>
                <Image 
                        source={image ? {uri: image} : undefined}
                        style={{ width: 50, height: 50, borderRadius: 20, backgroundColor: 'grey' }}
                    />
                <Text style={{ 
                    color: 'red', 
                    marginHorizontal: 10, 
                    fontWeight: 'bold' 
                    }}> 
                    {quantity}X
                </Text>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={{ fontWeight: 'bold' }}>{title}</Text>
                    <Text>{price}</Text>
                </View>
                </View>
                <View style={{ 
                    justifyContent: 'space-between', 
                    flexDirection: 'row', 
                    left: 250, 
                    bottom: 25, 
                    width: 130, 
                    height: 45,   
                    backgroundColor: 'white', 
                    borderRadius: 20, 
                    borderColor: '#F2F2F2', 
                    borderWidth: 2,
                    zIndex: 999,
                }}>
                    <View style={{ 
                        width: 30, 
                        height: 30, 
                        backgroundColor: '#ECB5B1', 
                        borderRadius: 50, 
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        top: 5, 
                        marginHorizontal: 5,
                        zIndex: 999,  
                    }} >
                        <FontAwesome5 name='trash' color='red' size={15} onPress={() => handleTrashPress(item)} />
                    </View>
                    <Text style={{ fontSize: 18, top: 5 }}>
                        {quantity}
                    </Text>
                    <View style={{ 
                        width: 30, 
                        height: 30, 
                        backgroundColor: '#DBE2F5', 
                        borderRadius: 50, 
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        top: 5, 
                        marginHorizontal: 5 
                    }}>
                        <FontAwesome5 name='plus' color='#5A5FBF' size={15} light onPress={() => handlePlusPress(item)} />
                    </View>
                </View>
            </View>
                <View style={{ 
                    flexDirection: 'row', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    backgroundColor: '#E5E9FA', 
                    height: 65, 
                    bottom: 18, 
                    width: 400, 
                    borderBottomLeftRadius: 20, 
                    borderBottomRightRadius: 20, 
                    zIndex: -999 
                }}>
                    <View style={{ 
                        borderWidth: 1, 
                        borderRadius: 50, 
                        borderColor: '#5A5FBF', 
                        height: 20, 
                        width: 20, 
                        justifyContent: 'center', 
                        alignItems: 'center' 
                    }}>
                        <FontAwesome5 name='plus' color='#5A5FBF' size={10}  onPress={() => handlePlusPress(item)} />
                    </View>
                    <Text style={{ color: '#5A5FBF', fontWeight: 'bold', marginHorizontal: 10 }}>Add product</Text>
                </View>
            {/* <ScrollView> */}
                <View style={{ top: 30, marginHorizontal: 10 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
                        Delivery address
                    </Text>
                    <MapView 
                        initialRegion={{
                        latitude: 40.7111628,
                        longitude: -74.0208433,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                        }}
                        
                    style={styles.map}/>
                    {/* <Marker
                        coordinate={{ latitude : latitude , longitude : longitude }}
                        image={{uri: 'https://www.freepnglogos.com/uploads/pin-png/location-pin-connectsafely-37.png'}}
                        
                    /> */}
                    <View style={{ width: 380, height: 80, borderTopRightRadius: 20, borderTopLeftRadius: 20, zIndex: 1, backgroundColor: 'white', borderWidth: 15, borderColor: 'white', bottom: 30  }}>
                        <View style={{ flexDirection: 'row', borderWidth: 2, borderColor: '#F4F4F4', borderRadius: 10, height: 80, width: 370, justifyContent: 'center', alignItems: 'center', right: 10 }}>
                            <View style={{ backgroundColor: '#EEECFE', borderRadius: 50, height: 40, width: 40, justifyContent: 'center', alignItems: 'center', right: 40 }}>
                                <Ionicons name="location-sharp" size={25} color="#6260C3" />
                            </View>    
                            <View style={{ right: 20 }}>
                                <Text>
                                    Delivery Address 
                                </Text>
                                <Text ellipsizeMode='tail' numberOfLines={1} style={{ fontWeight: 'bold', fontSize: 16, width: 230 }}>
                                    175 Greenwich St, New York, United States
                                </Text>
                                <View style={{ position: 'absolute', left: 270, bottom: 10 }}>
                                    <FontAwesome5 name='chevron-right' size={20} color='#A4AEBA'/>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ bottom: 120, marginHorizontal: 10 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
                        Payment method
                    </Text>
                    <View style={{ flexDirection: 'row', borderWidth: 2, borderColor: '#F4F4F4', borderRadius: 10, height: 80, width: 390, justifyContent: 'center', alignItems: 'center', right: 10 }}>
                        <View style={{ width: 80, height: 50, borderWidth: 2, borderColor: '#F4F4F4', borderRadius: 5, justifyContent: 'center', alignItems: 'center', right: 70 }}>
                            <Image 
                                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png'}}
                                style={{ width: 50, height: 50, borderRadius: 20, resizeMode: 'contain' }}
                            />
                        </View>
                        <View style={{ right: 40 }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                                Visa
                            </Text>
                            <Text style={{ color: 'grey', fontSize: 16 }}>
                                {maskedNumber}
                            </Text>
                            <View style={{ position: 'absolute', left: 230, bottom: 10 }}>
                                <FontAwesome5 name='chevron-right' size={20} color='#A4AEBA'/>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ bottom: 70 }}>
                    <Banner
                        style={{
                            backgroundColor: '#EAF9E6',
                            width: 370,
                            height: 100,
                            justifyContent: 'center',
                            alignItems: 'center',
                            alignSelf: 'center',
                            borderRadius: 20,
                            marginTop: -20,
                            
                        }}
                        visible={visible}
                        icon={({size}) => (
                            <Image
                            source={{
                                uri: 'https://em-content.zobj.net/thumbs/120/whatsapp/326/motor-scooter_1f6f5.png',
                            }}
                            style={{
                                width: size,
                                height: size,
                                borderRadius: 20,
                                backgroundColor: 'white'
                            }}
                            />
                        )}>
                        <Text style={{ color: '#204f13', fontWeight: 'bold' }}>
                            Buy Uber Eats prime and {"\n"} 
                        </Text>
                        
                        <Text
                            style={{
                                marginTop: 30,
                                fontWeight: 'bold',
                                color: '#204f13', 
                            }}
                        >
                            get free delivery
                        </Text>
                        <Text>
                            Learn More
                        </Text>
                    </Banner>
                </View>
                
            {/* </ScrollView> */}
        </View>            
    )
}

function selectItem(item: Item, arg1: boolean, arg2: number) {
    throw new Error('Function not implemented.');
}
