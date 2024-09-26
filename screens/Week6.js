import React from "react";
import {View, Text, Button, StyleSheet, Image} from 'react-native';

function Week6({navigation}){
    return (
        <View>
            <Image style={styles.courseImg} source = {require('MyAppX/img/Child.jpeg')}/>
            
            <Button
             color="#809f39"
            title="Child Minding"
            onPress={() => navigation.navigate('Child Minding')}
            />

<           Image style={styles.courseImg} source = {require('MyAppX/img/Cook.jpg')}/>

            
            <Button
             color="#809f39"
            title="Cooking"
            onPress={() => navigation.navigate('Cooking')}
            />

            <Image style={styles.courseImg} source = {require('MyAppX/img/Garden.jpg')}/>

            
            <Button
             color="#809f39"
            title="Garden Maintenance"
            onPress={() => navigation.navigate('Garden Maintenance')}
            />
        </View>
    );
}

export default Week6 ;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20, // Add padding to push content down from the top
        backgroundColor: '#d9dde0',
      
       
       
    },

    courseImg: {
        height: 200,
        width: 560,
        marginTop: 20,
        left: 23,
        marginBottom: 20,
    },

    courseType: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 15,
        marginTop:15,
        textAlign: 'center'
        
    },

})
