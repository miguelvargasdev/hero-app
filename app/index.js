import { StatusBar, setStatusBarHidden } from 'expo-status-bar';
import * as NavigationBar from 'expo-navigation-bar';
import { AppState, Platform, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
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
  const [isSystemStatusBarVisible, setSystemStatusBarVisible] = useState(Platform.OS !== "web")
  const [isSystemNavigationBarVisible, setSystemNavigationBarVisible] = useState(Platform.OS === "android")
  const [screenDimensions, setScreenDimensions] = useState({ height: "100%", width: "100%" })
  const [trackers, setTrackers] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const { height: screenHeight, width: screenWidth } = screenDimensions


  function handleModalVisibilty() {
    setModalVisible(!modalVisible);
  }
  function handleAddTracker() {
    setTrackers([...trackers, <Tracker key={uuidv4()} hero={heroList.heathanmoore} />]);
  }

  function addHeroTracker(hero) {
    setTrackers([...trackers, <Tracker key={uuidv4()} hero={hero} />]);
    setModalVisible(false);
  }
  const navigationConfig = async () => {
    if (Platform.OS === "android") {
      // Make it overlay the screen
      await NavigationBar.setBehaviorAsync("overlay-swipe")

      // Hide it
      await NavigationBar.setVisibilityAsync("hidden")
    }
  }
  useEffect(() => {
    if (Platform.OS !== "web") {
      // If android or ios, hide status bar.
      setStatusBarHidden(true, "none")
    }
    setSystemStatusBarVisible(false)

    if (Platform.OS === "android") {
      // If android, hide navigation bar using config.
      navigationConfig()

      // Listen to navigation bar
      const navigationBarListener = NavigationBar.addVisibilityListener(({ visibility }) => {
        setSystemNavigationBarVisible(visibility === "visible")

        if (visibility === "visible") {
          navigationConfig()
        }
      })

      // Listen to app state
      const appStateListener = AppState.addEventListener("change", nextAppState => {
        setSystemNavigationBarVisible(nextAppState !== "active")

        if (nextAppState !== "active") {
          navigationConfig()
        }
      })

      return () => {
        navigationBarListener.remove()
        appStateListener.remove()
      }
    }

    return undefined
  }, [])


  return (
    <View
      style={{ height: screenHeight, width: screenWidth, overflow:"hidden" }}
      onLayout={(event) => {
        const { width, height } = event.nativeEvent.layout
        if (!isSystemStatusBarVisible && !isSystemNavigationBarVisible) {
          setScreenDimensions({ height: height, width: width })
        }
      }}
    >
      <View style={styles.container}>
        <ImageBackground source={backgroundImage} style={styles.backgroundImage} resizeMode='cover'>
          <View style={styles.mainContainer}>
            <TrackerContainer>
              {trackers}
            </TrackerContainer>
            <HeroPicker modalVisible={modalVisible} setModalVisible={handleModalVisibilty} handleAddTracker={addHeroTracker} />
            <AddTrackerButton onPress={handleModalVisibilty} />
          </View>
        </ImageBackground>
        <StatusBar style="auto" />
      </View>
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
