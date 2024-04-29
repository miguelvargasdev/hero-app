import React, { useState, useContext } from 'react';
import { Text, View, StyleSheet, Pressable, ImageBackground } from 'react-native';
import colors from '../../constants/colors.js'

export default function ColorPicker({ color, handleColor }) {
    return (
        <View style={styles.container}>
            <View style={styles.grid}>
                <Pressable style={[styles.color, { backgroundColor: colors.red }, color === colors.red ? styles.active : null]} onPress={() => {
                    handleColor(colors.red);
                }}></Pressable>
                <Pressable style={[styles.color, { backgroundColor: colors.orange }, color === colors.orange ? styles.active : null]} onPress={() => {
                    handleColor(colors.orange);
                }}></Pressable>
                <Pressable style={[styles.color, { backgroundColor: colors.yellow }, color === colors.yellow ? styles.active : null]} onPress={() => {
                    handleColor(colors.yellow);
                }}></Pressable>
                <Pressable style={[styles.color, { backgroundColor: colors.lime }, color === colors.lime ? styles.active : null]} onPress={() => {
                    handleColor(colors.lime);
                }}></Pressable>
                <Pressable style={[styles.color, { backgroundColor: colors.green }, color === colors.green ? styles.active : null]} onPress={() => {
                    handleColor(colors.green);
                }}></Pressable>
                <Pressable style={[styles.color, { backgroundColor: colors.teal }, color === colors.teal ? styles.active : null]} onPress={() => {
                    handleColor(colors.teal);
                }}></Pressable>
                
                <Pressable style={[styles.color, { backgroundColor: colors.blue }, color === colors.blue ? styles.active : null]} onPress={() => {
                    handleColor(colors.blue);
                }}></Pressable>
                <Pressable style={[styles.color, { backgroundColor: colors.navy }, color === colors.navy ? styles.active : null]} onPress={() => {
                    handleColor(colors.navy);
                }}></Pressable>
                <Pressable style={[styles.color, { backgroundColor: colors.purple }, color === colors.purple ? styles.active : null]} onPress={() => {
                    handleColor(colors.purple);
                }}></Pressable>
                <Pressable style={[styles.color, { backgroundColor: colors.pink }, color === colors.pink ? styles.active : null]} onPress={() => {
                    handleColor(colors.pink);
                }}></Pressable>
                <Pressable style={[styles.color, { backgroundColor: colors.white }, color === colors.white ? styles.active : null]} onPress={() => {
                    handleColor(colors.white);
                }}></Pressable>
                <Pressable style={[styles.color, { backgroundColor: colors.black }, color === colors.black ? styles.active : null]} onPress={() => {
                    handleColor(colors.black);
                }}></Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        height: '100%',
        width: '100%',
        border: '1px solid gray',
    },
    grid:{
        flex: 1,
        height: '100%',
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'stretch',
        border: '1px solid gray',
        overflow: 'hidden',

    },
    color: {
        flex: 1,
        aspectRatio: 1 / 1,
        minWidth: '33%',
        maxHeight: '25%',
        alignContent: 'center',
        justifyContent: 'center',

    },
    active: {
        border: '2px solid white',

    },
})