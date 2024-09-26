// import React from "react";
// import {View, Text, Button, StyleSheet} from 'react-native';

// function ChildMinding({navigation}){
//     return (
//         <View>
//             <Text>Purpose: To provide basic child and baby care 
//                     Content:
//                         • birth to six-month old baby needs
//                         • seven-month to one year old needs
//                         • Toddler needs
//                         • Educational toys
//             </Text>
//             <Text>Fees: R750</Text>
            

//             <Button
//             title="Take Course"
//             onPress={() => navigation.navigate('SignUp')}
//             />
//         </View>
//     );
// }

// export default ChildMinding;
import React from "react";
import { View, Text, Button, StyleSheet , Image} from 'react-native';

function ChildMinding({ navigation }) {
    return (
        <View style={styles.container}>
        <Image style={styles.image} source = {require('MyAppX/img/Child.jpeg')}/>

             <View>
            <Text style={styles.heading}>Purpose: To provide basic child and baby care</Text>
            
            <Text style={styles.content}>• Birth to six-month-old baby needs</Text>
            <Text style={styles.content}>• Seven-month to one-year-old needs</Text>
            <Text style={styles.content}>• Toddler needs</Text>
            <Text style={styles.content}>• Educational toys</Text>
            
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

export default ChildMinding;

const styles = StyleSheet.create({
    fees: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
    },
    container: {
        flex:1,
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
        left: 5,
    },
});
