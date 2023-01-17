import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, ColorValue, FlatList } from 'react-native'
import React, { ReactNode, useState } from 'react'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import { useNavigation } from '@react-navigation/native';

const menuCategories = [
  {
    image: require('../../assets/images/menuCategories/breakfast.png'),
    text: 'Breakfast',
  },
  {
    image: require('../../assets/images/menuCategories/burger.png'),
    text: 'Burgers',
  },
  {
    image: require('../../assets/images/menuCategories/side.png'),
    text: 'Sides',
  },
  {
    image: require('../../assets/images/menuCategories/ice_cream.png'),
    text: 'Desserts',
  },
  {
    image: require('../../assets/images/menuCategories/beverage.png'),
    text: 'Beverages',
  }
];

interface Restaurant {
  review_count: any;
  name: string;
  rating: number;
  categories: string[];
  price: string;
  reviews: number;
  image_url: string;
  logo: string;
  color: string;
}

interface RestaurantItemProps {
  restaurantData: Restaurant[];
}

export default function About(props:  {
  name: ReactNode;
  image: string | undefined; route: { params: { name: any; image: any; price: any; reviews: any; rating: any; categories: any; logo: any }; }; 
}) {
  const { name, image, price, reviews, rating, categories, logo } = props.route.params;
  // const formattedCategories = categories ? categories.map((cat: { title: any; }) => cat.title).join(' • ') : '';
  // const description = `${formattedCategories} ${price ? " • " + price : ""} • 🎫 • ${rating} ⭐ (${reviews}+)`;
  const [isFavorite, setIsFavorite] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
    }, 5000);
  }
  const [randomMinutes, setRandomMinutes] = useState (5 *(Math.floor(Math.random()  * 10) * 1 + 1));
  return (
    <View style={{ height: 550 }}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          // backgroundColor: 'rgba(0,0,0,0.5)'
        }}>
          <View style={{
            width: '80%',
            height: 55,
            padding: 20,
            backgroundColor: '#F26E50',
            borderRadius: 30,
            alignItems: 'center',
            top: 370,
            borderWidth: 1,
            borderColor: 'black',
          }}>
            <Text style={{ color: 'white' }}>{isFavorite ? `${name} added to favorite.` : `${name} removed from favorite.`}</Text>
            
          </View>
        </View>
      </Modal>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        zIndex: 999,
        top: 50,
        alignItems: 'center',
        position: 'relative',
      }}>
        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            width: 50,
            height: 50,
            borderRadius: 30,
            padding: 10,
            alignItems: 'center',
            right: 50,
          }}
          onPress={() => navigation.goBack()}
        >
          <FontAwesome5
            name='chevron-left'
            size={30}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            width: 50,
            height: 50,
            borderRadius: 30,
            padding: 10,
            alignItems: 'center',
            left: 50
          }}
          onPress={toggleFavorite}
        >
          <FontAwesome5
            name='heart'
            size={30}
            style={{
              marginRight: 0,
              color: isFavorite ? 'red' : 'black',
            }}
          />
        </TouchableOpacity>

      </View>
      <Image source={{uri: image}} 
          style={{ width: '100%', height: 300, resizeMode: 'cover', bottom: 70 }}
      />
      <View style={{ bottom: 70, left: 0, right: 0, padding: 20, flexDirection: 'row' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', bottom: 15, left: 60 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {/* <Image source={{uri: logo}} style={{ width: 100, height: 100, borderRadius: 50, borderWidth: 1, borderColor: 'black' }} /> */}
          <RestaurantLogo logo={logo}   image={undefined} />
          </View>
          <Text style={{ fontSize: 20, fontWeight: 'bold', right: 50, bottom: 20 }}>{name}</Text>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 20, left: 20, bottom: 25 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 15, backgroundColor: 'white', height: 40, width: 65, borderRadius: 30, borderColor: '#EBECF0', borderWidth: 1.5,
        justifyContent: 'center', }}>
            <FontAwesome5 name='star' size={20} style={{ marginRight: 5, color: 'orange' }} />
            <Text style={{ fontSize: 16, fontWeight: '400', marginLeft: 5 }}>{rating}</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', height: 40, width: 110, borderRadius: 30, borderColor: '#EBECF0', borderWidth: 1.5,
        justifyContent: 'center', }}>
            <FontAwesome5 name='clock' size={20} style={{ marginRight: 5, color: 'red' }} />
            <Text style={{ fontSize: 16, fontWeight: '400', marginLeft: 5 }}>{randomMinutes} Mins</Text>
          </View>
        </View>
      </View>
      <View style={{ bottom: 110, marginHorizontal: 10 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, left: 10 }}>Choose Category</Text>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={menuCategories}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <View style={styles.circleBackground}>
                            <Image source={item.image} style={styles.image} />
                        </View>
                        <Text style={styles.text}>{item.text}</Text>
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
      </View>
    
  )
};


