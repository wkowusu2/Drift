import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from 'react-redux';
import { setDestination,setOrigin } from '../slices/navSlice';
import NavFavourite from '../components/NavFavourite';
const HomeScreen = () => {
      const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <View style={{padding:10, }}>
      <Image 
        style={{ width: 100, height: 100, resizeMode: "contain"}}
        source={{
            uri: "https://links.papareact.com/gzs"
        }}
      />
      <GooglePlacesAutocomplete 
        placeholder='Where from'
        styles={{
           container: {
            flex: 0,
           },
           textInput: {
            fontSize:18,
           },
        }}
        onPress={(data, details = null) => {
            dispatch(setOrigin({
                location: details.geometry.location,
                description: data.description
            }));

            dispatch(setDestination(null));
        }}
        fetchDetails={true}
        returnKeyType={"search"}
        enablePoweredByContainer={false}
        minLength={2}
    query={{
         key:GOOGLE_MAPS_APIKEY,
         language: 'en'
      }}

        nearbyPlacesAPI='GooglePlacesSearch'
        debounce={400}
      />
      
      <NavOptions />
      <NavFavourite />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        height: "100%",
        
    }
})