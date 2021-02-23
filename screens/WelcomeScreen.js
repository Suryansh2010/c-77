import React, {Component} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity, TextInput, Alert} from 'react-native';
import SantaAnimation from '../components/SantaClaus.js';
import db from '../config';
import firebase from 'firebase';

export default class WelcomeScreen extends Component{
    constructor(){
        super()
        this.state={
            emailId: '',
            password: ''
        }
    }

    userLogin = (emailId, password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId, password)
        .then(()=>{
            return Alert.alert("Successfully Login")
        })
        .catch((error)=>{
            var errorCode = error.code;
            var errorMessage = error.message;
            return Alert.alert(errorMessage)
        })
    }

    userSignUp = (emailId, Password) =>{
        firebase.auth().createUserWithEmailAndPassword(emailId, password)
        .then ((response)=>{
            return Alert.alert("User Added Successfully")
        })
        .catch(function(error){

            var errorCode = error.code;
            var errorMessage = error.message;
            return Alert.alert(errorMessage)
        });
    }


    render(){
        return(
            <View style={StyleSheet.container}>
                <View style={StyleSheet.profileContainer}>
                    <SantaAnimation/>
                    <Text style={StyleSheet.title}>Book Santa</Text>
                </View>
                <View style={StyleSheet.buttonContainer}>
                    <TextInput
                    style={StyleSheet.loginBox}
                    placeholder="example@booksanta.com"
                    placeholderTextColor = "#00ffff"
                    keyboardType = 'email-address'
                    onChangetext = {(text)=>{
                        this.setState({
                            emailId: text
                        })
                    }}
                    />

                    <TextInput
                    style={StyleSheet.loginBox}
                    secureTextEntry = {true}
                    placeholder="password"
                    placeholderTextColor = "#00ffff"
                    onChangeText={(text)=>{
                        this.setState({
                            password: text
                        })
                    }}
                    />
                    <TouchableOpacity
                    styles={[styles.button, {marginBottom: 20, marginTop: 20}]}
                    onPress = {()=>{this.userLogin(this.state.emailId, this.state.password)}}
                    >
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={()=>{this.userSignUp(this.state.emailId, this.state. password)}}
                    >
                        <Text style={styles.buttonText}>signUp</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor: '#00ffff'
    },
    profileContainer:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    },
    title :{
      fontSize:65,
      fontWeight:'300',
      paddingBottom:30,
      color : '#0fff00'
    },
    loginBox:{
      width: 300,
      height: 40,
      borderBottomWidth: 1.5,
      borderColor : '#00ffff',
      fontSize: 20,
      margin:10,
      paddingLeft:10
    },
    button:{
      width:300,
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:25,
      backgroundColor:"#0fff00",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8,
      },
      shadowOpacity: 0.30,
      shadowRadius: 10.32,
      elevation: 16,
    },
    buttonText:{
      color:'ff9800',
      fontWeight:'200',
      fontSize:20
    },
    buttonContainer:{
      flex:1,
      alignItems:'center'
    }
  })