import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image 
} from 'react-native';

export default class Logo extends Component {
	render(){
		return(
			<View style={styles.container}>
				<Image  style={{width:150, height: 90}}
          			source={require('../images/logo.png')}/>
          		<Text style={styles.logoText}>Welcome to Pintu Magang.</Text>	
  			</View>
			)
	}
}

const styles = StyleSheet.create({
    container : {
      flexGrow: 0.5,
      justifyContent:'flex-end',
      alignItems: 'center'
    },
    logoText : {
        marginVertical: 15,
        fontSize:18,
        color:'rgba(255, 255, 255, 0.7)'
    }
  });