import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, Modal, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import googleLogo from '../assets/images/google-logo.png';
import facebookLogo from '../assets/images/facebook-logo.png';

interface Props {}

const Signup = (props: Props) => {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const onSubmit = () => {
        setModalVisible(true);
        setTimeout(() => {
            setModalVisible(false);
            navigation.navigate('Home');
        }, 4000);
    };
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={styles.container}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                }}>
                <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Text style={styles.modalText}>Congratulations, your account has been successfully created!</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            <Image
                source={require('../assets/images/login.png')}
                style={styles.logo}
            />
            <View style={styles.formContainer}>
                <Text style={styles.title}>Sign up</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your email"
                    keyboardType="email-address"
                    onChangeText={(email) => setEmail(email)}
                    value={email}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter your password"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                    value={password}
                />
                <TouchableOpacity style={styles.button} onPress={onSubmit}>
                    <Text style={styles.buttonText}>Sign up</Text>
                </TouchableOpacity>
                <View style={styles.socialContainer}>
                    <TouchableOpacity style={styles.socialButtonGoogle}>
                        <Image source={googleLogo} style={styles.socialLogo} />
                        <Text style={styles.socialButtonText}>Continue with Google</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialButtonFacebook}>
                        <Image source={facebookLogo} style={styles.socialLogo} />
                        <Text style={styles.socialButtonText}>Sign up with Facebook</Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={styles.socialButton}>
                        <Text style={styles.socialButtonText}>Sign up with Apple</Text>
                    </TouchableOpacity> */}
                </View>
            </View>
        </View>
    );
};
export default Signup;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#5A5FBF',
    },
    logo: {
        width: '80%',
        height: '30%',
        marginBottom: '10%',
    },
    formContainer: {
        alignItems: 'center',
        width: '80%',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 20,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        padding: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
    },
    button: {
        width: '100%',
        backgroundColor: '#A3D9B6',
        padding: 10,
        marginTop: 10,
        alignItems: 'center',
        borderRadius: 20,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
    },
    socialContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 20,
        margin: 10,
    },
    
    socialButtonGoogle: {
        width: 300,
        backgroundColor: '#D95448',
        padding: 10,
        alignItems: 'center',
        borderRadius: 20,
        flexDirection: 'row',
        marginBottom: 10,
    },
    socialButtonFacebook: {
        width: 300,
        backgroundColor: '#3B5998',
        padding: 10,
        alignItems: 'center',
        borderRadius: 20,
        flexDirection: 'row',
    },
    socialButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
    },
    modalContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: '#fff',
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    modalText: {
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 10,
    },
    modalButton: {
        width: '100%',
        backgroundColor: '#F26E50',
        padding: 10,
        alignItems: 'center',
        borderRadius: 20,
    },
    modalButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
    },
    modalContent: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#A3D9B6',
        borderRadius: 15,
    },
    socialLogo: {
        width: 40,
        height: 40,
        marginRight: 10,
        resizeMode: 'contain'
    },
    
});
