import React , {FC} from "react";
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import { PostImage as PostImageTypes } from "../../types";

import PostImage from "../PostImage";

const LastFiveDaysImages: FC<{ postImages?: PostImageTypes[] }> = ({postImages}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Last 5 Days</Text>
            <ScrollView style={styles.content}>
                {postImages?.map(postImage => (
                    <PostImage key={`post-image-${postImage.title}`} {... postImage} />
                ))}
            </ScrollView>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 8,
    },
    title: {
        fontSize: 16, 
        color: '#FFFFFF', 
        marginBottom: 18,
    },
    content: {
        paddingHorizontal: 24,
    },
})
export default LastFiveDaysImages;