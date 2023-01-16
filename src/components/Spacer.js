import { View } from "react-native";
import { height } from "react-native-dimension";

export default function Spacer({ size = 12 }) {
  return <View style={{ height: height(size) }} />;
}
