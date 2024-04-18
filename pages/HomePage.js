import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
import TrackerContainer from '../components/TrackerContainer/TrackerContainer.js';
import AddTrackerButton from '../components/AddTrackerButton.js';
import Tracker from '../components/Tracker/Tracker.js';
import {useFonts} from 'expo-font';

const backgroundImage = require('../assets/images/background-image.png');

export default function HomePage() {
  const [fontsLoaded] = useFonts({
    'Cinzel': require('../assets/fonts/Cinzel-Regular.ttf'),
    'Cinzel-Bold': require('../assets/fonts/Cinzel-Bold.ttf'),
    'Cinzel-Black': require('../assets/fonts/Cinzel-Black.ttf'),
  });

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.mainContainer}>
          <TrackerContainer>
            <Tracker />
          </TrackerContainer>
          <AddTrackerButton onPress={handleAddTracker}/>
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

function handleAddTracker() {
  console.log('Add tracker button pressed');
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
    padding: 12,
    gap: 12,
    height: '100%',
    width: '100%',
  },
});
