import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete"
import { GOOGLE_MAPS_APIKEY } from "@env" ;
import { TextInput } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';
import NavFavourite from './NavFavourite';
import { Icon } from 'react-native-elements';

//remember to pick the name and time for the greeting 
const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Good day, UserName</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
      <View>
         <GooglePlacesAutocomplete 
            placeholder='where to'
            styles={toInputBoxStyles}
            fetchDetails={true}
            minLength={2}
            onPress={(data, details = null ) =>{
              dispatch(setDestination({
                location: details.geometry.location,
                description: data.description,
              })
              );

              navigation.navigate("RideOptionsCard");
            }}
            enablePoweredByContainer={false}
            query={{
                key: GOOGLE_MAPS_APIKEY,
                language: "en",
            }}
            nearbyPlacesAPI='GooglePlacesSearch'
            debounce={400}
         />
      </View>

      <NavFavourite />
      </View>

      <View style={tw`flex flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}>
        <TouchableOpacity
         onPress={() => navigation.navigate("RideOptionsCard")}
         style={tw`flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`}>
            <Icon name='car' type='font-awesome' color="white" size={16} />
            <Text style={tw`text-white text-center`} >Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`flex flex-row justify-between w-24 px-4 py-3 rounded-full`}>
            <Icon name='fast-food-outline' type='ionicon' color="black" size={20} />
            <Text style={tw`text-center`}>Eats</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default NavigateCard 

const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingTop: 20,
        flex: 0,
    },
    TextInput: {
        backgroundColor: "#DDDDDF",
        borderRadius: 0,
        fontSize: 18,
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom:0,
    }
});