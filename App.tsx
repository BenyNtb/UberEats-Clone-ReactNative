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

