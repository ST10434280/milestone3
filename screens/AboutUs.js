import React from "react";
import {View, Text, Button, StyleSheet} from 'react-native';

function AboutUs({navigation}){
    return (
        <View style = {styles.container}>
            <Text style = {styles.Heading}>Our Mission</Text>
            <Text style = {styles.text}>
            Welcome to Empowering the Nation, an organization dedicated to uplifting and empowering domestic workers by providing essential skills training and professional development, where people are continuing the conversation by highlighting and responding to this story. We know the tremendous value of care; the centrality and economic importance of domestic work; we are united in our commitment to a future of greater dignity, empowerment, and opportunity for all who labor in this industry.
Our Mission
Our Mission at Empowering the Nation we strive to provide the skills, knowledge and confidence for domestic workers to succeed. By building a bridge between opportunity and skill, we offer specialized training programs, mentorship, and community support — making sure every domestic worker has the tools they need to begin or enhance their career in bettering their lives.
We guide domestic workers with our expertise in negotiation, time management and conflict management to be at their professional best and communication the kind of relationships employers appreciate.
Our programs ensure that the worker gets certified, which validates his skills and makes him more employable.
Community Support & Advocacy — we simply do more than just a train. We are a community that works together to ensure the rights, dignity and well-being of all domestic workers. And we partner with local governments and industry to deliver a fairer deal for workers.
Why We Care
Domestic workers are vital members of all households whether we consider it in the context of contributing to family well-being and stability. These people were and still are very important, however they have been left to fend for themselves with ridiculous control of education and almost slavery like behavior as their compensation. absence of official acknowledgment. Empower Domestic's mission is to rewrite that story by emphasizing equality, empowerment, and education.

Our Goal
In the society we envision, household work is appreciated, valued, and acknowledged as a legitimate avenue for professional advancement. Our goal is to establish a society where all domestic workers can obtain the tools and chances necessary for their personal and professional growth.
Come Along with Us
Are you a housekeeper trying to advance your career? An employer seeking to bring on qualified experts? Or perhaps a fervent supporter of the welfare and rights of domestic workers? Participate in Empower Domestic right now. We can build a future where all domestic workers have the means to prosper together.


            </Text>
            

            
        </View>
    );
}

export default AboutUs;

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        backgroundColor: '#d9dde0',
    },
    text:{
        fontSize: 18,
        color: 'black'
    },
    Heading:{
        fontSize: 30,
        color: 'green',
        textAlign: 'center'
    },
})