import { Pressable, View, StyleSheet, Text } from "react-native";

export default function AddTrackerButton({ onPress }) {
  return (
    <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.buttonLabel}>+</Text>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
        flexBasis: 0
    },
    button: {
        backgroundColor: '#00000085',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'white',
        borderWidth: 4,
    },
    buttonLabel: {
        color: 'white',
        fontSize: 40,
    }
})