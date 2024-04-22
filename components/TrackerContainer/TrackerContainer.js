import { View, StyleSheet } from "react-native";

export default function TrackerContainer({ children }) {
  return (
    <View style={styles.trackerContainer}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
    trackerContainer: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flex:1,
        flexGrow: 10,
        gap: 12,
    },
});