// // // import React, {useState} from "react";
// // // import {View, Text, Button, StyleSheet, TextInput} from 'react-native';

// // // function SignUp({navigation}){
// // //     return (
// // //         <View>
// // //             <Text>Sign Up</Text>
// // //             <Text>Full Name</Text>
// // //             <TextInput placeholder="First Name"/>
// // //             <TextInput placeholder="Surname"/>

// // //             <Text>E-mail</Text>
// // //             <TextInput placeholder="E-mail"/>

            
            

            
// // //         </View>
// // //     );
// // // }

// // // export default SignUp;

import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

function SignUp({ navigation }) {
    // State for checkboxes
    const [isFirstAidChecked, setIsFirstAidChecked] = useState(false);
    const [isCookingChecked, setIsCookingChecked] = useState(false);
    const [isChildMindingChecked, setIsChildMindingChecked] = useState(false);
    const [isGardenMaintenanceChecked, setIsGardenMaintenanceChecked] = useState(false);
    const [isLandscapingChecked, setIsLandscapingChecked] = useState(false);
    const [isLifeSkillsChecked, setIsLifeSkillsChecked] = useState(false);
    const [isSewingChecked, setIsSewingChecked] = useState(false);

    // Course costs
    const coursePrices = {
        FirstAid: 1500,
        Cooking: 750,
        ChildMinding: 750,
        GardenMaintenance: 750,
        Landscaping: 1500,
        LifeSkills: 1500,
        Sewing: 1500,
    };

    // Calculate total cost with discounts
    const calculateTotalCost = () => {
        let totalCost = 0;
        let selectedCourses = 0;

        // Add costs of selected courses
        if (isFirstAidChecked) {
            totalCost += coursePrices.FirstAid;
            selectedCourses++;
        }
        if (isCookingChecked) {
            totalCost += coursePrices.Cooking;
            selectedCourses++;
        }
        if (isChildMindingChecked) {
            totalCost += coursePrices.ChildMinding;
            selectedCourses++;
        }
        if (isGardenMaintenanceChecked) {
            totalCost += coursePrices.GardenMaintenance;
            selectedCourses++;
        }
        if (isLandscapingChecked) {
            totalCost += coursePrices.Landscaping;
            selectedCourses++;
        }
        if (isLifeSkillsChecked) {
            totalCost += coursePrices.LifeSkills;
            selectedCourses++;
        }
        if (isSewingChecked) {
            totalCost += coursePrices.Sewing;
            selectedCourses++;
        }

        // Apply discounts based on the number of selected courses
        if (selectedCourses === 2) {
            totalCost *= 0.95; // 5% discount
        } else if (selectedCourses === 3) {
            totalCost *= 0.90; // 10% discount
        } else if (selectedCourses > 3) {
            totalCost *= 0.85; // 15% discount
        }

        return totalCost.toFixed(2); // Return the total cost rounded to 2 decimal places
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Sign Up</Text>

            <Text style={styles.label}>Full Name</Text>
            <TextInput style={styles.input} placeholder="First Name" />
            <TextInput style={styles.input} placeholder="Surname" />

            <Text style={styles.label}>E-mail</Text>
            <TextInput style={styles.input} placeholder="E-mail" keyboardType="email-address" />

            <Text style={styles.label}>Select Courses</Text>

            {/* Checkboxes for courses */}
            <View style={styles.checkboxContainer}>
                <CheckBox
                    value={isFirstAidChecked}
                    onValueChange={setIsFirstAidChecked}
                />
                <Text style={styles.label}>First Aid (R1500)</Text>
            </View>

            <View style={styles.checkboxContainer}>
                <CheckBox
                    value={isCookingChecked}
                    onValueChange={setIsCookingChecked}
                />
                <Text style={styles.label}>Cooking (R750)</Text>
            </View>

            <View style={styles.checkboxContainer}>
                <CheckBox
                    value={isChildMindingChecked}
                    onValueChange={setIsChildMindingChecked}
                />
                <Text style={styles.label}>Child Minding (R750)</Text>
            </View>

            <View style={styles.checkboxContainer}>
                <CheckBox
                    value={isGardenMaintenanceChecked}
                    onValueChange={setIsGardenMaintenanceChecked}
                />
                <Text style={styles.label}>Garden Maintenance (R750)</Text>
            </View>

            <View style={styles.checkboxContainer}>
                <CheckBox
                    value={isLandscapingChecked}
                    onValueChange={setIsLandscapingChecked}
                />
                <Text style={styles.label}>Landscaping (R1500)</Text>
            </View>

            <View style={styles.checkboxContainer}>
                <CheckBox
                    value={isLifeSkillsChecked}
                    onValueChange={setIsLifeSkillsChecked}
                />
                <Text style={styles.label}>Life Skills (R1500)</Text>
            </View>

            <View style={styles.checkboxContainer}>
                <CheckBox
                    value={isSewingChecked}
                    onValueChange={setIsSewingChecked}
                />
                <Text style={styles.label}>Sewing (R1500)</Text>
            </View>

            {/* Display the total cost with discount applied */}
            <Text style={styles.totalCostText}>Total Cost: R{calculateTotalCost()}</Text>

            <Button
                color="#809f39"
                title="Submit"
                onPress={() => alert('Courses selected successfully!')}
            />

            <Text style = {styles.heading}>How It Works:</Text>
            <Text style = {styles.content}>once the sign Up form has been filled in we will E-mail you with our banking details, 
                you can then EFT Empowering the Nation. if this is not possible we can discuss a different 
                method of payment. We can't wait to help you start your future!
            </Text>


            
        </View>
    );
}
export default SignUp;

const styles = StyleSheet.create({
         container: {
             padding: 20,
             backgroundColor: '#d9dde0',
         },
         heading: {
             fontSize: 24,
             fontWeight: 'bold',
             marginBottom: 20,
         },
         label: {
             fontSize: 16,
             marginTop: 10,
         },
         input: {
             height: 40,
             borderColor: 'gray',
             borderWidth: 1,
             marginBottom: 15,
             paddingHorizontal: 10,
         },
         checkboxContainer: {
             flexDirection: 'row',
            alignItems: 'center',
             marginBottom: 10,
        },
        content:{
            fontSize: 18,
            marginBottom: 5,
        }
    });
