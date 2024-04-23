import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, ViewBase, Modal } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { ImageBackground } from 'react-native-web';
import HoverableHeroButton from './HoverableHeroButton';
import heroes from '../../constants/heroes.js';

export default function HeroPicker({ setModalVisible, modalVisible, handleAddTracker }) {
    return (
        <Modal style={styles.modal} animationType="slide" visible={modalVisible}>
            <Pressable style={styles.gearContainer} onPress={setModalVisible}>
                <MaterialIcons name="close" color="#black" size={22} />
            </Pressable>
            <View style={styles.container}>
                <View style={styles.row}>
                    <HoverableHeroButton hero={heroes.arcanas} />
                    <HoverableHeroButton hero={heroes.darren} />
                    <HoverableHeroButton hero={heroes.heathanmoore} />
                    <HoverableHeroButton hero={heroes.nascha} />
                </View>
                <View style={styles.row}>
                    <HoverableHeroButton hero={heroes.scathtassia} />
                    <HoverableHeroButton hero={heroes.briar} />
                    <HoverableHeroButton hero={heroes.gwendolyn} />
                    <HoverableHeroButton hero={heroes.jugolach} />
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modal: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    container: {
        flex: 1,
        fontFamily: 'Cinzel',
        justifyContent: 'center',
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'space-between',
        justifyContent: 'space-between',
        border: '2px solid white',
    },
    gearContainer: {
        position: 'relative',
        alignSelf: 'end',
        marginBottom: 'auto',
        width: '4vh',
        height: '4vh',
        color: 'white',
    },
});