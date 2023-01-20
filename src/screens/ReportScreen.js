import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, View, ScrollView, Modal, Image } from "react-native";
import { width, height, totalSize } from "react-native-dimension";

import colors from "../../config/colors";
import AppText from "../components/AppText";
import Button from "../components/Button";
import ReportCard from "../components/ReportCard";
import Spacer from "../components/Spacer";

export default function ReportScreen() {
  const [showModal, setShowModal] = useState(false);
  const [focusedReport, setFocusedReport] = useState(null);
  const [reports, setReports] = useState([
    {
      id: 1,
      title: "Heart Beat",
      image:
        "https://www.iconpacks.net/icons/2/free-heart-beat-icon-2938-thumb.png",
      subText: `120 BPM`,
      onPress: () => {
        setFocusedReport(reports[0]);
        setShowModal(true);
      },
    },
    {
      id: 2,
      title: "Blood Pressure",
      image: "https://cdn-icons-png.flaticon.com/512/5015/5015609.png",
      subText: `120/80 mmHg`,
      onPress: () => {
        setFocusedReport(reports[1]);
        setShowModal(true);
      },
    },
    {
      id: 3,
      title: "X-Ray",
      image: "https://cdn-icons-png.flaticon.com/512/4228/4228684.png",
      subText: `Normal`,
      onPress: () => {
        setFocusedReport(reports[2]);
        setShowModal(true);
      },
    },
    {
      id: 4,
      title: "Nutrients",
      image: "https://cdn-icons-png.flaticon.com/512/3373/3373025.png",
      subText: `Normal`,
      onPress: () => {
        setFocusedReport(reports[3]);
        setShowModal(true);
      },
    },
    {
      id: 5,
      title: "Excretion",
      image: "https://cdn-icons-png.flaticon.com/512/1855/1855016.png",
      subText: `Normal`,
      onPress: () => {
        setFocusedReport(reports[4]);
        setShowModal(true);
      },
    },
    {
      id: 6,
      title: "Cholesterol",
      image: "https://cdn-icons-png.flaticon.com/512/2738/2738776.png",
      subText: `120 mg/dl`,
      onPress: () => {
        setFocusedReport(reports[5]);
        setShowModal(true);
      },
    },
    {
      id: 7,
      title: "CT-Scan",
      image: "https://cdn-icons-png.flaticon.com/512/4349/4349166.png",
      subText: `Normal`,
      onPress: () => {
        setFocusedReport(reports[6]);
        setShowModal(true);
      },
    },
    {
      id: 8,
      title: "Blood Test",
      image: "https://cdn-icons-png.flaticon.com/512/2679/2679284.png",
      subText: `AB-`,
      onPress: () => {
        setFocusedReport(reports[7]);
        setShowModal(true);
      },
    },
  ]);
  return (
    <>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <AppText variant="Bold" style={styles.screenHeaderTitle}>
          Your Reports
        </AppText>

        <View style={styles.reportContainer}>
          {reports.map((report) => (
            <ReportCard
              key={report.id}
              image={report.image}
              subText={report.subText}
              onPress={report.onPress}
              variant="SemiBold"
            >
              {report.title}
            </ReportCard>
          ))}

          <Button backgroundColor={colors.black} textColor={colors.white}>
            Share Report
          </Button>
        </View>

        <Spacer size={14} />
      </ScrollView>

      <Modal visible={showModal} animationType="slide">
        <View style={styles.modalContainer}>
          <AntDesign
            name="close"
            size={28}
            color={colors.black}
            onPress={() => setShowModal(false)}
            style={{ alignSelf: "flex-end" }}
          />

          <AppText variant="Bold" style={styles.screenHeaderTitle}>
            {focusedReport?.title || "Your"} Report
          </AppText>

          <Image
            source={{ uri: focusedReport?.image }}
            style={styles.modalHeaderImage}
          />

          <AppText variant="Bold" style={styles.modalHeaderSubText}>
            {focusedReport?.subText || "No Report"}
          </AppText>

          <AppText style={styles.modalStatusText}>Status: Normal</AppText>

          {focusedReport?.id === 3 && (
            <View style={styles.modalHorizontalImages}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <Image
                  source={{
                    uri: "https://medlineplus.gov/images/Xray_share.jpg",
                  }}
                  style={styles.modalImages}
                />
                <Image
                  source={{
                    uri: "https://www.ed.ac.uk/sites/default/files/styles/landscape_breakpoints_theme_uoe_mobile_1x/public/thumbnails/image/xray_hands.jpg?itok=JHFL9Nxy",
                  }}
                  style={styles.modalImages}
                />
                <Image
                  source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc84Nh0ha2UDmovMf-1HMWGuRNtl4N_KPrFw&usqp=CAU",
                  }}
                  style={styles.modalImages}
                />
              </ScrollView>
            </View>
          )}

          <Button backgroundColor={colors.black} textColor={colors.white}>
            Recheck
          </Button>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: width(5),
    paddingVertical: height(2),
  },
  // Modal Styles
  modalContainer: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: width(5),
    paddingVertical: height(2),
  },
  modalHeaderImage: {
    width: totalSize(15),
    height: totalSize(15),
    alignSelf: "center",
    marginVertical: height(2),
  },
  modalHeaderSubText: {
    fontSize: totalSize(4),
    marginTop: height(2),
    textAlign: "center",
  },
  modalStatusText: {
    fontSize: totalSize(2),
    textAlign: "center",
    marginBottom: height(2),
  },
  modalHorizontalImages: { alignItems: "center" },
  modalImages: {
    width: width(80),
    height: height(40),
    marginHorizontal: width(2),
    borderRadius: 10,
  },
  // Screen Styles
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
