import * as React from 'react';
import { View } from 'react-native';
import About from '../components/RestaurantDetail/About';
import { Divider } from 'react-native-elements';
import MenuItems from '../components/RestaurantDetail/MenuItems';
import ViewCart from '../components/RestaurantDetail/ViewCart';


const foods = [
  {
    title: "Sushi",
    description: "4 spring rolls with salmon - avocado, 6 california rolls salmon-avocado, 6 makis salmon-avocado",
    price: "$14.00",
    image:
      "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    title: "Pizza Margherita",
    description:
      "Tomato sauce, mozzarella, oregano",
    price: "$8.20",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=781&q=80",
  },
  {
    title: "Balanced Salad",
    description:
      "Light Rice, Black Beans, Chicken, Fajita Veggies, Fresh Tomato Salsa, Guacamole, and Extra Romaine Lettuce - 61g Carbs, 45g Protein, 33g Fat",
    price: "$14.50",
    image:
      "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photosV2/b0ba3e1b-d300-4b89-8d19-68efae27ef32-retina-large.jpg",
  },
  {
    title: "Burger",
    description:
      "3 premium ground brisket, chuck, and short rib smashed patties, American cheese and our dirty sauce on a Martin’s famous potato roll",
    price: "$18.50",
    image:
      "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/dac788a8-25e3-4d86-81d4-c4202b51a298-retina-large-jpeg",
  },
  {
    title: "Chicken Wings",
    description: "Korean fried chicken: Crispy, juicy, and minimally greasy",
    price: "$15.95",
    image:
      "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/383f45aa-9c2f-49ce-914e-6f201ecff0a9-retina-large.jpg",
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
    <View>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItems restaurantName={restaurantName} checkboxValue={''} foods={foods}  />
      <ViewCart navigation={props.navigation} restaurantName={restaurantName}/>
      
    </View>
  );
}

