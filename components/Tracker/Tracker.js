import { Pressable, View, StyleSheet, Text, ImageBackground, Image, Easing } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming, withSequence } from 'react-native-reanimated';
import React, { useState, useContext } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { GlobalContext } from '../../context/GlobalContext';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

const gearIcon = require('../../assets/images/icon/gear.png');

export default function Tracker({ hero, id, custom, customHeroModal }) {
    const [currentHero, setCurrentHero] = useState(hero);
    const incOpacity = useSharedValue(0);
    const decOpacity = useSharedValue(0);

    const [value, setValue] = useState(currentHero.health);

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

    ////////////// GESTURES START \\\\\\\\\\\\\\\\
    const offset = useSharedValue(0);
    const pressed = useSharedValue(false);

    const pan = Gesture.Pan()
        .onBegin(() => {
            pressed.value = true;
        })
        .onChange((event) => {
            offset.value = event.translationX;
        })
        .onFinalize(() => {
            offset.value = withSpring(0);
            pressed.value = false;
        });

    const trackerAnimatedStyles = useAnimatedStyle(() => ({
        transform: [
            { scale: withTiming(pressed.value ? 1 : 1) }
        ],
        zIndex: pressed.value ? 1 : 0,
    }));
    ////////////// GESTURES END \\\\\\\\\\\\\\\\


    function increment() {
        setValue(value + 1);
        incOpacity.value = withSequence(withTiming(1, { duration: 0 }), withTiming(0, { duration: 1000, easing: Easing.in(Easing.cubic) }));
    }
    function decrement() {
        setValue(value - 1);
        decOpacity.value = withSequence(withTiming(1, { duration: 0 }), withTiming(0, { duration: 1000, easing: Easing.in(Easing.cubic) }));
    }



    return (
        <GestureDetector gesture={pan}>
            <Animated.View style={[styles.trackerContainer, trackerAnimatedStyles]}>
                <ImageBackground source={currentHero.image} style={styles.heroImage}>
                    <LinearGradient
                        colors={custom ? [currentHero.color, currentHero.color] : ['transparent', 'transparent', currentHero.color]}
                        style={[styles.colorGradient]}
                    />
                    <Pressable style={styles.incDecButton} onPress={increment}>
                        <Animated.View style={incAnimatedStyles}>
                            <LinearGradient
                                colors={['rgba(0,255,0,1)', 'transparent']}
                                style={[styles.colorGradient]}
                            />
                        </Animated.View>
                        {custom ? <Text style={styles.trackerName}>{currentHero.name}</Text> : null}

                        <Pressable style={styles.gearContainer} onPress={() => {
                            customHeroModal();
                        }}>
                            <Image source={gearIcon} style={styles.gearIcon} />
                        </Pressable>
                    </Pressable>
                    <Pressable style={styles.incDecButton} onPress={decrement}>
                        <Animated.View style={decAnimatedStyles}>
                            <LinearGradient
                                colors={['transparent', 'rgba(255,0,0,1)']}
                                style={[styles.colorGradient]}
                            />
                        </Animated.View>
                        <View style={styles.iconContainer}>
                            <Image source={currentHero.icon} style={styles.icon} />
                            <Text style={styles.iconValue}>{value.toString()}</Text>
                        </View>
                    </Pressable>
                </ImageBackground>
            </Animated.View >
        </GestureDetector>

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
    trackerName: {
        flex: 1,
        width: '100%',
        color: 'white',
        fontSize: '3vmin',
        fontFamily: 'Cinzel-Black',
        alignSelf: 'center',
        justifyContent: 'center',
        position: 'absolute',
        userSelect: 'none',

        paddingHorizontal: '4vmin',
        textAlign: 'center',
    },
    iconContainer: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        width: '15vh',
        height: '15vh',
        marginTop: 'auto',
        marginBottom: '5vh',

    },
    icon: {
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
        opacity: 0.5
    },
    iconValue: {
        flex: 1,
        color: 'white',
        fontSize: '10vmin',
        fontFamily: 'Cinzel-Black',
        alignSelf: 'center',
        justifyContent: 'center',
        position: 'absolute',
        userSelect: 'none',
        zIndex: 1,
        flexShrink: 1,
    },
    incDecButton: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
        flexBasis: 0,
        overflow: 'hidden',
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
        opacity: 0.7,
    }
})