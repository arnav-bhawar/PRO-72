import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import db from '../config'
import firebase from 'firebase' 

export default class App extends React.Component() {
    render(){
        return(
            <View style = {styles.container}>
                <Text>Read Story</Text>

                <TouchableOpacity 
                style = {styles.submitButton}
                onPress = {this.submitStory}
                >

                     <Text style = {styles.buttonText}>Submit</Text>
                </TouchableOpacity>
                <KeyboardAvoidingView style = {styles.container} behavior = "padding"enabled>
                 </KeyboardAvoidingView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });