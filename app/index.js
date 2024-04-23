import React from "react";
import { View, StyleSheet } from "react-native";

import { TrackerListProvider } from "../context/TrackersContext";
import App from "../components/App";

export default function Index() {
  return (
    <TrackerListProvider>
      <App />
    </TrackerListProvider>
  );
}