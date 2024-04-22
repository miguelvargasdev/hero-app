import React, { useState } from "react";
import { Pressable, View, StyleSheet, Text, ImageBackground } from "react-native";

export default function HoverableHeroButton({ hero, handleAddTracker }) {
    var [image, setImage] = useState(hero.unselected);

    function swapImage(newState) {
        setImage(newState);
    }

    return (
        <ImageBackground source={image} style={styles.heroImage} >
            <Pressable style={styles.heroButton} onHoverIn={() => swapImage(hero.selected)} onHoverOut={() => swapImage(hero.unselected)} onPress={()=>handleAddTracker(hero)}/>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    heroImage: {
        width: '100%',
        height: '100%',
        border: '2px solid black',
        flexShrink: 1,
        resizeMode: 'contain',
    },
    heroButton: {
        width: '100%',
        height: '100%',
    },
}
);