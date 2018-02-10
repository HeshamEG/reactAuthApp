/**
 * Created by hesham on 1/26/2018.
 **/
// import {React} from 'react';
import React, { Component } from 'react';
import {Text} from 'react-native';
import { Input,CardSection, Card, CardButton, Spinner} from './common';

import firebase from 'firebase';

class Loginform extends Component {
  state={loading:false,emailTextmetext:'',password:'',error:''}
  doLogIn(){
      const { emailTextmetext, loading, password, error } = this.state;
      this.setState({ loading: true });

      firebase.auth().signInWithEmailAndPassword
      (emailTextmetext,password)
      .then(res=>{
          this.setState({
              error: '',
              loading:true
          });

           //alert(res)
      }).catch(e =>{
this.setState({ error: e.message, loading: false });
      })
    //   alert()this.state.emailTextmetext)
  }
  renderButton(){
      if(this.state.loading){
       return   <Spinner></Spinner>
      }
      return <CardSection>
          <CardButton onPress={this.doLogIn.bind(this)} Children="login" />
        </CardSection>;
  }
  render(){
    return (
        <Card>
            <CardSection>
            <Input 
          value={this.state.userNametext}
                    placeholder=' ex:user@gmail.com'
          label="email"
                    onChangeText={
                        text => this.setState({ emailTextmetext:text})}
/>
            </CardSection >
            <CardSection>
                <Input
                placeholder="password"
                value={this.state.password}
                    label="password"
                    secureTextEntry
                onChangeText={password=>
                    this.setState({password})}
                />
            </CardSection>
           <Text style={styles.errorStyle}>{this.state.error}
           </Text>
          
{this.renderButton()}

        </Card>
    )
}
};
const styles = {
//     viewStyle: {
//         width: 50,
//         backgroundColor: '#052d16',
//         //move elements up and down
//         // justifyContent:'flex-end'
//         justifyContent: 'center',
//         // justifyContent:'flex-start'
//         alignItems: 'center',
//         height: 60,
//         paddingTop: 15
//     },
    errorStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: '#FF2320'
    }
};


export default Loginform;