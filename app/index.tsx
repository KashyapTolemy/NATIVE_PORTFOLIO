import { Text, View, Button } from "react-native";
import Home from "./components/home";

export default function Index() {

  return (
    <View
      style={{
        flex: 1,
        borderWidth: 10,
        borderColor: 'transparent',
      }}
    >
      <Home />
    </View>
  );
}
