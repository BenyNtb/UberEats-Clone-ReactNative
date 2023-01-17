import { View, Text, Pressable, ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Avatar, Badge, Box, Flex, HStack, NativeBaseProvider, Spacer } from "native-base";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import { Divider } from 'react-native-elements';
import { color } from 'react-native-reanimated';
import { Banner } from 'react-native-paper';
import BottomTabs from '../components/Home/BottomTabs';


const avatarAccount = () => {
    return (
    <NativeBaseProvider>
    <View style={{alignItems: 'center'}}>
    <Avatar bg="green.500" size="xl" source={{
    uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  }}>
      AJ
    </Avatar>
    </View>
    </NativeBaseProvider>
    );
}


    const Icon =(props: {text: string, icon: string}) => (
        <NativeBaseProvider>
            <HStack>
                <FontAwesome5
                    name={props.icon}
                    size={25}
                    style={{
                        alignSelf: 'center',
                        color: '#A3D9B6',
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                        overflow: 'hidden',
                        backgroundColor: '#e1f3e8',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                />
                <Text style={{ alignSelf: 'center', fontWeight: 'bold', marginLeft: 10 }}>{props.text}</Text>
            </HStack>
            <FontAwesome5
                name='chevron-right'
                size={20}
                style={{
                    alignSelf: 'flex-end',
                    color: 'lightgrey',
                }}
            />
        </NativeBaseProvider>
    )



export default function Account() {
    const [visible, setVisible] = React.useState(true);
    return (
        <>
        <SafeAreaView>
            <Text style={{
                fontSize: 15, 
                fontWeight: 'bold', 
                textAlign: 'center', 
                marginTop: 20,
                marginBottom: 20
            }}
            >
                Profile
            </Text>
                {avatarAccount()}
            <Text style={{
                fontSize: 20, 
                fontWeight: 'bold', 
                textAlign: 'center', 
                marginTop: 105,
                // marginBottom: 20
            }}
            >
                Megan Taylor
            </Text>
            <Text style={{
                fontSize: 15,
                fontWeight: 'bold',
                textAlign: 'center',
                marginTop: 10,
                color: 'grey'
            }}
            >
                megan.t@gmail.com
            </Text>
            <Banner
                style={{
                    backgroundColor: '#EAF9E6',
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
                <Text style={{ color: '#204f13', fontWeight: 'bold' }}>
                    Invite friends and pay less {"\n"} {"\n"}
                </Text>
                
                <Text
                    style={{
                        marginTop: 20,
                        fontWeight: '500',
                        color: '#77877C'
                    }}
                >
                    Invite a friend and earn free credits with {"\n"} their first order.
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
            </SafeAreaView>

            <ScrollView>
                <View
                    style={{
                        flexDirection: 'column',
                        margin: 10,
                        marginHorizontal: 30,
                        justifyContent: "space-between"
                    }}>
                    <Text style={{
                        fontSize: 17,
                        fontWeight: 'bold',
                        marginBottom: 20,
                        color: 'grey'
                    }}
                    >
                        General
                    </Text>
                    <Icon icon='user' text='My Account' /> 
                    <Divider width={0.5} style={{ marginHorizontal: -10, marginBottom: 5, marginTop: 15 }}/>
                    <Icon icon='home' text='Address' />
                    <Divider width={0.5} style={{ marginHorizontal: -10, marginBottom: 5, marginTop: 15 }}/>
                    <Icon icon='money-check' text='Billing/Payment' />
                    <Divider width={0.5} style={{ marginHorizontal: -10, marginBottom: 5, marginTop: 15 }}/>
                </View>
                <View     
                    style={{
                            flexDirection: 'column',
                            margin: 10,
                            marginHorizontal: 30,
                            justifyContent: "space-between"
                    }}
                >
                    <Text 
                        style={{
                            fontSize: 17,
                            fontWeight: 'bold',
                            marginBottom: 20,
                            color: 'grey'
                        }}
                    >
                        Settings
                    </Text>
                    <Icon icon='globe' text='Language' />
                    <Divider width={0.5} style={{ marginHorizontal: -10, marginBottom: 5, marginTop: 15 }}/>
                    <Icon icon='lightbulb' text='Dark Mode' />
                </View>
            </ScrollView>
            <BottomTabs />
        </>
    )
}