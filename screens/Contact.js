import React from "react";
import {View, Text, Button, StyleSheet} from 'react-native';

function Contact({navigation}){
    return (
        <View style = {styles.container}>
            <Text style = {styles.heading}>Contact Us</Text>

            <Text style = {styles.content}>Phone Number: 064 653 6601</Text>
            <Text style = {styles.content}>Phone Number: 064 123 5610</Text>

            <Text style = {styles.content}>Address: </Text>
            <Text style = {styles.content}>Email: empowering.nation@gamil.com</Text>

            
        </View>
    );
}

export default Contact;
const styles = StyleSheet.create({
    container: {
        flex:1,
        padding: 20,
        backgroundColor: '#d9dde0',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    content:{
        fontSize: 18,
    }
})