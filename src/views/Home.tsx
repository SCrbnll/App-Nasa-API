import React, { useEffect, useState } from "react";
import {View, StyleSheet} from 'react-native';
import { format, sub } from 'date-fns';

import Header from "../components/Header";
import TodaysImage from "../components/TodaysImage";
import fetchApi from '../api/fetch';
import { PostImage } from "../types";
import LastFiveDaysImages from "../components/LastFiveDaysImages";


const Home = () => {
    const [todaysImage, setTodaysImage] = useState<PostImage>();
    const [lastFiveDaysImages, setLastFiveDaysImages] = useState<PostImage[]>();
    useEffect(() => {
        const loadTodaysImage = async () => {
            try{
                const todaysImageResponse = await fetchApi();
                setTodaysImage(todaysImageResponse);
            } catch (error) {
                console.error(error);
                setTodaysImage({});
            }
        };

        const loadLast5DaysImages = async () => {
            try{
                const date = new Date();
                const todaysDate = format(date, 'yyyy-MM-dd');
                const fiveDaysAgoDate = format(sub(date, { days: 5}), 'yyyy-MM-dd');
                const yesterdayDate = format(sub(todaysDate, {days: 1}), 'yyyy-MM-dd')

                const lastFiveDaysImagesResponse = await fetchApi(
                    `&start_date=${fiveDaysAgoDate}&end_date=${yesterdayDate}`
                    );
                    
                setLastFiveDaysImages(lastFiveDaysImagesResponse);
            } catch (error) {
                console.error(error);
            }
        };

        loadTodaysImage().catch(null);
        loadLast5DaysImages().catch(null);
    }, []);

    console.log(todaysImage);
    console.log(lastFiveDaysImages);

    return (
        <View style={styles.container}>
            <Header />
            <TodaysImage {... todaysImage}/>
            <LastFiveDaysImages postImages={lastFiveDaysImages} />
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
