import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import ColorPicker, {
  Panel5,
  OpacitySlider,
  colorKit,
  PreviewText,
} from 'reanimated-color-picker';
import { returnedResults } from 'reanimated-color-picker';

export default function ColorGridPicker() {

  const initialColor = colorKit.randomRgbColor().hex();

  const selectedColor = useSharedValue(initialColor);
  const backgroundColorStyle = useAnimatedStyle(() => ({
    backgroundColor: selectedColor.value,
  }));

  const onColorSelect = (color) => {
    'worklet';
    selectedColor.value = color.hex;
  };

  return (
    <>
      <Animated.View style={[styles.container, backgroundColorStyle]}>
        <View style={styles.pickerContainer}>
        <Text style={{ color: 'white', textAlign: 'left', fontFamily:'Cinzel-Bold', fontSize:'40px' }}> COLOR</Text>
          <ColorPicker
            value={selectedColor.value}
            sliderThickness={25}
            thumbSize={25}
            thumbShape="circle"
            onChange={onColorSelect}>
            <Panel5 style={styles.panelStyle} />
          </ColorPicker>
        </View>
      </Animated.View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  pickerContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
    padding: '2vh',

    elevation: 10,
  },
  panelStyle: {
    borderRadius: 2,
    // only for snacks
    width: Platform.OS === 'web' ? 'unset' : undefined,
    height: Platform.OS === 'web' ? 'unset' : undefined,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,

  },

});
