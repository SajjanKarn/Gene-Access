import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { width, height, totalSize } from "react-native-dimension";

import colors from "../../config/colors";
import AppText from "../components/AppText";
import AppInput from "../components/AppInput";
import HospitalCard from "../components/HospitalCard";

export default function CheckupScreen() {
  const [hospitals, setHospitals] = useState([
    {
      name: "Bumrungrad Hospital",
      address: "33 Sukhumvit 3, Klongtoey Nuea, Bangkok 10110",
      image:
        "https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Mayo Clinic – Rochester",
      address: "200 First St SW, Rochester, MN 55905",
      image:
        "https://images.pexels.com/photos/1692693/pexels-photo-1692693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Johns Hopkins Hospital",
      address: "600 N Wolfe St, Baltimore, MD 21287",
      image:
        "https://images.pexels.com/photos/2269294/pexels-photo-2269294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ]);
  return (
    <ScrollView style={styles.container}>
      <AppText variant="Bold" style={styles.screenHeaderTitle}>
        Recent Checkups
      </AppText>

      <View style={styles.searchInput}>
        <AppInput placeholder="Search for Hospital or Doctor" />
      </View>

      <AppText variant="Bold" style={styles.screenHeaderTitle}>
        Recently Visited
      </AppText>

      <ScrollView style={styles.hospitalContainer} horizontal>
        {hospitals.map((hospital) => (
          <HospitalCard
            key={hospital.name}
            name={hospital.name}
            address={hospital.address}
            image={hospital.image}
          />
        ))}
      </ScrollView>

      <AppText variant="Bold" style={styles.screenHeaderTitle}>
        Medications
      </AppText>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: width(5),
  },
  screenHeaderTitle: {
    fontSize: totalSize(2.5),
    marginTop: height(1),
  },
  searchInput: {
    marginVertical: height(1),
  },
  hospitalContainer: {
    marginTop: height(1),
  },
});
