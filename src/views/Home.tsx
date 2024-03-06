import React, { useEffect, useState } from "react";
import {View, StyleSheet} from 'react-native';
import Header from "../components/Header";
import fetchApi from '../api/fetch';

const Home = () => {
    const [todaysImage, setTodaysImage] = useState();
    useEffect(() => {
        const loadTodaysImage = async () => {
            try{
                const todaysImageResponse = await fetchApi();
                setTodaysImage(todaysImageResponse);
            } catch (error) {
                console.error(error);
                setTodaysImage(undefined);
            }
        };

        loadTodaysImage().catch(null);
    }, []);

    console.log(todaysImage);

    return (
        <View style={styles.container}>
            <Header />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16
    }
})

export default Home;
