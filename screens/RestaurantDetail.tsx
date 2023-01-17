import * as React from 'react';
import { ScrollView, View } from 'react-native';
import About from '../components/RestaurantDetail/About';
import { Divider } from 'react-native-elements';
import MenuItems from '../components/RestaurantDetail/MenuItems';
import ViewCart from '../components/RestaurantDetail/ViewCart';
import { NativeBaseProvider } from 'native-base';


const foods = [
  {
    title: "Giant Menu",
    description: "Giant Menu with Giant sauce",
    price: "$14.00",
    image:
      "https://static.takeaway.com/images/chains/fr/quick/products/menumenu_megagiant-500x500.png?timestamp=1673719116",
  },
  {
    title: "Le Montagnard",
    description:
      "Tenders, bacon, mushrooms, onions, and mozzarella cheese with a side of ranch dressing",
    price: "$11.40",
    image: "https://www.dish.guide/ir/restaurant/fa9/fa9b4bb42ad1327ca28a1410e5e1a9e8.jpg",
  },
  {
    title: "Nacho Crunch Grilled Stuft Burrito",
    description:
      "Nacho Crunch Grilled Stuft Burrito: Nacho cheese sauce, seasoned beef, nacho cheese Doritos® Locos Taco chips, lettuce, and tomatoes",
    price: "$14.50",
    image:
      "https://media.timeout.com/images/105943738/750/562/image.jpg",
  },
  {
    title: "Whooper Menu",
    description:
      "A ¼ lb* of flame-grilled beef patty topped with juicy tomatoes, crisp lettuce, creamy mayonnaise, ketchup, crunchy pickles, and sliced white onions on a soft sesame seed bun",
    price: "$10.30",
    image:
      "https://cdn.sanity.io/images/czqk28jt/prod_bk/f4dc27eb7337f7cbd12d3ccd840e6a031fcba622-360x270.jpg",
  },
  {
    title: "Aloo Patty Sandwich",
    description: "Aloo patty seasoned with special herbs and spices, paired with your choice of your favourite nutritious veggies, on a freshly baked bread.",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/fatr5rnkgph710hgtjpy",
  },
];


interface RestaurantDetailProps {
    route: any;
    navigation: any;
}

interface MenuItemsProps {
  restaurantName: string;
  checkboxValue: string;
  foods: {
    title: string;
    description: string;
    price: string;
    reviews: number;
    image: string;
  }[];
}



export default function RestaurantDetail(props: React.PropsWithChildren<RestaurantDetailProps>) {
  // console.log('route props: ', props.route)
  const restaurantName = props.route?.params?.name;

  const { route } = props;
  const { params } = route;
  const requiredProps = ['name', 'image', 'price', 'reviews', 'rating', 'categories'];
  const missingProps = requiredProps.filter(prop => !params[prop]);

  if (missingProps.length) {
    console.log(`Missing prop(s): ${missingProps.join(', ')}`);
    console.log('Props are not valid');
    } else {
    console.log('Props are valid');
    }
    
    // const restaurantName = route?.params?.name;

  return (
    <ScrollView>
      <About route={route} />
      <MenuItems restaurantName={restaurantName} checkboxValue={''} foods={foods}  />
      <ViewCart navigation={props.navigation} />
      
    </ScrollView>
  );
}

