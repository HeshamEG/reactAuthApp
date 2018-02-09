/**
 * Created by hesham on 1/26/2018.
 **/
// import {React} from 'react';
import React, { Component } from 'react';
// import {TextInput } from 'react-native';
import { Input,CardSection, Card, CardButton} from './common';



class Loginform extends Component {
  state={emailTextmetext:'',password:''}
  doLogIn(){
      alert('clicked')
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
            <CardSection>
                <CardButton onPress={this.doLogIn.bind(this)} Children='login'/>           
                 </CardSection>


        </Card>
    )
}
};
// const styles = {
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
//     textStyle: {
//         fontSize: 20
//     }
// };


export default Loginform;