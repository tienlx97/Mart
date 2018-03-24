import React,{Component} from "react";
import PropTypes from "prop-types"
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from "react-native"
import Entypo from 'react-native-vector-icons/Entypo';

const { height, width } = Dimensions.get('window')

export default class LoginButton extends Component{
    render(){
        return(
            <View
                animation="fadeInLeft" delay={1200} duration={700}  
                style = { styles.loginStyle }           
            >
                <TouchableOpacity style = { styles.touchloginStyle } >
                    <Text  style = {{ color:"#fff", fontSize:16, fontWeight:"bold" }}>Login</Text>
                </TouchableOpacity>                  
            </View>
        );
    }
}

const styles = StyleSheet.create({
    loginStyle:{
        alignItems:"center",
        justifyContent:"center",    
    },
    touchloginStyle:{
        borderColor:"#fff",
        borderWidth:2,
        alignItems:"center",
        justifyContent:"center",
        width:(width*13)/20,
        height: height / 14,
        borderRadius:20,
        marginTop:height/25
    }
});