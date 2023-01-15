import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { width, height, totalSize } from "react-native-dimension";
import colors from "../../config/colors";
import AppText from "./AppText";

export default function HospitalCard({
  name = "Bumrungrad Hospital",
  address = "33 Sukhumvit 3, Klongtoey Nuea, Bangkok 10110",
  image = "https://images.pexels.com/photos/792326/pexels-photo-792326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  onPress = () => {},
}) {
  return (
    <TouchableOpacity
      style={styles.hospitalCard}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Image
        source={{
          uri: image,
        }}
        style={styles.hospitalImage}
      />

      <AppText variant="Bold" style={styles.hospitalName}>
        {name}
      </AppText>
      <AppText variant="Light" style={styles.hospitalAddress}>
        {address}
      </AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  hospitalCard: {
    backgroundColor: colors.lightGray,
    borderRadius: totalSize(1),
    padding: width(5),
    marginBottom: height(1),
    marginRight: width(5),
  },
  hospitalImage: {
    width: "100%",
    height: height(20),
    borderRadius: totalSize(1),
  },
  hospitalName: {
    fontSize: totalSize(2),
    marginTop: height(1.5),
  },
  hospitalAddress: {
    fontSize: totalSize(1.5),
  },
});
