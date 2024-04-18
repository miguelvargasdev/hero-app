import { Pressable, View, StyleSheet, Text, ImageBackground, Image } from "react-native";
import Animated, { useAnimatedStyle, useAnimatedProps, useSharedValue, withSpring, withTiming, withSequence } from 'react-native-reanimated';
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
    const incOpacity = useSharedValue(0);
    const decOpacity = useSharedValue(0);

    const [value, setValue] = useState(startingValue);
    const color = selectedColor;
    const icon = selectedIcon;
    const background = backgroundImage;

    const incAnimatedStyles = useAnimatedStyle(() => ({
        opacity: incOpacity.value,
        position: 'absolute',
        width: '100%',
        height: '100%',
    }));
    const decAnimatedStyles = useAnimatedStyle(() => ({
        opacity: decOpacity.value,
        position: 'absolute',
        width: '100%',
        height: '100%',
    }));
    function increment() {
        setValue(value + 1);
    }
    function decrement() {
        setValue(value - 1);
    }

    function handleIncrement() {
        increment();
        incOpacity.value = withSequence(withTiming(1, { duration: 0 }), withTiming(0, { duration: 750 }));
    }
    function handleDecrement() {
        decrement();
        decOpacity.value = withSequence(withTiming(1, { duration: 0 }), withTiming(0, { duration: 500 }));

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
                    <Animated.View style={incAnimatedStyles}>
                        <LinearGradient
                            colors={['rgba(0,255,0,1)','transparent']}
                            style={[styles.colorGradient]}
                        />
                    </Animated.View>
                    <Pressable style={styles.gearContainer} onPress={() => alert('GEAR!!')}>
                        <Image source={gearIcon} style={styles.gearIcon} />
                    </Pressable>
                </Pressable>
                <Pressable style={styles.incDecButton} onPress={handleDecrement}>
                    <Animated.View style={decAnimatedStyles}>
                        <LinearGradient
                            colors={['transparent','rgba(255,0,0,1)']}
                            style={[styles.colorGradient]}
                        />
                    </Animated.View>
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
        marginTop: 'auto',
        marginBottom: '10vh',

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
    },
    gearContainer: {
        position: 'relative',
        alignSelf: 'end',
        marginBottom: 'auto',
        width: '3vh',
        height: '3vh',
        padding: '0.5vh',

    },
    gearIcon: {
        width: '100%',
        height: '100%',
    }
})