/**
 * Created by hesham on 1/26/2018.
 **/
// import {React} from 'react';
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {
  CardButton
} from './common/CardSection';
import {
  CardSection
} from './common/CardButton';


class Loginform extends Component {
  render(){
    return (
        <Card>
            <CardSection/>
            <CardSection />
            <CardSection>
                <CardButton>login!</CardButton>           
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