import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, Pressable, ViewBase, Modal, ImageBackground } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { TextInput } from 'react-native-gesture-handler';
import icons from '../../constants/icons.js';
import ColorGridPicker from '../ColorGridPicker.js';
import IconGroup from '../IconGroup/IconGroup.js';
import { TrackerListContext } from "../../context/TrackersContext";
import ColorPicker from '../ColorPicker/ColorPicker.js';
import colors from '../../constants/colors.js';

export default function CustomTrackerCreator({ setModalVisible, modalVisible }) {
    const [name, onChangeName] = useState('');
    const [value, setValue] = useState(1);
    const [icon, setIcon] = useState(icons.attack);
    const [color, setColor] = useState(colors.red);
    const [trackers, setTrackers, addTracker, removeTracker] = useContext(TrackerListContext);

    function onChangeValue(text) {
        if (!isNaN(text)) {
            setValue(parseInt(text));
        }else if(text === ''){
            setValue(1);
        }
    }

    function handleIcon(icon) {
        setIcon(icon);
    }
    function handleColor(color) {
        setColor(color);
    }
    function reset() {
        onChangeName('');
        setValue(1);
        setIcon(icons.attack);
        setColor(colors.red);
    }

    function createCustomTracker() {
        var newTracker = {
            name: name,
            health: value,
            color: color,
            image: null,
            icon: icon,
            unselected: null,
            selected: null,
        }
        addTracker(newTracker, true);
        reset();
        console.log("ADDING TRACKER")
    }


    return (
        <Modal animationType="fade" transparent={true} visible={modalVisible}>
            <View style={styles.modalContainer} >
                <Pressable style={styles.closeButton} onPress={setModalVisible}>
                    <MaterialIcons name="close" color="#fff" size={'5vh'} />
                </Pressable>
                <View style={styles.container}>

                    <ColorPicker color={color} handleColor={handleColor} />

                    <View style={styles.rightContainer}>
                        <View style={styles.inputContainer}>
                            <Text style={styles.text}>Name</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeName}
                                value={name}
                                placeholder='Enter name here...'
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.text}>Starting Value</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeValue}
                                value={value}
                                placeholder='Enter value here...'
                                keyboardType='numeric'
                                maxLength={3}
                            />
                        </View>
                        <IconGroup icon={icon} handleIcon={handleIcon} createCustomTracker={createCustomTracker} setModalVisible={setModalVisible} />

                    </View>
                </View>
            </View>
        </Modal >
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
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    rightContainer: {
        flex: 3/2,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        border: '1px solid red',
        padding: '1vh',
    },
    input: {
        width: '100%',
        height: '60%',
        border: '6px solid gray',
        padding: '1vh',
        fontFamily: 'Cinzel-Bold',
        color: 'white',
        fontSize: 40,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    colorGrid: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        border: '1px solid white',
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
    text: {
        color: 'white',
        fontSize: 40,
        userSelect: 'none',
        textAlign: 'left',
        fontFamily: 'Cinzel-Bold',
    },
    iconGrid: {
        flex: 4,
        width: '100%',
        flexWrap: 'wrap',
        border: '1px solid white',
        backgroundColor: 'green',
    },
    iconRow: {
        flex: 1,
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        border: '1px solid white',
    },
    icon: {
        resizeMode: 'cover',
        justifyContent: 'center',
        alignSelf: 'center',
        width: '150px',
        height: '150px',
    }
});