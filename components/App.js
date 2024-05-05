import { useState, useContext } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { atom } from 'jotai';

import TrackerContainer from '../components/TrackerContainer/TrackerContainer.js';
import AddTrackerButton from '../components/AddTrackerButton.js';
import Tracker from '../components/Tracker/Tracker.js';
import HeroCreator from './HeroPicker/HeroCreator.js';
import { TrackerListContext } from '../context/TrackersContext.js';
import TrackerTypeSelector from './HeroPicker/TrackerTypeSelector.js';
import CustomTrackerCreator from './HeroPicker/CustomTrackerCreator.js';
import colors from "../constants/colors.js"
import icons from "../constants/icons.js"
const backgroundImage = require('../assets/images/background-image.png');

export default function App() {
    const [fontsLoaded] = useFonts({
        'Cinzel': require('../assets/fonts/Cinzel-Regular.ttf'),
        'Cinzel-Bold': require('../assets/fonts/Cinzel-Bold.ttf'),
        'Cinzel-Black': require('../assets/fonts/Cinzel-Black.ttf'),
    });

    const [trackers] = useContext(TrackerListContext);

    const [heroModalVisible, setHeroModalVisible] = useState(false);
    
    const [customTrackerCreatorVisible, setCustomTrackerCreatorVisible] = useState(false);
    const [currentCustomHero, setCurrentCustomHero] = useState({name: 'Custom Tracker', health: 1, color: colors.red, icon: icons.attack})

    const [trackerSelectorVisibility, setTrackerSelectorVisibility] = useState(false);

    function handleTrackerModalVisibilty() {
        setTrackerSelectorVisibility(!trackerSelectorVisibility);
    }
    function handleHeroModalVisibilty() {
      
        setHeroModalVisible(!heroModalVisible);
        setTrackerSelectorVisibility(false);
    }

    function handleCustomTrackerVisibilty() {
        setCustomTrackerCreatorVisible(!customTrackerCreatorVisible);
        if(trackerSelectorVisibility) setTrackerSelectorVisibility(false);
    }
    return (
        <GestureHandlerRootView style={styles.container}>
            <ImageBackground source={backgroundImage} style={styles.backgroundImage} resizeMode='cover' visibility="false">
                <View style={styles.mainContainer}>
                    <View style={styles.trackerContainer}>
                        <TrackerContainer>
                            {trackers.filter((tracker, idx) => idx <= 4).map(tracker => (
                                <Tracker key={tracker.key} id={tracker.id} hero={tracker.hero} custom={tracker.custom} customHeroModal={handleCustomTrackerVisibilty}/>
                            ))}
                        </TrackerContainer>
                        {
                            trackers.length > 5 ? (
                                <TrackerContainer>
                                    {trackers.filter((tracker, idx) => idx > 4).map(tracker => (
                                        <Tracker key={tracker.key} id={tracker.id} hero={tracker.hero} custom={tracker.custom} customHeroModal={handleCustomTrackerVisibilty} />
                                    ))}
                                </TrackerContainer>
                            ) : null
                        }
                    </View>
                    <TrackerTypeSelector modalVisible={trackerSelectorVisibility} setModalVisible={handleTrackerModalVisibilty} setHeroModalVisible={handleHeroModalVisibilty} setCustomModalVisible={setCustomTrackerCreatorVisible} />
                    <HeroCreator modalVisible={heroModalVisible} setModalVisible={handleHeroModalVisibilty} />
                    <CustomTrackerCreator modalVisible={customTrackerCreatorVisible} setModalVisible={handleCustomTrackerVisibilty} hero={currentCustomHero}/>
                    {trackers.length < 10 && <AddTrackerButton onPress={handleTrackerModalVisibilty} />}
                </View >
            </ImageBackground >
            <StatusBar style="auto" />
        </GestureHandlerRootView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        height: '100%',
        width: '100%',
        fontFamily: 'Cinzel',
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        justifyContent: 'center',
        color: 'white',
    },
    mainContainer: {
        flex: 1,
        flexDirection: 'row',
        padding: '1vh',
        height: '100%',
        width: '100%',
        flexBasis: 10,
    },
    trackerContainer: {
        flex: 1,
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        flexGrow: 10,
    }
});
