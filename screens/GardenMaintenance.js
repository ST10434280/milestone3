// import React from "react";
// import {View, Text, Button, StyleSheet} from 'react-native';

// function GardenMaintenance({navigation}){
//     return (
//         <View>
//             <Text>
//             Purpose: To provide basic knowledge of watering, pruning and planting in a domestic garden.
//             Content:
//                 • Water restrictions and the watering requirements of indigenous and exotic plants
//                 • Pruning and propagation of plants
//                 • Planting techniques for different plant type
//             </Text>
            
//             <Text>Fees: R750</Text>

//             <Button
//             title="Take Course"
//             onPress={() => navigation.navigate('SignUp')}
//             />
//         </View>
//     );
// }

// export default GardenMaintenance;
import React from "react";
import { View, Text, Button, StyleSheet, Image } from 'react-native';

function GardenMaintenance({ navigation }) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source = {require('MyAppX/img/Garden.jpg')}/>
            <Text style={styles.heading}>Purpose: To provide basic knowledge of watering, pruning, and planting in a domestic garden.</Text>
            
            <Text style={styles.content}>• Water restrictions and the watering requirements of indigenous and exotic plants</Text>
            <Text style={styles.content}>• Pruning and propagation of plants</Text>
            <Text style={styles.content}>• Planting techniques for different plant types</Text>
            
            <Text style={styles.fees}>Fees: R750</Text>

            <Button
                color="#809f39"
                title="Take Course"
                onPress={() => navigation.navigate('SignUp')}
            />
        </View>
    );
}

export default GardenMaintenance;

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding: 20,
        backgroundColor: '#d9dde0',
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    content: {
        fontSize: 16,  // Font size for the bullet points
        marginBottom: 5,
    },
    fees: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,

    },
    image:{
        height: 500,
        width: 550,
        alignItems: 'center',
        marginTop: 10,
        left: 5,
    },
    
   
});
