import { useBatteryLevel, useBatteryState } from "expo-battery";
import { StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-paper";
import Cr from "../component/circle";

export default function Home() {
  const batteryLevel = useBatteryLevel() * 100;
  const batteryState = useBatteryState();
  return (
    <>
      <View>
        <Card>
          <Card.Title title="Battery" />
          <Card.Content>
            <Text>{batteryLevel}</Text>
          </Card.Content>
        </Card>
      </View>
      <Cr progress={5} size={50} strokeWidth={5 } />

    </>
  );
}
