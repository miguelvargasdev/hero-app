import { Pressable, View, StyleSheet, Text, ImageBackground, Image } from "react-native";
import Animated, { useAnimatedStyle, useAnimatedProps, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

const backgroundImage = require('../../assets/images/arcanas.png');
const healthIcon = require('../../assets/images/icon/health.png');
const gearIcon = require('../../assets/images/icon/gear.png');

const name = "Arcanas Invos"
const startingValue = 32; // arcanas starting health
const selectedColor = 'rgba(42,77,255,1)'; // arcanas blue
const selectedIcon = healthIcon;
const background = backgroundImage;

export default function Tracker() {

    const [value, setValue] = useState(startingValue);
    const color = selectedColor;
    const icon = selectedIcon;
    const background = backgroundImage;
    

    function increment() {
        setValue(value + 1);
    }
    function decrement() {
        setValue(value - 1);
    }

    function handleIncrement() {
        increment();
    }
    function handleDecrement() {
        decrement();
    }

    return (
        <View style={styles.trackerContainer}>
            <ImageBackground source={background} style={styles.heroImage}>
                <LinearGradient
                    colors={['transparent', 'transparent', color]}
                    style={[styles.colorGradient]}
                />

                <Pressable style={styles.incDecButton} onPress={handleIncrement}>
                    {/* TODO: Implement options functionality */}
                    <Pressable style={styles.gearContainer} onPress={() => alert('GEAR!!')}>
                        <Image source={gearIcon} style={styles.gearIcon} />

                    </Pressable>
                </Pressable>
                <Pressable style={styles.incDecButton} onPress={handleDecrement}>
                    <View style={styles.iconContainer}>
                        <Image source={icon} style={styles.icon} />
                        <Text style={styles.iconValue}>{value.toString()}</Text>
                    </View>
                </Pressable>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    colorGradient: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    trackerContainer: {
        flex: 1,
        width: '10%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    heroImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        justifyContent: 'center',
        color: 'white',
        flexDirection: 'column',
    },
    iconContainer: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        width: '15vh',
        height: '15vh',
    },
    icon: {
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
        opacity: 0.5
    },
    iconValue: {
        color: 'white',
        fontSize: '10vh',
        fontFamily: 'Cinzel-Black',
        alignSelf: 'center',
        justifyContent: 'center',
        position: 'absolute',
        zIndex: 1,
    },
    incDecButton: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
        flexBasis: 0,
        borderColor: 'white',
        borderWidth: 1,
    },
    gearContainer: {
        position: 'relative',
        alignSelf: 'end',
        marginBottom: 'auto',
        width: '3vh',
        height: '3vh',
    },
    gearIcon: {
        width: '100%',
        height: '100%',
    }
})