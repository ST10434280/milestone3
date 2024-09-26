// import React from "react";
// import {View, Text, Button, StyleSheet} from 'react-native';

// function FirstAid({navigation}){
//     return (
//         <View>
//             <Text>First Aid</Text>
            
//             <Text>
//             Purpose: To provide first aid awareness and basic life support
//             Content:
//                 • Wounds and bleeding
//                 • Burns and fractures
//                 • Emergency scene management
//                 • Cardio-Pulmonary Resuscitation (CPR)
//                 • Respiratory distress e.g., Choking, blocked airway
//             </Text>
//             <Text>Fees: R1500</Text>
//             <Button
//             title="Take Course"
//             onPress={() => navigation.navigate('SignUp')}
//             />
//         </View>
//     );
// }

// export default FirstAid;
import React from "react";
import { View, Text, Button, StyleSheet, Image} from 'react-native';

function LifeSkills({ navigation }) {
    return (
        <View style={styles.container}>
            
            <Image source = {require('MyAppX/img/FirstAid.jpeg')}/>
          <View>
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
        </View>
    );
}

export default LifeSkills;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
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
        
    }
});
