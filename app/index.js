import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import TrackerContainer from '../components/TrackerContainer/TrackerContainer.js';
import AddTrackerButton from '../components/AddTrackerButton.js';
import Tracker from '../components/Tracker/Tracker.js';
import { useFonts } from 'expo-font';
import { v4 as uuidv4 } from 'uuid';
import HeroPicker from '../components/HeroPicker/HeroPicker.js';

const backgroundImage = require('../assets/images/background-image.png');

export default function HomePage() {
  const [fontsLoaded] = useFonts({
    'Cinzel': require('../assets/fonts/Cinzel-Regular.ttf'),
    'Cinzel-Bold': require('../assets/fonts/Cinzel-Bold.ttf'),
    'Cinzel-Black': require('../assets/fonts/Cinzel-Black.ttf'),
  });

  const [trackers, setTrackers] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  function handleModalVisibilty(){
    setModalVisible(!modalVisible);
  }
  function handleAddTracker() {
    setTrackers([...trackers, <Tracker key={uuidv4()} hero={heroList.heathanmoore} />]);
  }

  function addHeroTracker(hero){
    setTrackers([...trackers, <Tracker key={uuidv4()} hero={hero} />]);
    setModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage} resizeMode='cover'>
        <View style={styles.mainContainer}>
          <TrackerContainer>
            {trackers}
          </TrackerContainer>
          <HeroPicker modalVisible={modalVisible} setModalVisible={handleModalVisibilty} handleAddTracker= {addHeroTracker}/>
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
    gap: 12,
    height: '100%',
    width: '100%',
  },
});
