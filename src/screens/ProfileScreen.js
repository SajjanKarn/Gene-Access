import { Image, ScrollView, StyleSheet, View } from "react-native";
import { width, height, totalSize } from "react-native-dimension";

import colors from "../../config/colors";

import AppText from "../components/AppText";
import Setting from "../components/Setting";

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.userProfileContainer}>
        <Image
          source={{
            uri: "https://cdn.mos.cms.futurecdn.net/uNarNjeX5KZfbX3YVN6Nb9-1200-80.jpg",
          }}
          style={styles.userProfileImage}
        />
        <AppText variant="SemiBold" style={styles.userProfileName}>
          Billy Butcher
        </AppText>
      </View>

      <AppText variant="SemiBold" style={styles.settingHeaderTitle}>
        Settings
      </AppText>

      <View style={styles.settingsContainer}>
        <Setting iconName="user">Edit Profile</Setting>
        <Setting iconName="calendar">Past Appointments</Setting>
        <Setting iconName="lock">Change Password</Setting>
        <Setting iconName="creditcard">Payment</Setting>
        <Setting iconName="staro">Rate Us</Setting>
        <Setting iconName="logout">Logout</Setting>
      </View>
    </ScrollView>
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
    marginTop: height(3),
  },
  settingsContainer: {
    marginTop: height(1),
    marginHorizontal: width(3),
    paddingBottom: height(3),
  },
});
