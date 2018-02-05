import React from 'react';
import { TextInput, View } from 'react-native';
const TextInputComponent=(props)=>{
    return (
        <View>
            <TextInput style={styles.textInputStyle} placeholder={props.data} /> 
        </View>
    )
}
const styles={
    textInputStyle:{
        width:150,
        padding: 5,
      
        borderWidth:1,
        borderColor: "orange",
        borderRadius: 10,
        justifyContent: 'space-around',
        // backgroundColor:'#e8e8e8',
marginBottom: 10,

    }
}
export default TextInputComponent;