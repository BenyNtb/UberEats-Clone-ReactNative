// import {View, Text, TouchableOpacity} from 'react-native';
// import React, {useState} from 'react';

// interface Props {
//   activeTab: any;
//   setActiveTab: (tab: any) => void;
// }

// export default function HeaderTabs(props: Props) {

//   return (
//     <View style={{flexDirection: 'row', alignSelf: 'center'}}>
//       <HeaderButton
//         text="Delivery"
//         btnColor="black"
//         textColor="white"
//         activeTab={props.activeTab}
//         setActiveTab={props.setActiveTab} 
//       />
//       <HeaderButton
//         text="Pickup"
//         btnColor="white"
//         textColor="black"
//         activeTab={props.activeTab}
//         setActiveTab={props.setActiveTab}
//       />
//     </View>
//   );
// }

// interface HeaderButtonProps {
//   activeTab: any;
//   setActiveTab: (tab: any) => void;
//   text: any;
//   btnColor: any;
//   textColor: any;
// }

// const HeaderButton = (props: HeaderButtonProps) => {
//   const {activeTab, setActiveTab, text, btnColor, textColor} = props;

//   return (
//     <TouchableOpacity
//       style={{
//         backgroundColor: activeTab === text ? 'black' : 'white',
//         paddingVertical: 6,
//         paddingHorizontal: 16,
//         borderRadius: 30,
//       }}
//       onPress={() => setActiveTab(text)}
//     >
//       <Text
//         style={{
//           color: activeTab === text ? 'white' : 'black',
//           fontSize: 15,
//           fontWeight: '900',
//         }}
//       >
//         {text}
//       </Text>
//     </TouchableOpacity>
//   );
// };



import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Banner } from 'react-native-paper';

const Icon = (props: { icon: string; onPress?: () => void }) => (
  <TouchableOpacity onPress={props.onPress} >
      <View>
      <FontAwesome5
          name={props.icon}
          size={25}
          style={{
          marginBottom: 3,
          alignSelf: 'flex-end',
          top: -40,
          right: 20,
          }}
      />
      </View>
  </TouchableOpacity>
)

const SearchBanner = () => {
  return (
      <Banner
          visible={true}
          icon={({size}) => (
              <FontAwesome5
                  name="location-arrow"
                  size={20}
                  color="#5F61B8"
              />
          )}
          style={{
              backgroundColor: '#fff',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 20,
          }}>
            <Text>
              My Current Location {"\n"}
            </Text>
            <Text ellipsizeMode='tail' numberOfLines={1} style={{ color: 'black', fontWeight: 'bold' }}>
              175 Greenwich St, New York, United States
            </Text>
            
            <FontAwesome5
                name='chevron-right'
                size={20}
                style={{
                    alignSelf: 'flex-end',
                    color: '#5F61B8',
                    marginRight: 20,
                }}
            />
          
      </Banner>
  );
};


export default function HeaderTabs() {
  return (
    <>
      <View style={{ left: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Hello Megan👋</Text>
        <Text style={{ fontWeight: '500' }}>We are delivering happiness</Text>
      </View>
        <Icon icon='search'/>
        <SearchBanner />
    </>
  )
}

