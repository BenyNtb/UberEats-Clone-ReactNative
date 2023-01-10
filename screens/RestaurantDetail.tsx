import * as React from 'react';
import { View, Text } from 'react-native';
import About from '../components/RestaurantDetail/About';
import { Divider } from 'react-native-elements';
import MenuItems from '../components/RestaurantDetail/MenuItems';

interface RestaurantDetailProps {
route: any;
}


export default function RestaurantDetail(props: React.Props<any> & RestaurantDetailProps) {
  return (
    <View>
      <About route={props.route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItems />
    </View>
  );
}

