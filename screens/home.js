
// import React from "react";
// import { View, Text, Button, StyleSheet, Image } from 'react-native';
// import { TouchableOpacity } from 'react-native';

// function Home({ navigation }) {
//     return (
//         <View style={styles.container}>
        
        
            
            
//             {/* Buttons aligned horizontally */}
//             <View style={styles.buttonContainer}>
            
//             <Image style={styles.ImageSize} 
//                 source={require('MyAppX/img/logo.jpg')}/>

//                 <Button 
//                     color="#809f39"
//                     title="Home"
//                     onPress={() => navigation.navigate('Home')}
//                 />

//                 <Button 
//                     color="#809f39"
//                     title="AboutUs"
//                     onPress={() => navigation.navigate('AboutUs')}
//                 />

//                 <Button
//                     color="#809f39"
//                     title="Courses"
//                     onPress={() => navigation.navigate('Courses')}
//                 />

//                 <Button 
//                     color="#809f39"
//                     title="Stories"
//                     onPress={() => navigation.navigate('Stories')}
//                 />

//                 <Button 
//                     color="#809f39"
//                     title="ContactUs"
//                     onPress={() => navigation.navigate('ContactUs')}

                    
//                 />

                
//             </View>
            

//                 <Text style={styles.titleText}>Your Future begins!</Text>
//         </View>
//     );
// }

// export default Home;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         paddingTop: 50, // Add padding to push content down from the top
//         alignItems: 'center',
//         backgroundColor: '#d9dde0',
//     },
//     headerText: {
//         fontSize: 24,
//         marginTop: 20,
//     },
//     buttonContainer: {
//         flexDirection: 'row', // Align buttons horizontally
//         justifyContent: 'space-between', // Even spacing between buttons
//         width: '100%', // Make button container span full width
//         paddingHorizontal: 10, // Add some padding on the sides
//         marginBottom: 20, // Add space between the buttons and the rest of the content
        
//     },
//         ImageSize: {
//             position: 'absolute', // Make the image position absolute
//             top: 15, // Adjust the distance from the top
//             left: 15, // Adjust the distance from the left
//             width: 100, // Adjust image size if needed
//             height: 100,
            
//         // marginTop: 50,
//         // width:150,
//         // height: 150,
        
//     },

//     button: {
//         backgroundColor: '#28a745', // Green button background
//         padding: 10,
//         marginHorizontal: 5,
//         borderRadius: 5,
        
//     },

    
    
//     titleText: {
//             fontSize: 30,              // Makes the text bigger
//             fontWeight: 'bold',        // Makes the text bold
//             color: '#1e90ff',          // Changes the color to DodgerBlue
//             fontFamily: 'Arial',       // Change to any available font
//             marginBottom: 20,
//     },
// });
import React from "react";
import { View, Text, Button, StyleSheet, Image } from 'react-native';

function Home({ navigation }) {
    return (
        <View style={styles.container}>
            {/* Image in the top left corner */}
            <Image 
                style={styles.ImageSize} 
                source={require('MyAppX/img/logo.jpg')}
            />

            {/* Text next to the image */}
            <Text style={styles.empoweringText}>Empowering the Nation</Text>

            {/* Buttons aligned horizontally */}
            <View style={styles.buttonContainer}>
                <Button 
                    color="#809f39"
                    title="Home"
                    onPress={() => navigation.navigate('Home')}
                />

                <Button 
                    color="#809f39"
                    title="About Us"
                    onPress={() => navigation.navigate('AboutUs')}
                />

                <Button
                    color="#809f39"
                    title="Courses"
                    onPress={() => navigation.navigate('Courses')}
                />

                <Button 
                    color="#809f39"
                    title="Stories"
                    onPress={() => navigation.navigate('Stories')}
                />

                <Button 
                    color="#809f39"
                    title="Contact Us"
                    onPress={() => navigation.navigate('ContactUs')}
                />
            </View>
            <Image style={styles.fist} source={require('MyAppX/img/Fist.png')}/>
            <Text  style={styles.titleText}>Your Future Begins!</Text>
        </View>
    );
}

export default Home;



const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20, // Add padding to push content down from the top
        backgroundColor: '#d9dde0',
    },
    ImageSize: {
        position: 'absolute', // Make the image position absolute
        top: 10, // Adjust the distance from the top
        left: 10, // Adjust the distance from the left
        width: 150,
        height: 150,
        
    },
    empoweringText: {
        position: 'absolute', // Position text next to the image
        top: 50, // Vertically aligned to center with the image
        left: 200, // Right of the image
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        fontSize: 35,
    },
    buttonContainer: {
        flexDirection: 'row', // Align buttons horizontally
        justifyContent: 'space-around', // Even spacing between buttons
        marginTop: 175, // Push buttons below the image and text
        paddingHorizontal: 10,
    },
    titleText: {
        marginTop: 50, // Space below the buttons
        textAlign: 'center', // Center-align the text
        fontSize: 30, 
        fontWeight: 'bold',
        color: 'black',
        fontFamily: 'Arial',
    },

    fist: {
        height: 400,
        width: 400,
        marginTop: 50,
        left: 100,
        
    }
});

