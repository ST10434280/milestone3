// import React from "react";
// import {View, Text, Button, StyleSheet} from 'react-native';

// function LifeSkills({navigation}){
//     return (
//         <View>
//             <Text>
//             Purpose: To provide skills to navigate basic life necessities
//             Content:
//                 • Opening a bank account
//                 • Basic labour law (know your rights)
//                 • Basic reading and writing literacy 
//                 • Basic numeric literac
//             </Text>
            

//             <Button
//             title="Take Course"
//             onPress={() => navigation.navigate('SignUp')}
//             />
//         </View>
//     );
// }

// export default LifeSkills;
import React from "react";
import { View, Text, Button, StyleSheet, Image } from 'react-native';

function LifeSkills({ navigation }) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source = {require('MyAppX/img/Life.jpg')}/>
            <Text style={styles.heading}>Purpose: To provide skills to navigate basic life necessities</Text>
            
            <Text style={styles.content}>• Opening a bank account</Text>
            <Text style={styles.content}>• Basic labour law (know your rights)</Text>
            <Text style={styles.content}>• Basic reading and writing literacy</Text>
            <Text style={styles.content}>• Basic numeric literacy</Text>
            
            <Button
                color="#809f39"
                title="Take Course"
                onPress={() => navigation.navigate('SignUp')}
            />
        </View>
    );
}

export default LifeSkills;

const styles = StyleSheet.create({
    container: {
        padding: 20,
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
        width: 550,
        alignItems: 'center',
        marginTop: 10,
    },
    
    fees: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
    },
});
