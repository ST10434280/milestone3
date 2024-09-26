// import React from "react";
// import {View, Text, Button, StyleSheet} from 'react-native';

// function courses({navigation}){
//     return (
//         <View>
//             <Text>Courses</Text>
//             <Text>6 Month Courses</Text>
//             <Button
//             title="See Courses"
//             onPress={() => navigation.navigate('6 Month Courses')}
//             />

//             <Text>6 Week Courses</Text>
//             <Button
//              title="See Courses"
//              onPress={() => navigation.navigate('6 Week Courses')}
//              />
//         </View>
//     );
// }

// export default courses;
import React from "react";
import { View, Text, Button, StyleSheet, Image } from 'react-native';


function Courses({ navigation }) {
    return (
        <View style={styles.container}>

           <Image style={styles.courseImg} source={require('MyAppX/img/M6.png')}/>

            <Text style={styles.courseType}>6 Month Courses</Text>
            <Button
                color="#809f39"
                title="See Courses"
                onPress={() => navigation.navigate('6 Month Courses')}
            />
            <Image style={styles.courseImg} source={require('MyAppX/img/W6.jpg')}/>
            
            <Text style={styles.courseType}>6 Week Courses</Text>
            <Button
                color="#809f39"
                title="See Courses"
                onPress={() => navigation.navigate('6 Week Courses')}
            />
        </View>
    );
}

export default Courses;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#d9dde0',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 20,
        textAlign: 'center',
    },
    courseType: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 15,
        marginTop:15,
        
    },
    courseImg: {
        height: 200,
        width: 560,
        marginTop: 20,
    }
});
