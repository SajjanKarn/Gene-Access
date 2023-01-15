import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { width, height, totalSize } from "react-native-dimension";

import colors from "../../config/colors";
import AppText from "../components/AppText";
import PatientCard from "../components/PatientCard";

export default function ListPatientScreen() {
  const [patients, setPatients] = useState([
    {
      name: "Shivansh Dutta",
      address: "Lagos",
      image:
        "https://images.pexels.com/photos/792326/pexels-photo-792326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Sajjan Karna",
      address: "Texas",
      image:
        "https://images.pexels.com/photos/1819483/pexels-photo-1819483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Shambhu Yadav",
      address: "New York",
      image:
        "https://images.pexels.com/photos/1553783/pexels-photo-1553783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Aashutosh Pokharel",
      address: "Kathmandu",
      image:
        "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ]);

  return (
    <ScrollView style={styles.container}>
      <AppText variant="Bold" style={styles.screenHeaderTitle}>
        Recently Checked Patients
      </AppText>

      <View style={styles.patientsContainer}>
        {patients.map((patient) => (
          <PatientCard
            key={patient.name}
            name={patient.name}
            address={patient.address}
            image={patient.image}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: width(5),
    backgroundColor: colors.white,
  },
  screenHeaderTitle: {
    fontSize: totalSize(2.5),
    marginTop: height(1),
  },
  patientsContainer: {
    marginTop: height(2),
  },
});
