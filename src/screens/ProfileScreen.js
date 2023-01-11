import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { width, height, totalSize } from "react-native-dimension";
import colors from "../../config/colors";
import AppText from "../components/AppText";
import Setting from "../components/Setting";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.userProfileContainer}>
        <Image
          source={{
            uri: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          }}
          style={styles.userProfileImage}
        />
        <AppText variant="SemiBold" style={styles.userProfileName}>
          Sajjan Karna
        </AppText>
      </View>

      <AppText variant="SemiBold" style={styles.settingHeaderTitle}>
        Settings
      </AppText>

      <View style={styles.settingsContainer}>
        <Setting iconName="user">Edit Profile</Setting>
        <Setting iconName="creditcard">Payment</Setting>
        <Setting iconName="staro">Rate Us</Setting>
        <Setting iconName="lock">Change Password</Setting>
        <Setting iconName="logout">Logout</Setting>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: width(5),
    paddingVertical: height(3),
  },
  userProfileContainer: {
    alignItems: "center",
  },
  userProfileImage: {
    width: totalSize(13),
    height: totalSize(13),
    borderRadius: totalSize(10),
  },
  userProfileName: {
    fontSize: totalSize(2.5),
    marginTop: height(1),
  },
  settingHeaderTitle: {
    fontSize: totalSize(2.5),
  },
  settingsContainer: {
    marginTop: height(3),
    marginHorizontal: width(3),
  },
});
