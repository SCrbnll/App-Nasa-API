import React, {FC} from "react";
import {View, Text, StyleSheet, Image, Button} from 'react-native';

import { PostImage } from "../../types";

const TodaysImage: FC<PostImage> = ({date, title, url}) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{uri: url}} style={styles.image} />
            </View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>{date}</Text>
            <View style={styles.buttonContainer}>
                <Button title="View" />
            </View>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2C449D',
        marginVertical: 16,
        marginHorizontal: 24,
        borderRadius: 32,
        padding: 16
    },
    imageContainer: {
    },
    image: {
        borderWidth: 2,
        borderColor: '#FFFFFF',
        width: '100%',
        height: 190,
    },
    title: {
        color: '#FFFFFF',
        fontSize: 20,
        marginVertical: 12,
        fontWeight: 'bold',
    },
    date: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    buttonContainer: {
        alignItems: 'flex-end'
    },
    button: {
        alignItems: 'center',
        color: '#FFFFFF'
    }
})
export default TodaysImage;