import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { height, totalSize } from "react-native-dimension";
import colors from "../../config/colors";

const TabButton = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      {...props}
      style={{
        backgroundColor: colors.black,
        width: totalSize(7.5),
        height: totalSize(7.5),
        borderRadius: totalSize(7.5),
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        bottom: height(2),
        shadowColor: colors.black,
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
      }}
    >
      <AntDesign name="home" size={25} color={colors.white} />
    </TouchableOpacity>
  );
};

export default TabButton;
