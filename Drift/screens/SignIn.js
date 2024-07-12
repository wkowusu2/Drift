import { Button, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react';

const apple = require('../assets/images/apple.png');
const google = require('../assets/images/google.png');
const fb = require('../assets/images/fb.png');

const SignIn = () => {
  
  return (
    <SafeAreaView style={styles.container}>
      <View>
      <Text style={styles.welcomeText}>WELCOME BACK</Text>
      </View>
      <Text style={styles.noticeText}>Please log in into your account</Text>
      <TextInput style={[{marginBottom: 25},styles.textInputBox]} placeholder='Email address' placeholderTextColor="white" />
      <TextInput style={styles.textInputBox} placeholder='Password' placeholderTextColor="white" />
      <TouchableOpacity style={styles.forgetPassword}>
        <Text>Forget Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton}>
      <Text style={styles.loginText}>LOG IN</Text>
      </TouchableOpacity>

      <View style={{flexDirection: "row", alignItems: "center"}}>
        <Text style={{fontSize: 20}}>Don't have an account? </Text>
        <TouchableOpacity style={{marginLeft:3, borderBottomWidth:1, borderBottomColor: "#1C05B3"}}>
          <Text style={{fontSize: 15,color: "#1C05B3"}}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.lineContainer}>
        <View style={styles.line} />
        <Text style={styles.centerText}>Sign in with </Text>
        <View style={styles.line} />
        </View>
        <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Image
            source={apple}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image
            source={fb}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image
            source={google}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      
    </SafeAreaView>
  )
}

export default SignIn

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingTop: "20%",
        alignItems: "center"
    },
    welcomeText: {
        color: "#1C05B3",
        fontSize: 30,
        marginBottom: 10,
    },
    noticeText: {
        color: "black",
        fontSize: 15,
        marginBottom:30,
    },
    textInputBox: {
        borderWidth: 2,
         borderColor: "#1C05B3",
        width: "70%",
        borderRadius: 10,
        padding: 10,
        backgroundColor:"#1C05B3",
        color: "white",
        fontSize: 15,
    },
    forgetPassword: {
      marginTop: 15,
      marginLeft: 170,
      fontSize: 25,
      marginBottom: 50,
      
    },
    loginButton: {
      width: 150,
      height: 50,
      backgroundColor: 'blue',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      backgroundColor: "#C54B8C", // WORK ON THE SHADE
      marginBottom: 20,
    },
    loginText: {
      color: "white"
    },
    lineContainer: {
      marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%', // Adjust this width as necessary
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'black',
  },
  centerText: {
    marginHorizontal: 10, // Space between text and lines
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%', // Adjust as needed
  },
  button: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  icon: {
    width: 50, // Adjust the size of the icon
    height: 50, // Adjust the size of the icon
  },
})