import React,{Component} from "react";
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from "react-native"

import LoginButton from "../custom/LoginButton"
import FacebookButton from "../custom/FacebookButton"
import GoogleButton from "../custom/GoogleButton"

import Email from "../custom/login/Email"
import Password from "../custom/login/Password"

const { height, width } = Dimensions.get('window')

const mainColor = "#fff"

export default class LogInScreen extends Component{

    constructor(){
        super();
        this.state = {
            inputs: []
        }
    }

    changeInputFocus = index =>() => {
        if (index === 0) {
            this.state.inputs[index+1].state.inputRef.focus(); // focus another
        }
    };

    updateCanLoginState = () => {
        let canLogin = true;
        this.state.inputs.forEach((child) => {
            if (child.state.isCorrect !=== 1){ // mean false
                canLogin = false;
            }
        });

        this
    }

    render(){
        return(
            <View
                animation="fadeInLeft" delay={1200} duration={700}  
                style = { styles.container }           
            >

                <View style = {{ width: width*0.8 }}>
                        <Email 
                            changeFocus = {this.changeInputFocus(0)}
                            update = {this.up}
                            ref = { (ref)=> { this.state.inputs[0] = ref; } }/>
                        <Password 
                            changeFocus = {this.changeInputFocus(1)}
                            ref = { (ref)=> { this.state.inputs[1] = ref; } }/>
                </View>   
                <TouchableOpacity style = {styles.forgotPassStyle}>
                    <Text  
                        style = {{ color:mainColor, fontSize:16 }}
                        >Forgot your password ?</Text>
                </TouchableOpacity>
                <LoginButton 
                    ref = { (ref) => { this.loginButton = ref ; } }/>       
                <View style = {styles.otherLoginStyle}>
                    <FacebookButton />        
                    <GoogleButton />                            
                </View>
            
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        zIndex:1,
        flex:1,
        backgroundColor:"transparent"
    },
    form:{
        marginRight: width / 40,
        alignSelf: 'center',
    },
    forgotPassStyle:{
        alignItems:"center", 
        marginTop:height/27
    },
    otherLoginStyle:{
        flexDirection:"row",
        justifyContent:"space-around" , 
        alignItems:"center"
    }
    
});