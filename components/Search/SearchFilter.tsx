// import { View, Text, TouchableOpacity,  Image } from 'react-native'

// const FilterModal = () => {
//     return (
//         <View>
//             <View>
//                 <Text>Filter</Text>
//                 <TouchableOpacity>
//                     <Text style={{ color: 'red' }}>Clear</Text>
//                 </TouchableOpacity>
//             </View>
//             <View>
//                 <Text>Sort By</Text>
//                 <View style={{ borderRadius: 15 }}>
//                     <View>
//                         <Text>Rating</Text>
//                         {/* <CheckBox /> */}
//                     </View>
//                     <View>
//                         <Text>Delivery Price</Text>
//                         {/* <CheckBox /> */}
//                     </View>
//                     <View>
//                         <Text>Delivery Time</Text>
//                         {/* <CheckBox /> */}
//                     </View>
//                 </View>
//             </View>
//             <View>
//                 <Text>Types of restaurants</Text>
//                 <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
//                     {
//                         restaurantType.map((item, index) => {
//                             return (
//                                 <View style={{ padding: 10 }} key={index}>
//                                     <Image source={item.image} style={{ width: 50, height: 50 }} />
//                                     <Text>{item.text}</Text>
//                                 </View>
//                             )
//                         })
//                     }
//                 </View>
//             </View>
//             <TouchableOpacity style={{ alignItems: 'center' }}>
//                 <Text>Apply (234 restaurants)</Text>
//             </TouchableOpacity>
//         </View>
//     )
// }


import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, Image, Animated } from 'react-native';
import i18n from 'i18n-js';


type RestaurantType = {
  image: any;
  text: string;
};

type FilterModalProps = {
  isVisible: boolean;
  onClose: () => void;
  restaurantType: RestaurantType[];
};

const FilterModal = ({ isVisible, onClose, restaurantType }: FilterModalProps) => {
  const translateY = useRef(new Animated.Value(0)).current;

  const handleClose = () => {
    Animated.timing(translateY, {
      toValue: -500,
      duration: 500,
      useNativeDriver: true,
    }).start(onClose);
  };

  return (
    <Animated.View style={[styles.container, { transform: [{ translateY }] }]}>
      <TouchableOpacity style={styles.dragHandler} onPress={handleClose} />
      <View style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <Text>Filter</Text>
          <TouchableOpacity onPress={handleClose}>
            <Text style={{ color: 'red' }}>Clear</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text>{i18n.t('SortBy')}</Text>
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
          <Text>{i18n.t('Typesofrestaurants')}</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {restaurantType.map((item, index) => {
              return (
                <View style={{ padding: 10 }} key={index}>
                  <Image source={item.image} style={{ width: 50, height: 50 }} />
                  <Text>{item.text}</Text>
                </View>
              );
            })}
          </View>
        </View>
        <TouchableOpacity style={{ alignItems: 'center' }}>
          <Text>Apply (234 restaurants)</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

const styles = {
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  contentContainer: {
    padding: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  dragHandler: {
    height: 20,
    width: 50,
    backgroundColor: 'grey',
    alignSelf: 'center',
    borderRadius: 10,
    marginVertical: 10,
  },
};

export default FilterModal;






