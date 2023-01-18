import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import RestaurantDetail from './screens/RestaurantDetail';
import { Provider as ReduxProvider } from 'react-redux';
import store from './redux/store';
import configureStore from './redux/store';
import OrderCompleted from './screens/OrderCompleted';
import Account from './screens/Account';
import BottomTabs from './components/Home/BottomTabs'
import Search from './screens/Search';
import Promo from './screens/Promo';
import Login from './screens/Login';
import Signup from './screens/Signup';

// const store = configureStore();

export default function RootNavigation() {
    const Stack = createStackNavigator();
    const screenOptions = {
        headerShown: false,
    };
  return (
    <ReduxProvider store={store()} >
      <NavigationContainer>
          <Stack.Navigator initialRouteName='Login' screenOptions={screenOptions}>
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Signup" component={Signup} />
              <Stack.Screen name="Home" component={Home} options={{ header: ({ navigation }) => <BottomTabs navigation={navigation} /> }} />
              <Stack.Screen name="Search" component={Search} options={{ header: ({ navigation }) => <BottomTabs navigation={navigation} /> }} />
              <Stack.Screen name="Promo" component={Promo} options={{ header: ({ navigation }) => <BottomTabs navigation={navigation} /> }} />
              <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} options={{ header: ({ navigation }) => <BottomTabs navigation={navigation} /> }} />
              <Stack.Screen name="OrderCompleted" component={OrderCompleted} options={{ header: ({ navigation }) => <BottomTabs navigation={navigation} /> }} />
              <Stack.Screen name="Account" component={Account} options={{ header: ({ navigation }) => <BottomTabs navigation={navigation} /> }} />
          </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  )
}
