import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { width, height, totalSize } from "react-native-dimension";

import colors from "../../config/colors";
import AppText from "../components/AppText";

export default function MedicationCard({
  title = "Medication",
  dosage = "Dosage",
  subtitle = "Subtitle",
  image = "https://integratedlaboratories.in/wp-content/uploads/2022/08/Paracetamol-500mg-Tablets-Intemol-500-2.jpeg",
}) {
  return (
    <TouchableOpacity style={styles.medicationCard} activeOpacity={0.7}>
      <View style={styles.medicationCardImageContainer}>
        <Image
          style={styles.medicationCardImage}
          source={{
            uri: image,
          }}
        />
      </View>
      <View style={styles.medicationCardDetails}>
        <AppText variant="Bold" style={styles.medicationCardTitle}>
          {title}
        </AppText>
        <AppText variant="Medium" style={styles.dosage}>
          {dosage}
        </AppText>
        <AppText variant="Light" style={styles.medicationCardSubtitle}>
          {subtitle}
        </AppText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  medicationCard: {
    flexDirection: "row",
    backgroundColor: colors.lightGray,
    borderRadius: totalSize(1),
    padding: width(3),
    marginBottom: height(1),
  },
  medicationCardImageContainer: {
    width: width(20),
    height: width(20),
    borderRadius: totalSize(1),
    overflow: "hidden",
  },
  medicationCardImage: {
    width: "100%",
    height: "100%",
  },
  medicationCardDetails: {
    marginLeft: width(3),
  },
  medicationCardTitle: {
    fontSize: totalSize(2),
  },
  dosage: {
    fontSize: totalSize(1.5),
  },
  medicationCardSubtitle: {
    fontSize: totalSize(1.5),
  },
});
