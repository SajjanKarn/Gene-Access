import { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { width, height, totalSize } from "react-native-dimension";

import colors from "../../config/colors";
import AppText from "../components/AppText";
import Button from "../components/Button";
import ReportCard from "../components/ReportCard";
import Spacer from "../components/Spacer";

export default function ReportScreen() {
  const [reports, setReports] = useState([
    {
      id: 1,
      title: "Heart Beat",
      image:
        "https://www.iconpacks.net/icons/2/free-heart-beat-icon-2938-thumb.png",
    },
    {
      id: 2,
      title: "Blood Pressure",
      image: "https://cdn-icons-png.flaticon.com/512/5015/5015609.png",
    },
    {
      id: 3,
      title: "X-Ray",
      image: "https://cdn-icons-png.flaticon.com/512/4228/4228684.png",
    },
    {
      id: 4,
      title: "Nutrients",
      image: "https://cdn-icons-png.flaticon.com/512/3373/3373025.png",
    },
    {
      id: 5,
      title: "Excretion",
      image: "https://cdn-icons-png.flaticon.com/512/1855/1855016.png",
    },
    {
      id: 6,
      title: "Cholesterol",
      image: "https://cdn-icons-png.flaticon.com/512/2738/2738776.png",
    },
    {
      id: 7,
      title: "CT-Scan",
      image: "https://cdn-icons-png.flaticon.com/512/4349/4349166.png",
    },
    {
      id: 8,
      title: "Blood Test",
      image: "https://cdn-icons-png.flaticon.com/512/2679/2679284.png",
    },
  ]);
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <AppText variant="Bold" style={styles.screenHeaderTitle}>
        Your Reports
      </AppText>

      <View style={styles.reportContainer}>
        {reports.map((report) => (
          <ReportCard key={report.id} image={report.image}>
            {report.title}
          </ReportCard>
        ))}

        <Button backgroundColor={colors.black} textColor={colors.white}>
          Share Report
        </Button>
      </View>

      <Spacer size={14} />
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
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
