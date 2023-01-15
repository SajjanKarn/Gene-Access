import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { width, height, totalSize } from "react-native-dimension";

import colors from "../../config/colors";
import AppText from "./AppText";

export default function PatientCard({
  name = "Shivansh Singh",
  address = "Maitighar, Kathmandu 44600",
  image = "https://images-platform.99static.com//IgtttscKg4mbdokiS2uFxZmEhVI=/310x284:1006x980/fit-in/590x590/projects-files/37/3792/379277/5f1fa1e1-087f-4f3f-9c35-afc000710eb9.jpg",
  onPress = () => {},
}) {
  return (
    <TouchableOpacity
      style={styles.patientCard}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Image
        source={{
          uri: image,
        }}
        style={styles.patientImage}
      />
      <View style={styles.patientDetails}>
        <AppText variant="Bold" style={styles.patientName}>
          {name}
        </AppText>
        <AppText variant="Light" style={styles.patientAddress}>
          {address}
        </AppText>

        <View style={styles.patientActions}>
          <TouchableOpacity style={styles.patientButton}>
            <AppText variant="Light" style={styles.patientActionsText}>
              Report
            </AppText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.patientButton}>
            <AppText variant="Light" style={styles.patientActionsText}>
              Meds
            </AppText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.patientButton}>
            <AppText variant="Light" style={styles.patientActionsText}>
              Edit
            </AppText>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  patientCard: {
    backgroundColor: colors.lightGray,
    borderRadius: 10,
    padding: width(5),
    flexDirection: "row",
    alignItems: "center",
    marginBottom: height(2),
  },
  patientImage: {
    width: totalSize(10),
    height: totalSize(10),
    borderRadius: totalSize(5),
  },
  patientDetails: {
    marginLeft: width(5),
  },
  patientName: {
    fontSize: totalSize(2),
  },
  patientGenderIcon: {
    marginVertical: height(1),
  },
  patientAddress: {
    fontSize: totalSize(1.5),
    color: colors.grey,
  },
  patientActions: {
    flexDirection: "row",
    marginTop: height(1),
  },
  patientButton: {
    backgroundColor: colors.darkGray,
    borderRadius: width(2),
    padding: width(2),
    marginRight: width(2),
  },
  patientActionsText: {
    fontSize: totalSize(1.2),
    color: colors.white,
  },
});
