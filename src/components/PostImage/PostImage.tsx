import React, {FC} from "react";
import {View, Text, StyleSheet, Button} from 'react-native';
import { PostImage as PostImageTypes, RootStackParams } from "../../types";
import { useNavigation } from "@react-navigation/native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type PostImageNavigationProps = NativeStackNavigationProp<RootStackParams, 'Detail'>;


const PostImage: FC<PostImageTypes> = ({ title, date, url, explanation}) => {
    const {navigate} = useNavigation<PostImageNavigationProps>();
    const handleViewPess = () => {
        navigate('Detail', {title, date, url, explanation});
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>{date}</Text>
            <View style={styles.buttonContainer}>
                <Button title="View" onPress={handleViewPess}/>
            </View>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#122771',
        borderRadius: 20, 
        marginBottom: 12,
        padding: 16,
    },
    title: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    date: {
        color: '#FFFFFF',
    },
    buttonContainer: {
        alignItems: 'flex-end'
    },
    button: {
        alignItems: 'center',
        color: '#FFFFFF'
    }
})
export default PostImage;

