import React from 'react';
import { StyleSheet, TextInput,Text, View } from 'react-native';
import firebase from 'firebase';
import TextInputComponent from './src/components/TextInputComponent'
import LoginButtonComponent from './src/components/LoginButtonComponent'
import Loginform from './src/Loginform'
import {Header} from './src/common';
// import { Icon } from 'react-native-elements'

export default class App extends React.Component {
//    state={
// userNameText
//    }
componentWillMount(){
 firebase.initializeApp({

        apiKey: 'AIzaSyBfk3wqWHdtRxhgpsDJKV0J0jZMOA-kkz0',
        authDomain: "glogin-4555f.firebaseapp.com",
        databaseURL: "https://glogin-4555f.firebaseio.com",
        projectId: "glogin-4555f",
        storageBucket: "glogin-4555f.appspot.com",
        messagingSenderId: "66437944111"
    })

  }
  doLogIn(){
    // alert({userNameText})
  }
  render() {
    return (
      <View >
      <Header/>
        {/* <Icon */}
          {/* name='sc-telegram' */}
          {/* type='evilicon' */}
          {/* color='#517fa4' */}
        {/* /> */}
        <Loginform />
      </View>     
//       <View style={styles.container} >
//         <View style={styles.container}>
//         < TextInputComponent  data="userName"/> 
//         < TextInputComponent  data="password"/> 
// </View>
// <View>
//         <LoginButtonComponent 
//         clickMe={this.doLogIn} data="Login !!"/>
// </View>
//       </View>

);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'orange',
    alignItems: 'center',

     justifyContent: 'center',
  width:'100%'
  }
  ,sections:{
    flex:1,
    justifyContent: 'center',
        alignItems: 'center',

  }
});
