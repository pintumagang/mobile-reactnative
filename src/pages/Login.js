import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  KeyboardAwareScrollView,
  TouchableOpacity
} from 'react-native';

import Logo from '../components/Logo';
import FormLogin from '../components/FormLogin';

import {Actions} from 'react-native-router-flux';

export default class Login extends Component {

    signup() {
		Actions.signup()
    }

    render() {
        return (
            <View style={styles.container}>
           
              <Logo/>
              <FormLogin/>
              <TouchableOpacity onPress={this.signup}><Text style={styles.forgotButton}>Forgot Password?</Text></TouchableOpacity>
				<View style={styles.signupTextCont}>
					<Text style={styles.signupText}>Don't have an account yet?</Text>
					<TouchableOpacity onPress={this.signup}><Text style={styles.signupButton}> Signup</Text></TouchableOpacity>
				</View>
                
             </View>
          
        );
      }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#455a64',
      flex: 1
    },
    signupTextCont : {
        flexGrow: 1,
      alignItems:'flex-end',
      justifyContent :'center',
      paddingVertical:16,
      flexDirection:'row'
    },
    signupText: {
        color:'rgba(255,255,255,0.6)',
        fontSize:16
    },
    signupButton: {
        color:'#ffffff',
        fontSize:16,
        fontWeight:'500'
    },
    forgotButton: {
        color:'#ffffff',
        fontSize:16,
        fontWeight:'500',
        marginLeft:50,
        marginVertical:0
    },
    loginText: {
        fontSize:16,
        fontWeight:'500',
        color:'#ffffff',
        marginLeft:50
      }
  });
  