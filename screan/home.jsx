import { useEffect, useState } from "react";
import { useBatteryLevel } from "expo-battery";
import { StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-paper";
import Cr from "../component/circle";

const [batteryLevel, setBatteryLevel] = useState(initialBatteryLevel * 100);
useEffect(() => {
  const repeatFunction = async () => {
    const level = useBatteryLevel() * 100;
    setBatteryLevel(level);
  };

  // Set the function to repeat every 60 seconds (60000 milliseconds)
  const intervalId = setInterval(repeatFunction, 60000);
  repeatFunction();

  // Clean up the interval when the component is unmounted
  return () => clearInterval(intervalId);
}, []);

export default function Home() {
  const initialBatteryLevel = useBatteryLevel();

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
      <Cr progress={batteryLevel} size={50} strokeWidth={5} />
    </>
  );
}

const styles = StyleSheet.create({
  // Add your styles here
});
