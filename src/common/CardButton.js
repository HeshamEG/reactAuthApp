/**
 * Created by hesham on 1/31/2018.
 */
import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
const CardButton = ({ onPress, Children})=>{
const {ButtonStyle,textStyle}=styles
    {/*<View>*/}
        {/*<Button title="" onPress=""/>*/}
    {/*</View>*/}
    return(
        <TouchableOpacity onPress={onPress} style={ButtonStyle}>
        <Text style={textStyle}>{Children}</Text>
        </TouchableOpacity>
            );
}
const styles={
    textStyle:{
        alignSelf:'center',
        color:'#007aff',
        fontSize:16,
        fontWeight:'600',
        paddingTop:10,
        paddingBottom:10,

    },
    ButtonStyle:{
        flex:1,
        alignSelf:'stretch',
        borderRadius:5,
        borderWidth:1,
        borderColor:'#007aff',
        marginLeft:5,
        marginRight:5,
        justifyContent:'flex-start',
        backgroundColor:'#fff'

    }
}
export  {CardButton};