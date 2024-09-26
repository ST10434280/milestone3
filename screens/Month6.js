import React from "react";
import {View, Text, Button, StyleSheet, Image, ScrollView} from 'react-native';

function Month6({navigation}){
    return (
        <View style = {styles.container}>
            <ScrollView>

            <Image style={styles.courseImg} source = {require('MyAppX/img/FirstAid.jpeg')}/>

            <Button
            color="#809f39"
            title="First Aid"
            onPress={() => navigation.navigate('FirstAid')}
            />
            <Image style={styles.courseImg} source = {require('MyAppX/img/Sew.jpg')}/>

            <Button
            color="#809f39"
            title="Sewing"
            onPress={() => navigation.navigate('Sewing')}
            />
             <Image style={styles.courseImg} source = {require('MyAppX/img/land.jpeg')}/>

            <Button
            color="#809f39"
            title="Landscaping"
            onPress={() => navigation.navigate('Landscaping')}
            />
            <Image style={styles.courseImg} source = {require('MyAppX/img/Life.jpg')}/>

            <Button
            color="#809f39"
            title="Life Skills"
            onPress={() => navigation.navigate('Life Skills')}
            />
            </ScrollView>
        </View>

    );
}

export default Month6;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20, // Add padding to push content down from the top
        backgroundColor: '#d9dde0',
       paddingTop:5,
       paddingBottom:15,
       
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