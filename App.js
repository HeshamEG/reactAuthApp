import React from 'react';
import { StyleSheet, TextInput,Text, View } from 'react-native';
import firebase from 'firebase';
import TextInputComponent from './src/components/TextInputComponent'
import LoginButtonComponent from './src/components/LoginButtonComponent'
import Loginform from './src/Loginform'
import {Header, CardButton} from './src/common';
// import { Icon } from 'react-native-elements'

export default class App extends React.Component {
   state={
logedIn:null
   }
componentWillMount(){
 firebase.initializeApp({

        apiKey: 'AIzaSyBfk3wqWHdtRxhgpsDJKV0J0jZMOA-kkz0',
        authDomain: "glogin-4555f.firebaseapp.com",
        databaseURL: "https://glogin-4555f.firebaseio.com",
        projectId: "glogin-4555f",
        storageBucket: "glogin-4555f.appspot.com",
        messagingSenderId: "66437944111"
    })
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setState({ logedIn:true });
     
      }else{

         this.setState({ logedIn: false });

      }
    })

  }
  renderContent(){
    if (this.state.logedIn) {
return (
  <CardButton></CardButton>
)
    } else {
return(
<Loginform/>
);
    }
  }
  render() {
    return <View>
        <Header />
        {this.renderContent()}
      </View>;
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
