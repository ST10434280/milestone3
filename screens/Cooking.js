// import React from "react";
// import {View, Text, Button, StyleSheet} from 'react-native';

// function Cooking({navigation}){
//     return (
//         <View>
//             <Text>
//             Purpose: To prepare and cook nutritious family meals
//             Content:
//                 • Nutritional requirements for a healthy body
//                 • Types of protein, carbohydrates and vegetables
//                 • Planning meals
//                 • Preparation and cooking of meals
//             </Text>
            
//             <Text>Fees: R750</Text>

//             <Button
//             title="Take Course"
//             onPress={() => navigation.navigate('SignUp')}
//             />
//         </View>
//     );
// }

// export default Cooking;
import React from "react";
import { View, Text, Button, StyleSheet, Image } from 'react-native';

function Cooking({ navigation }) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source = {require('MyAppX/img/Cook.jpg')}/>
            <View>
            <Text style={styles.heading}>Purpose: To prepare and cook nutritious family meals</Text>
            
            <Text style={styles.content}>• Nutritional requirements for a healthy body</Text>
            <Text style={styles.content}>• Types of protein, carbohydrates, and vegetables</Text>
            <Text style={styles.content}>• Planning meals</Text>
            <Text style={styles.content}>• Preparation and cooking of meals</Text>
            
            <Text style={styles.fees}>Fees: R750</Text>

            <Button
                color="#809f39"
                title="Take Course"
                onPress={() => navigation.navigate('SignUp')}
            />
            </View>
        </View>
    );
}

export default Cooking;

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
    
    image:{
        height: 500,
        width: 550,
        alignItems: 'center',
        marginTop: 10,
        left: 5,
    },
    
    fees: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
    },
});
