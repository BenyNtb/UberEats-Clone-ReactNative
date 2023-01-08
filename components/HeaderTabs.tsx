import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

interface Props {
  activeTab: any;
  setActiveTab: (tab: any) => void;
}

export default function HeaderTabs(props: Props) {
  const {activeTab, setActiveTab} = props;
  return (
    <View style={{flexDirection: 'row', alignSelf: 'center'}}>
      <HeaderButton
        text="Delivery"
        btnColor="black"
        textColor="white"
        activeTab={activeTab}  //{props.activeTab}
        setActiveTab={setActiveTab}   //{props.setActiveTab} 
      />
      <HeaderButton
        text="Pickup"
        btnColor="white"
        textColor="black"
        activeTab={activeTab} //{props.activeTab}
        setActiveTab={setActiveTab} //{props.setActiveTab}
      />
    </View>
  );
}

interface HeaderButtonProps {
  activeTab: any;
  setActiveTab: (tab: any) => void;
  text: any;
  btnColor: any;
  textColor: any;
}

const HeaderButton = (props: HeaderButtonProps) => {
  const {activeTab, setActiveTab, text, btnColor, textColor} = props;

  return (
    <TouchableOpacity
      style={{
        backgroundColor: activeTab === text ? 'black' : 'white',
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
      }}
      onPress={() => setActiveTab(text)}
    >
      <Text
        style={{
          color: activeTab === text ? 'white' : 'black',
          fontSize: 15,
          fontWeight: '900',
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};
