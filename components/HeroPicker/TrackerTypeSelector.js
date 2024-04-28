import React from 'react';
import { View, Text, StyleSheet, Pressable, ViewBase, Modal, ImageBackground } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


export default function TrackerTypeSelector({ setModalVisible, modalVisible, setHeroModalVisible, setCustomModalVisible }) {

    return (
        <Modal animationType="fade" transparent={true} visible={modalVisible}>
            <View style={styles.modalContainer} >
                <Pressable style={styles.closeButton} onPress={setModalVisible}>
                    <MaterialIcons name="close" color="#fff" size={'5vh'} />
                </Pressable>
                <View style={styles.container}>
                    <Pressable style={styles.largeButton} onPress={setHeroModalVisible}>
                        <ImageBackground style={styles.image} source={require('../../assets/images/hero_select.png')}>
                            <Text style={styles.text}>Hero <br/>Tracker</Text>
                        </ImageBackground>
                    </Pressable>
                    <Pressable style={styles.largeButton} onPress={setCustomModalVisible}>
                        <ImageBackground source={require('../../assets/images/custom_select.png')} style={styles.image} >
                            <Text style={styles.text}>Custom<br/>Tracker</Text>
                        </ImageBackground>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );

}

const styles = StyleSheet.create({
    modalContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#000',
        position: 'absolute',
        bottom: 0,

    },
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
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
    largeButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        color: 'white',
    },
    text: {
        color: 'white',
        fontSize: '10vh',
        userSelect: 'none',
        textAlign: 'center',
        fontFamily: 'Cinzel-Black',
        textShadowColor: 'black',
        textShadowOffset: { width: 3, height: 3 },
        textShadowRadius: 1,
    }
}
);