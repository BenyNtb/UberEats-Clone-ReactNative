import {View, Text, SafeAreaView} from 'react-native'
import React from 'react'
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function SearchBar({cityHandler} : {
    cityHandler: any
}) {
    return (
        <SafeAreaView
            style={{
            marginTop: 50,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            left: 10,
        }}>
            <View>
                <View style={{ position: 'absolute', zIndex: 999, left: 20, bottom: 0 }}>
                    <Ionicons name="location-sharp" size={40} color={'#5A5FBF'}/>
                </View>
                <GooglePlacesAutocomplete
                    placeholder='| Search Restaurants'
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
                        backgroundColor: 'white',
                        borderRadius: 20,
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginRight: 10,
                        width: 320,
                    }
                    }}
                />
            </View>
            <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', bottom: 10, right: 10 }}>
                <FontAwesome5 name="filter" size={30} style={{top: 20, left: 30, borderWidth: 1, borderRadius: 15, borderColor: 'lightgrey', height: 60, width: 60, backgroundColor: 'white' }}/>
            </View>
        </SafeAreaView>
    )
}