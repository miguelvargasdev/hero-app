import React, { useState, useContext } from 'react';
import { Text, View, StyleSheet, Pressable, ImageBackground } from 'react-native';
import icons from '../../constants/icons.js';

export default function IconGroup({ icon, handleIcon, createCustomTracker, setModalVisible }) {

    return (
        <View style={styles.container}>
            <View style={styles.grid}>
                <Pressable style={[styles.icon, icon === icons.attack ? styles.active : null]} onPress={() => {
                    handleIcon(icons.attack);
                }}>
                    <ImageBackground source={icons.attack} style={styles.iconImage} resizeMode='contain' />
                </Pressable>
                <Pressable style={[styles.icon, icon === icons.mana ? styles.active : null]} onPress={() => {
                    handleIcon(icons.mana);
                }
                }>
                    <ImageBackground source={icons.mana} style={styles.iconImage} resizeMode='contain' />
                </Pressable>
                <Pressable style={[styles.icon, icon === icons.level ? styles.active : null]} onPress={()=>{
                    handleIcon(icons.level);
                }}>
                    <ImageBackground source={icons.level} style={styles.iconImage} resizeMode='contain' />
                </Pressable>
                <Pressable style={[styles.icon, icon === icons.armor ? styles.active : null]} onPress={()=>{
                    handleIcon(icons.armor);
                }}>
                    <ImageBackground source={icons.armor} style={styles.iconImage} resizeMode='contain' />
                </Pressable>
                <Pressable style={[styles.icon, icon === icons.health ? styles.active : null]} onPress={()=>{
                    handleIcon(icons.health);
                }}>
                    <ImageBackground source={icons.health} style={styles.iconImage} resizeMode='contain' />
                </Pressable>
                <Pressable style={[styles.icon, icon === icons.moon ? styles.active : null]} onPress={()=>{
                    handleIcon(icons.moon);
                }}>
                    <ImageBackground source={icons.moon} style={styles.iconImage} resizeMode='contain' />
                </Pressable>
                <Pressable style={[styles.icon, icon === icons.sun ? styles.active : null]} onPress={()=>{
                    handleIcon(icons.sun);
                }}>
                    <ImageBackground source={icons.sun} style={styles.iconImage} resizeMode='contain' />
                </Pressable>
                <Pressable style={[styles.icon, icon === icons.skull ? styles.active : null]} onPress={()=>{
                    handleIcon(icons.skull);
                }}>
                    <ImageBackground source={icons.skull} style={styles.iconImage} resizeMode='contain' />
                </Pressable>

            </View>
            <Pressable style={styles.submit} onPress={() => {
                createCustomTracker();
                setModalVisible();
            }}>
                <Text>OK</Text>
            </Pressable>
        </View>

    );
}
const styles = StyleSheet.create({
    icon: {
        flex: 1,
        minWidth: '25%',
        maxHeight: '50%',
        alignContent: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    iconImage: {
        flex: 1,
        aspectRatio: 1 / 1,
        width: '100%',
        height: '100%',
    },
    active: {
        border: '1.5px solid gray',
        backgroundColor: 'rgba(255, 255, 255, 0.3)'
    },
    grid: {
        flex: 6,
        height: '100%',
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent: 'center',
        overflow: 'hidden',

        alignItems: 'stretch',
    },
    submit: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
    },
    container: {
        flex: 2,
        flexDirection: 'row',
        height: '100%',
        width: '100%',
        overflow: 'hidden',

    }
});