const RestaurantLogo = (props: {
  color: ColorValue | undefined;
  logo: string | undefined; image: any; 
}) => (
  <>
      
      <View style={{ 
          width: 75, 
          height: 75, 
          justifyContent: 'center', 
          right: 65, 
          bottom: 30, 
          borderRadius: 50, 
          backgroundColor: props.color,
          alignItems: 'center',
          borderWidth: 5,
          borderColor: 'white',
          shadowOpacity: 0,
      }}>
          <Image 
              source={{
                  uri: props.logo
              }}
              style={{ 
                  width: 50, 
                  height: 50, 
                  borderRadius: 20, 
              }}
          />
      </View>
  </>
);

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
  }
});
// import { View, Text, Image, ColorValue, StyleSheet, TouchableOpacity, Modal } from 'react-native'
// import React, { useState } from 'react'
// import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
// import { useNavigation } from '@react-navigation/native';


// // const yelpRestaurantInfo = {
// //   name: 'The Best Burger in Town',
// //   image: 'https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
// //   price: '$$',
// //   reviews: 7000,
// //   rating: 5,
// //   categories: [{title: 'American'}, {title: 'Burger'}],
// // };



// // interface Props{
// //   name: string;
// //   image: string;
// //   price: string;
// //   reviews: number;
// //   rating: number;
// //   categories: [{title: string;}];
// // }

// interface Restaurant {
//   review_count: any;
//   name: string;
//   rating: number;
//   categories: string[];
//   price: string;
//   reviews: number;
//   image_url: string;
//   logo: string;
// }


//   interface RestaurantItemProps {
//     restaurantData: Restaurant[];
//   }

//   export default function About(props:  { route: { params: { name: any; image: any; price: any; reviews: any; rating: any; categories: any; logo: any }; }; }) {
//     const { name, image, price, reviews, rating, categories, logo } =
//       props.route.params;
//     const formattedCategories = categories ? categories.map((cat: { title: any; }) => cat.title).join(' • ') : '';
//     const description = `${formattedCategories} ${price ? " • " + price : ""} • 🎫 • ${rating} ⭐ (${reviews}+)`;
//     //...
//     return (
//       <View>
//         {/* <RestaurantLogo logo={logo} color={'#f5f5f5'} image={undefined}/> */}
//         <RestaurantImage image={image} logo={undefined}/>
//         {/* <RestaurantName name={name} color={undefined} logo={undefined} image={undefined}  /> */}
//         <RestaurantDescription description={description} reviews={reviews} />
//       </View>
//   )
  
//   }
  
  
//   const RestaurantImage = (props: {
//     logo: string | undefined; image: any; 
//   }) => {
//     const navigation = useNavigation();
//     const [isFavorite, setIsFavorite] = useState(false);
//     const toggleFavorite = () => {
//       setIsFavorite(!isFavorite);
//     }
//     return (
//       <>
//         <View style={{ 
//             flexDirection: 'row', 
//             justifyContent: 'space-around', 
//             zIndex: 999,
//             top: 50,
//             alignItems: 'center',
//             position: 'relative',
//             }}>
//             <TouchableOpacity
//               style={{ 
//                 backgroundColor: 'white', 
//                 width: 40, 
//                 height: 40, 
//                 borderRadius: 20, 
//                 padding: 5, 
//                 alignItems: 'center', 
//                 right: 50 
//               }}
//               onPress={() => navigation.goBack()}
//             >
//               <FontAwesome5
//                 name='chevron-left'
//                 size={30}
//               />
//             </TouchableOpacity>

