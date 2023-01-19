import React, { useState } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import orange from '../assets/images/orange.jpg';
import green from '../assets/images/green.jpg';
import purple from '../assets/images/purple.jpg';
import brown from '../assets/images/brown.jpg';
import grey from '../assets/images/grey.jpg';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface Props {}

const Login = (props: Props) => {
    const navigation = useNavigation();
    // const screenWidth = Math.round(Dimensions.get('window').width);
    // const screenHeight = Math.round(Dimensions.get('window').height);
    return (
        <View style={styles.container}>
            <View style={styles.containerLogin}>
                <View style={styles.bigContainerRow}>
                    <View style={styles.rowContainer1}>
                        <View style={styles.columnContainer}>
                            <Image
                                source={brown}
                                style={styles.image}
                                resizeMode="cover"
                            />
                        </View>
                        <View style={styles.columnContainer}>
                            <Image
                                source={brown}
                                style={styles.image}
                                resizeMode="cover"
                            />
                        </View>
                        <View style={styles.columnContainer}>
                            <Image
                                source={brown}
                                style={styles.image}
                                resizeMode="cover"
                            />
                        </View>
                    </View>
                    <View style={styles.rowContainer2}>
                        <View style={styles.columnContainer}>
                            <Image
                                source={brown}
                                style={styles.image}
                                resizeMode="cover"
                            />
                        </View>
                        <View style={styles.columnContainer}>
                            {/* <Image
                                source={green}
                                style={styles.image}
                                resizeMode="cover"
                            /> */}
                            <View style={styles.iconContainer}>
                                <Ionicons 
                                    name="restaurant-outline" 
                                    size={60} 
                                    color="white" 
                                    style={[
                                        {
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        }
                                    ]} 
                                    />
                            </View>
                        </View>
                        <View style={styles.columnContainer}>
                            <Image
                                source={green}
                                style={styles.image}
                                resizeMode="cover"
                            />
                        </View>
                    </View>
                    <View style={styles.rowContainer3}>
                        <View style={styles.columnContainer}>
                            <Image
                                source={brown}
                                style={styles.image}
                                resizeMode="cover"
                            />
                        </View>
                        <View style={styles.columnContainer}>
                            <Image
                                source={grey}
                                style={[styles.image,]}
                                resizeMode="cover"
                            />
                        </View>
                        <View style={styles.columnContainer}>
                            <Image
                                source={purple}
                                style={styles.image}
                                resizeMode="cover"
                            />
                        </View>
                    </View>
                    <View style={styles.rowContainer4}>
                        <View style={styles.columnContainer}>
                            <Image
                                source={orange}
                                style={styles.image}
                                resizeMode="cover"
                            />
                        </View>
                        <View style={styles.columnContainer}>
                            <Image
                                source={green}
                                style={styles.image}
                                resizeMode="cover"
                            />
                        </View>
                        <View style={styles.columnContainer}>
                            <Image
                                source={orange}
                                style={styles.image}
                                resizeMode="cover"
                            />
                        </View>
                        </View>
                </View>
                </View>
            <Text style={styles.bigText}>Hi, we're Uber Eats Redesign 👋</Text>
            <Text numberOfLines={2} style={styles.smallText}>We are giving your hunger a new option, good{"\n"} food is what you deserve</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonLogin} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.buttonTextLogin}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonSignUp} onPress={() => navigation.navigate('Signup')}>
                    <Text style={styles.buttonTextSign}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default Login;




const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F4FEFF',
    },
    bigText: {
        fontSize: 22,
        fontWeight: 'bold',
        margin: 10,
        textAlign: 'center',
        bottom: 50,
    },
    smallText: {
        fontSize: 16,
        margin: 10,
        textAlign: 'center',
        color: '#98A3A9',
        bottom: 50,
        lineHeight: 25,
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        bottom: 30,
    },
    buttonLogin: {
        backgroundColor: '#F4FEFF',
        padding: 10,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#333544',
        margin: 10,
        height: 60,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonSignUp: {
        backgroundColor: '#333544',
        padding: 10,
        borderRadius: 15,
        margin: 10,
        height: 60,
        width: 170,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonTextLogin: {
        fontSize: 16,
        color: '#333544',
        fontWeight: '500',
    },
    buttonTextSign: {
        fontSize: 16,
        color: 'white',
        fontWeight: '500',
    },
    containerLogin: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F4FEFF',
        bottom: 50,
    },
    bigContainerRow: {
        // flexDirection: 'column',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 90
    },
    rowContainer1: {
        flexDirection: 'row',
        width: '100%',
        height: '25%',
        transform: [{ rotate: '55deg' }],
        marginBottom: 80,
        top: 110,
        left: 210,
        padding: 10,
        
    },
    rowContainer2: {
        flexDirection: 'row',
        width: '100%',
        height: '25%',
        transform: [{ rotate: '55deg' }],
        marginBottom: 150,
        top: 80,
        left: 90,
        // marginBottom: 20,
        
    },
    rowContainer3: {
        flexDirection: 'row',
        width: '100%',
        height: '25%',
        transform: [{ rotate: '55deg' }],
        // marginBottom: 80,
        bottom: 210,
        right: 100,
        padding: 10,
        
    },
    rowContainer4: {
        flexDirection: 'row',
        width: '100%',
        height: '25%',
        transform: [{ rotate: '55deg' }],
        marginBottom: 80,
        bottom: 340,
        right: 310,
        padding: 10,
        
    },
    columnContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 90,
        marginRight: 130,
    },
    image: {
        width: 170,
        height: 210,
        borderWidth: 6,
        borderColor: 'white',
        transform: [{ rotate: '-90deg' }],
        borderRadius: 20,
    },
    iconContainer: {
        width: 120,
        height: 120,
        borderRadius: 15,
        borderWidth: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#556ADD',
        borderColor: '#556ADD',
        transform: [{ rotate: '-90deg' }],
        shadowColor: "#556ADD",
        shadowOffset: {
            width: 15,
            height: 10,
        },
        shadowOpacity: 0.55,
        shadowRadius: 10.84,
        elevation: 5,
    },
});


