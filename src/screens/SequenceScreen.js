import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { width, height, totalSize } from "react-native-dimension";

import colors from "../../config/colors";
import AppText from "../components/AppText";
import Button from "../components/Button";
import ReportCard from "../components/ReportCard";

export default function SequenceScreen() {
  const [threats, setThreats] = useState([
    {
      name: "Diabetes",
      percentage: 32,
      image: "https://cdn-icons-png.flaticon.com/512/6723/6723392.png",
    },
    {
      name: "Cancer",
      percentage: 42,
      image: "https://cdn-icons-png.flaticon.com/512/5278/5278124.png",
    },
    {
      name: "Parkison",
      percentage: 12,
      image: "https://cdn-icons-png.flaticon.com/512/4986/4986142.png",
    },
    {
      name: "Alzheimer",
      percentage: 12,
      image: "https://cdn-icons-png.flaticon.com/512/1754/1754210.png",
    },
    {
      name: "HIV",
      percentage: 5,
      image: "https://cdn-icons-png.flaticon.com/512/6146/6146355.png",
    },
    {
      name: "Imposter Syndrome",
      percentage: 9,
      image: "https://cdn-icons-png.flaticon.com/512/6569/6569248.png",
    },
    {
      name: "Fibromyalgia",
      percentage: 9,
      image: "https://cdn-icons-png.flaticon.com/512/1536/1536373.png",
    },
    {
      name: "Depression",
      percentage: 92,
      image: "https://cdn-icons-png.flaticon.com/512/4897/4897237.png",
    },
  ]);

  return (
    <ScrollView style={styles.container}>
      <AppText variant="Bold" style={styles.screenHeaderTitle}>
        DNA Sequence
      </AppText>

      <View style={styles.reportContainer}>
        <Button
          backgroundColor={colors.black}
          textColor={colors.white}
          activeOpacity={0.5}
        >
          My DNA File
        </Button>

        <AppText variant="Bold" style={styles.screenHeaderTitle}>
          Possible Threats
        </AppText>

        <View style={styles.possibleThreatsContainer}>
          {threats.map((threat) => (
            <ReportCard
              key={threat.name}
              image={threat.image}
              variant="SemiBold"
              percentage={threat.percentage}
            >
              {threat.name}
            </ReportCard>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: width(5),
    paddingVertical: height(2),
  },
  screenHeaderTitle: {
    fontSize: totalSize(2.5),
    marginTop: height(1),
  },
  reportContainer: {
    marginTop: height(2),
    paddingBottom: height(5),
  },
  possibleThreatsContainer: {
    marginTop: height(2),
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
