import React from "react";
import {View, Text, Button, StyleSheet, ScrollView} from 'react-native';

function Stories({navigation}){
    return (
        <View style = {styles.container}>
            <ScrollView>
            <Text style = {styles.heading}>Success Stories</Text>

            <Text style = {styles.txtHead}>Cooking</Text>

            <Text style = {styles.txtStorie}>Hi, my name is Thembi, and I am currently 23 years of age. At the age of 20 I had no idea what to do with my life because I had not been accepted into any public university.
                 I however knew my passion and that was cooking.
                 A friend of mine recommended me to go check out a website called, “Empowering the nation”.it had a bunch of courses, and it was easy for me to choose. 
                 I got in and excitedly began my journey towards getting a Higher Chefs Diploma in Culinary and Pastry. I’m not done with my training yet, but the experience has been amazing.
                 Truth be told, when I started, I felt of a lot of pressure because of my parents, but from the second day or so, I felt relaxed because of my culinary arts teacher!
                 All my cooking skills were almost non-existent, and I was terrified to show what I am capable of. But as I humbled myself, I learned and I grew; both as a student, and a person.
                 While we learnt valuable culinary skills, being a chef is more than just the cooking.
                 Next year will be my final year and I will Graduate. 

            </Text>

            <Text style = {styles.txtHead}>First Aid</Text>

            <Text style = {styles.txtStorie}>
            Hello, my name is Richard Arnold. I am currently 27 years old. From the age of 6 I always loved helping people whenever they are hurt or when they are struggling with anything in general.
             After matriculating. I really struggled getting into nursing and medicine. One day I saw an advertisement on the internet about a school that provides a wide range of courses. I was intrigued by how amazing the website looks and how reasonable the prices are.
              Immediately I got into the first aid course, and I never looked back. I started the course when I was 24 and during that time, I have saved a lot of peoples lives. I have saved people from drowning, I have performed CPR, I have saved someone from a heart attack and a seizure.
               At the age of 27, I my own first aid business. 
            </Text>

            <Text style = {styles.txtHead}>Sewing </Text>
            
            <Text style = {styles.txtStorie}>
                Hi, my name is Pearl, and I started sewing training program in 2016 and did not know how to sew at all, but all thanks to Empowering the nation, I now know how to.
                I quickly picked up the basics and this empowered me to realise that I can do a practical skill and be creative. As a result, when I was in my second year of the training program, I decided to start making blankets and sweaters and selling them at a local marketplace in my community, I gave some for free to disadvantaged people. 
                I started selling and quickly was making a small income from her products. 
                Unfortunately, due to family difficulties, I had to delay my training for a while in 2017, but in the meantime, I got a part time job. Luckily, I was able to pay the rest of my tuition fees and graduated.
                 Now I have a have a business which makes blankets, sweaters and alters clothing items 
            </Text>

            <Text style = {styles.txtHead}>Garden Maintenance </Text>

            <Text style = {styles.txtStorie}>
            Hello, my name is Thabo. Unfortunately, I do not have my matric certificate because I have failed. Immediately after high school I started mowing the lawn and watering the garden on a regular basis.
             As time passed, I fell in love with nature and taking care of the garden at home. But then I wanted to improve on my gardening skills to make our home look much better and hoping that I can make a living out of this.
             I asked around our local neighbourhood and someone recommended me, “empowering the nation” which is essentially a website which has a wide range of courses. Little did I know that this would change my life and make it better. 
            The pricing of the course I chose, garden maintenance was relatively cheap and the teaching there is incredible. 
            </Text>

           <Text style = {styles.txtHead}>Child Minding </Text>
           <Text style = {styles.txtStorie}>
            Hi there. My name is Jezebel. I am from Pietermaritzburg in KZN. As I teenager I always loved to take care of children. 
            I just have this special connection with the little ones. My parents would always leave me to take care of my sibling. 
            I realized that our community has a lot of people with children, and the parents are always at work, or they are just occupied with something.
            That it when I found Empowering the nation. I took the 6-week course, and it was very much helpful. I learnt a lot of things which I did not know about child minding. 
            So now I am a graduate and people from my community trust me enough to take of their children. I do not only take care of children in my community but also around the whole city.
            I have a business card which has my email, phone number and times and days in which I am available
           </Text>
           </ScrollView>
        </View>
    );
}

export default Stories;

const styles= StyleSheet.create({

    container: {
        padding: 20,
        backgroundColor: '#d9dde0',
    },

    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 20,
        textAlign: 'center',
    },

    txtHead:{
        fontSize:20,
        color: 'green',
        marginTop : 15,
        marginBottom: 15,
    },

    txtStorie: {
        fontSize: 18,
        color: 'black'
    }
})