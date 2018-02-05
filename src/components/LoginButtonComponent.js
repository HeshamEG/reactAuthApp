import React from "react";
import {Button,View} from "react-native";
const LoginButtonComponent=(props)=>{
    return(
        <View >
            <Button onPress={props.clickMe} title={props.data} style={styles.buttonStyle} />
        </View>
    )
}
const styles={
    buttonStyle:{
backgroundColor:"orange",
color:"orange"
,width:50
    }

}
export default LoginButtonComponent;
