import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import OrderItem from './OrderItem';
import LottieView from 'lottie-react-native';

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
            height: 500,
            borderWidth: 1,
        },
        restaurantName: {
            textAlign: 'center',
            fontWeight: '600',
            fontSize: 18,
            marginBottom: 10,
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
                        <Text style={styles.restaurantName}>{restaurantName}</Text>
                        { items.map((item, index) => (
                            <OrderItem key={index} item={item} />
                        ))}
                        <View style={styles.subtotalContainer}>
                            <Text style={styles.subtotalText}>Subtotal</Text>
                            <Text>{totalUSD}</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'center'
                        }}
                        >
                            <TouchableOpacity style={{
                                marginTop: 20,
                                backgroundColor: 'black',
                                alignItems: 'center',
                                padding: 13,
                                borderRadius: 30,
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
                                    fontSize: 20,
                                }}
                                >
                                    Checkout 
                                </Text>
                                <Text style={{
                                    position: 'absolute',
                                    right: 20,
                                    color: 'white',
                                    fontSize: 15,
                                    top: 17,
                                }}
                                >
                                    {total ? totalUSD : ''}
                                </Text>
                            </TouchableOpacity>
                        </View>
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
                onRequestClose={() => setModalVisible(false)}
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
                    }}
                    onPress={() => setModalVisible(true)}
                    >
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



