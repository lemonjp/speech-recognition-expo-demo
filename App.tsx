import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useVoiceRecognition } from "./hooks/useVoiceRecognition";

export default function App() {
  const [borderColor, setBorderColor] = useState<"lightgray" | "lightgreen">( "lightgray" );

  const { state, startRecognizing, stopRecognizing, destroyRecognizer} = useVoiceRecognition();
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 32, fontWeight: "bold", marginBottom: 10} }>Speech Recognition Example</Text>
      <Text style={{ fontSize: 18, marginBottom: 10} }>{JSON.stringify(state, null, 2)}</Text>
      {/*
      <Text style={{ fontSize: 18, marginBottom: 10} }>Recognized: {state.recognized}</Text>
      */}
      <Pressable
        onPressIn={() => {
          setBorderColor("lightgreen");
          startRecognizing();
        }}
        onPressOut={() => {
          setBorderColor("lightgray");
          stopRecognizing();
          // handleSubmit();
        }}
        style={{
          width: "90%",
          padding: 30,
          gap: 10,
          borderRadius: 5,
          borderWidth: 3,
          borderColor: borderColor,
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Text style={{ fontSize: 18 }}>Press to speak</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
