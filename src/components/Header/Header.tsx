import React from "react";
import {View, Text, Image, StyleSheet} from 'react-native';
import Constants from 'expo-constants'

const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Text style={styles.title}>Explore</Text>
            </View>

            <View style={styles.rightContainer}>
                <Image source={require('../../assets/nasa-logo.png')} style={styles.image} />
            </View>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingTop: Constants.statusBarHeight,
    },
    leftContainer: {
        flex: 1,
        alignItems: 'flex-start'
    },
    rightContainer: {
        flex: 1,
        alignItems: 'flex-end'
    },
    title: {
        fontSize: 20, 
        color: '#FFFFFF'
    },
    image: {
        width: 60,
        height: 60
    }
})
export default Header;