import { useBatteryLevel, useBatteryState } from "expo-battery";
import { StyleSheet, Text, View } from "react-native";


export default function Home() {
const batteryLevel = useBatteryLevel();
const batteryState = useBatteryState();
  return (
    <View>
      <Text>Batter % = {batteryLevel}</Text>
    </View>
  );
}
