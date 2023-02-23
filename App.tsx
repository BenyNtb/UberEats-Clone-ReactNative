import * as React from "react";
import RootNavigation from "./Navigation";
import 'expo-dev-client';
import { LocalizationProvider } from './LocalizationContext';



export default function App() {
  return (
    <LocalizationProvider>  
      <RootNavigation/>
   </LocalizationProvider>
  )
}

// import * as React from "react";
// import { View, Text } from "react-native";
// import Home from "./screens/Home";

// export default function App() {
//   return (
//    <Home navigation={undefined}/>
//   )
// }