import { StatusBar } from "expo-status-bar";
import { Dimensions, StyleSheet, Text, View, Button, Alert } from "react-native";
import { useDeviceOrientation } from "@react-native-community/hooks";
export default function App() {
  console.log(Dimensions.get('screen'));
  const posicao =  useDeviceOrientation();
  console.log(posicao);
  
  return (
    <View style={{  backgroundColor: "#000", height: posicao == "portrait" ? 200: '100%' }}>
      <View style={{ backgroundColor: "blue" , flex: posicao == 'landscape' ? 1: 0.5 }} />

      <View style={{backgroundColor: "gold" , flex: 1}}>
        <Button title="Click here!" color="#f33" onPress={() => {
            Alert.alert('Teste', 'exemplo', [{title: 'sim'}, {title: 'no'}])
        }}/>
      </View>
      <View style={{backgroundColor:"red", flex: 1}}/>
      <View style={styles.container}>
        <Text>Dale na pepeka</Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
