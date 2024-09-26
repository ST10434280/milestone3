// import React from "react";
// import {View, Text, Button, StyleSheet} from 'react-native';

// function Sewing({navigation}){
//     return (
//         <View>
//             <Text>
//             Purpose: To provide alterations and new garment tailoring services 
//             Content:
//                 • Types of stitches
//                 • Threading a sewing machine
//                 • Sewing buttons, zips, hems and seams
//                 • Alterations
//                 • Designing and sewing new garments
//             </Text>
//             <Text>Fees: R1500</Text>

//             <Button
//             title="Take Course"
//             onPress={() => navigation.navigate('SignUp')}
//             />
//         </View>
//     );
// }

// export default Sewing;

// const styles= StyleSheet.create({

// })

import React from "react";
import { View, Text, Button, StyleSheet, Image } from 'react-native';

function Sewing({ navigation }) {
    return (
        <View style={styles.container}>
            <Image style={styles.Image}  source = {require('MyAppX/img/Sew.jpg')}/>
            <View>
            <Text style={styles.heading}>Purpose: To provide alterations and new garment tailoring services</Text>
            <Text style={styles.content}>• Types of stitches</Text>
            <Text style={styles.content}>• Threading a sewing machine</Text>
            <Text style={styles.content}>• Sewing buttons, zips, hems, and seams</Text>
            <Text style={styles.content}>• Alterations</Text>
            <Text style={styles.content}>• Designing and sewing new garments</Text>
            <Text style={styles.fees}>Fees: R1500</Text>

            <Button
                color="#809f39"
                title="Take Course"
                onPress={() => navigation.navigate('SignUp')}
            />
            </View>
        </View>
    );
}

export default Sewing;


    
    const styles = StyleSheet.create({
        container: {
            padding: 10,
            flex: 1,
            // justifyContent: 'center', // Centers the content vertically
            alignItems: 'center',
            backgroundColor: '#d9dde0',
        },
        heading: {
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 10,
            marginTop: 10,
        },
        content: {
            fontSize: 16,
            marginBottom: 5,
        },
        image:{
            height: 500,
            width: 600,
            left: 100,
            alignItems: 'center',
        },
        
        fees: {
            fontSize: 14,
            fontWeight: 'bold',
            marginTop: 10,
        },
});
