// import React from "react";
// import {View, Text, Button, StyleSheet} from 'react-native';

// function Landscaping({navigation}){
//     return (
//         <View>
//             <Text>Purpose: To provide landscaping services for new and established gardens
//             Content:
//                 • Indigenous and exotic plants and trees
//                 • Fixed structures (fountains, statues, benches, tables, built-in braai)
//                 • Balancing of plants and trees in a garden
//                 • Aesthetics of plant shapes and colours
//                 • Garden layout
//             </Text>

//             <Text>Fees: R1500</Text>
            

//             <Button
//             title="Take Course"
//             onPress={() => navigation.navigate('SignUp')}
//             />
//         </View>
//     );
// }

// export default Landscaping;
import React from "react";
import { View, Text, Button, StyleSheet, Image} from 'react-native';

function Landscaping({ navigation }) {
    return (
        <View>
        <Image style={styles.image} source = {require('MyAppX/img/land.jpeg')}/>

            <View>
            <Text style={styles.heading}>Purpose: To provide landscaping services for new and established gardens</Text>
            
            <Text style={styles.content}>• Indigenous and exotic plants and trees</Text>
            <Text style={styles.content}>• Fixed structures (fountains, statues, benches, tables, built-in braai)</Text>
            <Text style={styles.content}>• Balancing of plants and trees in a garden</Text>
            <Text style={styles.content}>• Aesthetics of plant shapes and colours</Text>
            <Text style={styles.content}>• Garden layout</Text>
            
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

export default Landscaping;


const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
        justifyContent: 'center', // Centers the content vertically
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
        alignItems: 'center',
        marginTop: 10,
    },
    
    fees: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
    },
});
