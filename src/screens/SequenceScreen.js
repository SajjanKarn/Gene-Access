import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { width, height, totalSize } from "react-native-dimension";

import colors from "../../config/colors";
import AppText from "../components/AppText";
import Button from "../components/Button";
import ReportCard from "../components/ReportCard";
import ScaleItem from "../components/ScaleItem";

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

        <View style={styles.scaleContainer}>
          <AppText variant="Bold" style={styles.scaleTitle}>
            Risk Level Scale
          </AppText>

          <View style={styles.scale}>
            <ScaleItem color={colors.green}>Risk Level: Low</ScaleItem>
            <ScaleItem color={colors.lightRed}>Risk Level: Medium</ScaleItem>
            <ScaleItem color={colors.lightRed2}>Risk Level: High</ScaleItem>
            <ScaleItem color={colors.red}>Risk Level: Very High</ScaleItem>
          </View>
        </View>

        <AppText variant="Bold" style={styles.threatsTitle}>
          Possible Threats
        </AppText>
        <View style={styles.possibleThreatsContainer}>
          {/* sort the threats by percentage */}
          {threats
            .sort((a, b) => b.percentage - a.percentage)
            .map((threat) => (
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
  threatsTitle: {
    fontSize: totalSize(2.5),
    marginTop: height(2),
  },
  reportContainer: {
    paddingBottom: height(5),
  },
  possibleThreatsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  scaleContainer: {
    marginTop: height(2),
  },
  scaleTitle: {
    fontSize: totalSize(2),
    marginBottom: height(1),
  },
});
