import { useContext } from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import { width, height, totalSize } from "react-native-dimension";

import colors from "../../config/colors";
import { AuthContext } from "../../context/AuthContext";

import AppText from "../components/AppText";
import Setting from "../components/Setting";
import Spacer from "../components/Spacer";

export default function ProfileScreen() {
  const { logout } = useContext(AuthContext);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
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
        <AppText variant="Light" style={styles.userEmail}>
          billybutcher@gmail.com
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
        <Setting iconName="logout" onPress={() => logout()}>
          Logout
        </Setting>
      </View>

      <Spacer />
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
  userEmail: {
    fontSize: totalSize(1.8),
    color: colors.darkGray,
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
