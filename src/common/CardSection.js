/**
 * Created by hesham on 1/29/2018.
 */
import React from 'react';
import {View} from 'react-native';
const CardSection=(props)=>{
    return(
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );

};
const styles = {
    containerStyle: {
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
};
export  {CardSection};