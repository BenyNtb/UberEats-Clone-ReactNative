import { View, Text, TouchableOpacity,  Image } from 'react-native'

const FilterModal = () => {
    return (
        <View>
            <View>
                <Text>Filter</Text>
                <TouchableOpacity>
                    <Text style={{ color: 'red' }}>Clear</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text>Sort By</Text>
                <View style={{ borderRadius: 15 }}>
                    <View>
                        <Text>Rating</Text>
                        {/* <CheckBox /> */}
                    </View>
                    <View>
                        <Text>Delivery Price</Text>
                        {/* <CheckBox /> */}
                    </View>
                    <View>
                        <Text>Delivery Time</Text>
                        {/* <CheckBox /> */}
                    </View>
                </View>
            </View>
            <View>
                <Text>Types of restaurants</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    {
                        restaurantType.map((item, index) => {
                            return (
                                <View style={{ padding: 10 }} key={index}>
                                    <Image source={item.image} style={{ width: 50, height: 50 }} />
                                    <Text>{item.text}</Text>
                                </View>
                            )
                        })
                    }
                </View>
            </View>
            <TouchableOpacity style={{ alignItems: 'center' }}>
                <Text>Apply (234 restaurants)</Text>
            </TouchableOpacity>
        </View>
    )
}
