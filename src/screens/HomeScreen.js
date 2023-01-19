import { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { width, height, totalSize } from "react-native-dimension";
import { Picker } from "@react-native-picker/picker";
import { AntDesign } from "@expo/vector-icons";

import { BarChart, LineChart, PieChart } from "react-native-chart-kit";

import colors from "../../config/colors";
import { chartConfig } from "../../config/chartConfig";

import AppText from "../components/AppText";
import HospitalCard from "../components/HospitalCard";
import Spacer from "../components/Spacer";

export default function HomeScreen() {
  const [toggleChart, setToggleChart] = useState(true);
  const [pickerInput, setPickerInput] = useState(6);
  const [hospitals, setHospitals] = useState([
    {
      id: 1,
      name: "St. Joseph's Hospital",
      address: "1234 Main St, Los Angeles, CA 90001",
      image:
        "https://images.pexels.com/photos/3957987/pexels-photo-3957987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      name: "UCLA Medical Center",
      address: "1234 Main St, Los Angeles, CA 90001",
      image:
        "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      name: "Northwestern Memorial Hospital",
      address: "Boston St, Los Angeles, CA 90001",
      image:
        "https://images.pexels.com/photos/3279203/pexels-photo-3279203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 4,
      name: "Cedars-Sinai Medical Center",
      address: "1234 Main St, Los Angeles, CA 90001",
      image:
        "https://images.pexels.com/photos/3845806/pexels-photo-3845806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ]);
  const data = {
    labels: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43, 20],
      },
    ],
  };
  const reportData = {
    labels: ["Heart", "Blood", "Blood", "Temp", "Oxy", "Weig"],
    datasets: [
      {
        data: [99, 135, 70, 98.6, 98, 85],
      },
    ],
  };

  const graphStyle = {
    marginVertical: height(1),
    borderRadius: width(2),
    fontFamily: "Poppins-Light",
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.userGreetingContainer}>
        <View style={styles.userGreetingTextContainer}>
          <AppText variant="Bold" style={styles.userHelloText}>
            Hello, Billy 👋
          </AppText>
          <AppText variant="Regular" style={styles.screenHeaderSubtitle}>
            How are you feeling today?
          </AppText>
        </View>

        <View style={styles.userProfileImageContainer}>
          <Image
            source={{
              uri: "https://cdn.mos.cms.futurecdn.net/uNarNjeX5KZfbX3YVN6Nb9-1200-80.jpg",
            }}
            style={styles.userProfileImage}
          />
        </View>
      </View>
      <AppText variant="Bold" style={styles.screenHeaderTitle}>
        Last Week Summary
      </AppText>

      <View style={styles.chartContainer}>
        <TouchableOpacity
          style={styles.toggleButton}
          onPress={() => setToggleChart(!toggleChart)}
        >
          <AppText variant="Light">
            <AntDesign name="linechart" size={16} color={colors.white} />
          </AppText>
        </TouchableOpacity>
        {toggleChart ? (
          <LineChart
            data={data}
            width={width(94)}
            height={height(32)}
            yAxisSuffix="$"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={chartConfig("#0F2027", "#203A43", "#2C5364", "#fff")}
            bezier
            style={graphStyle}
          />
        ) : (
          <BarChart
            style={graphStyle}
            data={data}
            width={width(94)}
            height={height(32)}
            yAxisSuffix="$"
            chartConfig={chartConfig("#2D033B", "#810CA8", "#E5B8F4")}
          />
        )}
      </View>

      <View style={styles.reportsContainer}>
        <AppText variant="Bold" style={styles.screenHeaderTitle}>
          Reports
        </AppText>

        <View style={styles.chartContainer}>
          <View style={styles.chartAction}>
            <View>
              <AppText variant="Regular" style={styles.chartActionText}>
                Recent Reports
              </AppText>
              <AppText variant="Light" style={styles.timeIntervalText}>
                July 2020 - July 2022
              </AppText>
            </View>
            <View>
              <Picker
                selectedValue={pickerInput}
                onValueChange={(itemValue, itemIndex) =>
                  setPickerInput(itemValue)
                }
                style={styles.picker}
              >
                <Picker.Item label="6 Months" value={6} />
                <Picker.Item label="12 Months" value={12} />
              </Picker>
            </View>
          </View>

          <LineChart
            data={reportData}
            width={width(94)}
            height={height(32)}
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={chartConfig("#0F2027", "#203A43", "#2C5364", "#fff")}
            style={graphStyle}
          />
        </View>
      </View>

      <View style={styles.lastCheckupContainer}>
        <AppText variant="Bold" style={styles.screenHeaderTitle}>
          Last Checkups
        </AppText>

        <View style={styles.chartContainer}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {hospitals.map((hospital) => (
              <HospitalCard
                key={hospital.id}
                image={hospital.image}
                name={hospital.name}
                address={hospital.address}
              />
            ))}
          </ScrollView>
        </View>
      </View>

      <Spacer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: width(3),
    paddingVertical: height(1),
  },
  userGreetingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: height(1),
    paddingVertical: height(1.5),
  },
  userHelloText: {
    fontSize: totalSize(2.5),
  },
  screenHeaderSubtitle: {
    fontSize: totalSize(1.8),
    color: colors.darkGray,
  },
  userProfileImageContainer: {
    width: totalSize(6),
    height: totalSize(6),
    borderRadius: totalSize(3),
    overflow: "hidden",
  },
  userProfileImage: {
    width: "100%",
    height: "100%",
  },
  screenHeaderTitle: {
    fontSize: totalSize(2.5),
    marginVertical: height(1),
  },
  toggleButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.darkGray,
    width: totalSize(3),
    height: totalSize(3),
    borderRadius: totalSize(0.5),
    alignSelf: "flex-end",
  },
  chartContainer: {
    justifyContent: "center",
  },
  chartAction: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: height(1),
  },
  chartActionText: {
    fontSize: totalSize(1.8),
  },
  timeIntervalText: {
    fontSize: totalSize(1.3),
    color: colors.darkGray,
  },
  picker: {
    width: width(35),
    height: height(5),
    backgroundColor: colors.lightGray,
    borderRadius: width(2),
  },
  reportsContainer: {
    marginTop: height(2),
  },
  lastCheckupContainer: {
    marginTop: height(2),
    paddingBottom: height(2),
  },
});
