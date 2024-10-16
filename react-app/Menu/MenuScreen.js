import React from "react";
import {View,Text,Stylesheet} from 'react-native';
const MenuScreen = (props) =>{
    console.log(props.navigation);
    return(
        <View>
            <Text style={styles.text}>Welcome to Menu Screen!!</Text>
        </View>
    );
};
const styles=Stylesheet.create({
  text:{
    textAlign:'center',
    fontSize:20,
    marginVertical:20
  }  
})
export default MenuScreen;