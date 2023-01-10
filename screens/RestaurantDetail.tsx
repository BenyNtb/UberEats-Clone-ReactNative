import * as React from 'react';
import { View } from 'react-native';
import About from '../components/RestaurantDetail/About';
import { Divider } from 'react-native-elements';
import MenuItems from '../components/RestaurantDetail/MenuItems';
import ViewCart from '../components/RestaurantDetail/ViewCart';


interface RestaurantDetailProps {
    route: any;
    navigation: any;
}

export default function RestaurantDetail(props: React.PropsWithChildren<RestaurantDetailProps>) {
  const restaurantName = props.route?.params?.name;
  return (
    <View>
      <About route={props.route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItems />
      <ViewCart navigation={props.navigation} restaurantName={restaurantName}/>
      
    </View>
  );
}