//             <View style={{ 
//                 backgroundColor: 'white', 
//                 width: 40, 
//                 height: 40, 
//                 borderRadius: 20, 
//                 padding: 5, 
//                 alignItems: 'center', 
//                 left: 50 
//               }}>
//                 <FontAwesome5 
//                   name='heart'
//                   size={30}
//                   style={{
//                     marginRight: 0,
//                     color: 'red',
//                   }}
//                 />
//             </View>

//             </View>
//         <Image source={{uri: props.image}} 
//           style={{ width: '100%', height: 300, resizeMode: 'cover', bottom: 70 }}
//         />
//       </>
//     );
// };

  






























//   const RestaurantLogo = (props: {
//     color: ColorValue | undefined;
//     logo: string | undefined; image: any; 
// }) => (
//     <>
        
//         <View style={{ 
//             width: 60, 
//             height: 60, 
//             justifyContent: 'center', 
//             left: 65, 
//             bottom: 30, 
//             borderRadius: 40, 
//             backgroundColor: props.color,
//             alignItems: 'center',
//             borderWidth: 5,
//             borderColor: 'white',
//             shadowOpacity: 0,
//         }}>
//             <Image 
//                 source={{
//                     uri: props.logo
//                 }}
//                 style={{ 
//                     width: 50, 
//                     height: 50, 
//                     borderRadius: 20, 
//                 }}
//             />
// </View>
//     <TouchableOpacity 
//         style={{
//             position: 'absolute', right: 20, bottom: 10
//         }}>
//     </TouchableOpacity>
//     </>
// );

// const RestaurantName = (props: { name: any; color: ColorValue | undefined;
//   logo: string | undefined; image: any; }) => (
//     <View style={{ 
//         width: 60, 
//         height: 60, 
//         justifyContent: 'center', 
//         left: 45, 
//         bottom: 30, 
//         borderRadius: 40, 
//         backgroundColor: props.color,
//         alignItems: 'center',
//         borderWidth: 5,
//         borderColor: 'white',
//         shadowOpacity: 0,
//     }}>
//       <Image 
//         source={{
//             uri: props.logo
//         }}
//         style={{ 
//             width: 50, 
//             height: 50, 
//             borderRadius: 20, 
//             zIndex: 999,
//         }}
//       />
//       <Text 
//         style={{ 
//           fontSize: 29, 
//           fontWeight: '600', 
//           marginTop: 10, 
//           marginHorizontal: 15
//         }}
//       >
//         {props.name}
//       </Text>
//     </View>
// );

// const RestaurantDescription = (props: { description: any; reviews: any; }) => (
//   <Text 
//     style={{ 
//       fontSize: 15, 
//       fontWeight: '400', 
//       marginTop: 10,
//       marginHorizontal: 15
//     }}
//   >
//       {props.description}
//   </Text>
// );

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     padding: 10,
//   },
//   logo: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     alignSelf: 'center'
//   },
//   restaurantImage: {
//     width: 450,
//     height: 220,
//     right: 100,
//     bottom: 10,
//     alignSelf: 'center'
//   },
//   reviews: {
//     fontWeight: 'bold',
//     fontSize: 16,
//     marginRight: 10,
//   },
//   backArrow: {
//     alignSelf: 'flex-start',
//     color: 'black',
//     marginLeft: 10,
//     zIndex: 1
//   },
//   heartIcon: {
//     alignSelf: 'flex-end',
//     color: 'red',
//     marginRight: 10,
//     zIndex: 999
//   },
// });

