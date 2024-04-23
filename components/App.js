import { StatusBar } from 'expo-status-bar';

import { ImageBackground, StyleSheet, View } from 'react-native';
import { useState, useContext } from 'react';
import TrackerContainer from '../components/TrackerContainer/TrackerContainer.js';
import AddTrackerButton from '../components/AddTrackerButton.js';
import Tracker from '../components/Tracker/Tracker.js';
import { useFonts } from 'expo-font';
import HeroPicker from '../components/HeroPicker/HeroPicker.js';
import { TrackerListContext } from '../context/TrackersContext.js';

const backgroundImage = require('../assets/images/background-image.png');

export default function App() {
  const [fontsLoaded] = useFonts({
    'Cinzel': require('../assets/fonts/Cinzel-Regular.ttf'),
    'Cinzel-Bold': require('../assets/fonts/Cinzel-Bold.ttf'),
    'Cinzel-Black': require('../assets/fonts/Cinzel-Black.ttf'),
  });

  const [trackers, setTrackers] = useContext(TrackerListContext);
  
  const [modalVisible, setModalVisible] = useState(false);


  function handleModalVisibilty() {
    console.log(trackers)
    setModalVisible(!modalVisible);
  }

  return (
      <View style={styles.container}>
        <ImageBackground source={backgroundImage} style={styles.backgroundImage} resizeMode='cover'>
          <View style={styles.mainContainer}>
            <TrackerContainer>
              {trackers.map(tracker => (
                <Tracker key={tracker.key} id={tracker.id} hero={tracker.hero} />
              ))}
            </TrackerContainer>
            <HeroPicker modalVisible={modalVisible} setModalVisible={handleModalVisibilty}/>
            <AddTrackerButton onPress={handleModalVisibilty} />
          </View>
        </ImageBackground>
        <StatusBar style="auto" />
      </View>
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
});
