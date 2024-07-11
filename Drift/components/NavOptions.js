import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';

const data = [
    {
        id:"123",
        title:"Get a ride",
        image:"https://links.papareact.com/3pn",
        screen:"MapScreen",
    },
    {
        id:"456",
        title:"Order food",
        image:"https://links.papareact.com/28w",
        screen:"EatsScreen", //Change later
    }
]

const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);
  return (
    <FlatList 
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) =>(
            <TouchableOpacity
             onPress={() => navigation.navigate(item.screen)}
             style={[tw`bg-gray-200`,{padding:2, paddingLeft:5,paddingBottom:8, paddingTop:4, margin:5, width:130}]}
             disabled={!origin}
             >
            
               <View style={tw`${!origin && "opacity-20"}`}>
                <Image 
                style={{width:130, height:130, resizeMode: 'contain'}}
                 source={{uri: item.image}}
                />
                <Text style={[tw`mt-2 text-lg font-semibold`,{textAlign: "center"}]}>{item.title}</Text>
                <Icon 
                style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                name='arrowright' color="white" type="antdesign" />
               </View>
            </TouchableOpacity>
        )}
    />
  )
}

export default NavOptions

const styles = StyleSheet.create({})