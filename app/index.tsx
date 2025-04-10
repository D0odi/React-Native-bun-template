import { Camera } from "lucide-react-native";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>
        Hello <Camera color={"#090"} size={48} />;
      </Text>
    </View>
  );
}
