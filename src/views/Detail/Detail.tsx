import React from "react";
import { View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import { useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../../types";
import Header from "../../components/Header";

const Detail= () => {
    const {
        params: { title, url, explanation, date}} = 
    useRoute<NativeStackScreenProps<RootStackParams, 'Detail'>['route']>();

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.content}>
                <Image source={{uri: url}} style={styles.image}/>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.date}>{date}</Text>
                <ScrollView style={styles.explanationContainer}>
                    <Text style={styles.explanation}>{explanation}</Text>
                </ScrollView>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#071a5d',
        flex: 1,
        paddingHorizontal: 16
    },
    content: {
        backgroundColor: '#2C449D',
        borderRadius: 32,
        marginVertical: 24,
        padding: 16,
        flex: 1
    },
    imageContainer: {
    },
    image: {
        width: '100%',
        height: '50%',
        borderColor: '#FFFFFF',
        borderRadius: 32,
        borderWidth: 2,
        marginBottom: 16
    },
    title: {
        color: '#FFFFFF',
        fontSize: 22,
        marginBottom: 16,
        fontWeight: 'bold',
    },
    date: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    buttonContainer: {
        alignItems: 'flex-end'
    },
    explanationContainer:{
        marginVertical: 16,

    },
    explanation: {
        color: '#FFFFFF'
    }
    
})

export default Detail;