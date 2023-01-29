import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';
import OrderItem from './OrderItem';
import LottieView from 'lottie-react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { BlurView } from "@react-native-community/blur";


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

export default function ViewCart({ navigation }: { navigation: any }) {
    const [loading, setLoading] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const {items, restaurantName} = useSelector((state: RootState) => state.cartReducer.selectedItems);
    // console.log("items after useSelector", items)
    const total = items.map((item: { price: string; }) => 
    item.price ? Number(item.price.replace("$", "")) : 0
    ).reduce((prev: any, curr: any) => prev + curr, 0);


    const totalUSD = total.toLocaleString("en", {
        style: "currency",
        currency: "USD",
    });
    console.log(totalUSD);
    // console.log(items)
    
    const handleConfirmOrder = () => {
        if (loading) {
            return;
        }
        setLoading(true);
        setTimeout(() => {
        navigation.navigate('OrderCompleted');
        }, 2500);
        // setLoading(false);
    };

    console.log(setLoading)
    
    

    const styles = StyleSheet.create({
        modalContainer: {
            flex: 1,
            justifyContent: 'flex-end',
            backgroundColor: 'rgba(0,0,0,0.7)',
        },
        modalCheckoutContainer: {
            backgroundColor: 'white',
            padding: 16,
            height: '100%',
            borderWidth: 1,
        },
        restaurantName: {
            textAlign: 'center',
            fontWeight: '600',
            fontSize: 18,
            marginBottom: 10,
            bottom: 40,
        },
        subtotalContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 15,
        },
        subtotalText: {
            textAlign: 'left',
            fontWeight: '600',
            fontSize: 15,
            marginBottom: 10,
        },
    });

    const checkoutModalContent = () => {
        return (
            <>
                <View style={styles.modalContainer}>
                    <View style={styles.modalCheckoutContainer}>
                        <SafeAreaView>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: 'white',
                                    width: 50,
                                    height: 50,
                                    borderRadius: 30,
                                    padding: 10,
                                    alignItems: 'center',
                                    right: 10,
                                }}
                                onPress={() => navigation.goBack('MenuItems')}
                                >
                                <FontAwesome5
                                    name='chevron-left'
                                    size={30}
                                />
                            </TouchableOpacity>
                            <Text style={styles.restaurantName}>Checkout</Text>
                        </SafeAreaView>
                        { items.map((item, index) => (
                            <OrderItem key={index} item={item} />
                        ))}
                        {/* <View style={styles.subtotalContainer}>
                            <Text style={styles.subtotalText}>Subtotal</Text>
                            <Text>{totalUSD}</Text>
                        </View> */}
                        {/* <BlurView blurType='light' > */}
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'center'
                            }}
                            >
                                <TouchableOpacity style={{
                                    bottom: 150,
                                    backgroundColor: '#333544',
                                    alignItems: 'center',
                                    padding: 13,
                                    borderRadius: 15,
                                    height: 70,
                                    width: 300,
                                    position: "relative"
                                }}
                                onPress={() => {
                                    handleConfirmOrder();
                                    setModalVisible(false);
                                }}

                                >
                                    <Text style={{
                                        color: 'white',
                                        fontSize: 18,
                                        paddingRight: 60,
                                        top: 10,
                                    }}
                                    >
                                        Confirm Order - 
                                    </Text>
                                    <Text style={{
                                        position: 'absolute',
                                        right: 55,
                                        color: 'white',
                                        fontSize: 18,
                                        top: 23,
                                    }}
                                    >
                                        {total ? totalUSD : ''}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        {/* </BlurView> */}
                    </View>
                </View>
            </>
        );
    };

    return (
        <>
            <Modal 
                animationType='slide'
                visible={modalVisible}
                transparent={true}
                onDismiss={() => setModalVisible(false)}
                >
                    {checkoutModalContent()}
            </Modal>
                { total ? (
            <View style={{
                flex: 1,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
                position: 'absolute',
                top: 820,
                width: 500,
                zIndex: 999,
            }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    width: '100%',
                }}>
                    <View style={{
                    marginTop: 10,
                    backgroundColor: 'white',
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    padding: 15,
                    borderRadius: 30,
                    width: 500,
                    height: 100,
                    position: 'relative',
                    }}
                    // onPress={() => setModalVisible(true)}
                    >
                        <Text style={{ color: 'black', fontSize: 20,  justifyContent: 'center', alignItems: 'center', fontWeight: '600', marginHorizontal: 5 }}>
                            Order {items.length} for 
                        </Text>
                        <Text
                        style={{
                            color: 'black',
                            fontSize: 20,
                            fontWeight: '600'
                        }}>
                            {totalUSD}
                        </Text>
                    </View>
                    <View
                        style={{
                            backgroundColor: '#E8EBFA',
                            width: 50,
                            height: 50,
                            borderRadius: 10,
                            // padding: 10,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            right: 420,
                            top: 35,
                        }}
                        >
                        <Text style={{ color : '#6468B2', fontSize: 20, fontWeight: 'bold' }}>
                            {items.length}
                        </Text>
                    </View>
                    <TouchableOpacity
                        style={{
                            backgroundColor: '#373648',
                            width: 50,
                            height: 50,
                            borderRadius: 30,
                            padding: 10,
                            alignItems: 'center',
                            right: 150,
                            top: 35,
                        }}
                        onPress={() => setModalVisible(true)}
                        >
                        <FontAwesome5
                            name='chevron-right'
                            size={30}
                            color='white'
                        />
                    </TouchableOpacity>
                </View>
            </View>
            ) : ( 
                <></>
            )}
            {loading ? (
                <View 
                    style={{
                        backgroundColor: 'black',
                        position: 'absolute',
                        opacity: 0.6,
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%',
                        width: '100%',
                    }}
                >
                    <LottieView
                        source={require('../../assets/animations/scanner.json')}
                        style={{ height: 200}}
                        autoPlay
                        speed={3}
                    />
                </View>
            ) : (
                <></>
            )}
        </>
    );
}



