import React from 'react';
import { View, Text, StyleSheet, Pressable, ViewBase, Modal } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import HoverableHeroButton from './HoverableHeroButton.js';
import heroes from '../../constants/heroes.js';

export default function HeroCreator({ setModalVisible, modalVisible }) {
    return (
        <Modal animationType="fade" transparent={true} visible={modalVisible}>
            <View style={styles.modal} >
                <Pressable style={styles.closeButton} onPress={setModalVisible}>
                    <MaterialIcons name="close" color="#fff" size={'5vh'} />
                </Pressable>
                <View style={styles.container}>
                    <View style={styles.row}>
                        <HoverableHeroButton hero={heroes.arcanas} setModalVisible={setModalVisible} />
                        <HoverableHeroButton hero={heroes.darren} setModalVisible={setModalVisible} />
                        <HoverableHeroButton hero={heroes.heathanmoore} setModalVisible={setModalVisible} />
                        <HoverableHeroButton hero={heroes.nascha} setModalVisible={setModalVisible} />
                    </View>
                    <View style={styles.row}>
                        <HoverableHeroButton hero={heroes.scathtassia} setModalVisible={setModalVisible} />
                        <HoverableHeroButton hero={heroes.briar} setModalVisible={setModalVisible} />
                        <HoverableHeroButton hero={heroes.gwendolyn} setModalVisible={setModalVisible} />
                        <HoverableHeroButton hero={heroes.jugolach} setModalVisible={setModalVisible} />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modal: {
        width: '100%',
        height: '100%',
        backgroundColor: '#000',
        position: 'absolute',
        bottom: 0,
    },
    container: {
        flex: 1,
        fontFamily: 'Cinzel',
        justifyContent: 'center',
    },
    row: {
        width: '50vw',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'space-between',
        justifyContent: 'space-between',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '1vh',
        marginBottom: '1vh',
        gap: '1vh',
    },
    closeButton: {
        position: 'relative',
        alignSelf: 'end',
        marginTop: 'auto',
        marginBottom: 'auto',
        width: '6vh',
        height: '6vh',
        color: 'white',
    },
});