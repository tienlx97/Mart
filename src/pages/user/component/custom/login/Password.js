import React,{Component} from "react";
import {
    View,
    StyleSheet,
    Dimensions,
    TextInput
} from "react-native"
import PropTypes from "prop-types"

import Entypo from  "react-native-vector-icons/Entypo"

const mainColor = "#fff";

const { height, width } = Dimensions.get('window')
export default class Password extends Component{

    constructor(){
        super();
        this.state = {
            inputRef:null,
            value:"",
            inCorrect:0
        }
    }

    checkIfIsCorrect = () => {
        if (this.state.value !== "") {
            this.state.isCorrect = 1;
        } else {
            this.state.isCorrect = 2;            
        }

        this.setState(this.state); // set all state
        this.props.update();

    }


    updateText() = (value) => {
        this.state.value = value;
    }


    render(){
        return(
            <View style = {styles.container} >
                <Entypo style = {styles.iconStyle} name = "lock" color = {mainColor} size={30}/>
                <TextInput 
                    ref = { (ref)=> { this.state.inputRef = ref; } }
                    style = {styles.inputStyle}
                    placeholder="Password"
                    secureTextEntry
                    selectionColor={mainColor}
                    placeholderTextColor = {mainColor}
                    underlineColorAndroid="transparent"

                    onSubmitEditing = {this.props.changeFocus}
                    onChangeText = {this.updateText}
                    onEndEditing = {this.checkIfIsCorrect}
                    />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container:{
        justifyContent:"center", 
        flexDirection: "row",  
        alignItems:"center", 
        borderBottomWidth:1, 
        height:47,
        borderColor:"#fff",
        marginTop:15
    },
    iconStyle:{
        width: width*0.12, 
        marginLeft:10
    },
    inputStyle:{
        fontSize:17,
         flex:1,
         color:"#fff"
    }
});


Password.propTypes = {
    update:PropTypes.func.isRequired,
    changeFocus: PropTypes.func.isRequired
}