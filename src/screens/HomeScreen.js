import { useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { BarChart, LineChart } from "react-native-chart-kit";
import { width, height, totalSize } from "react-native-dimension";
import { AntDesign } from "@expo/vector-icons";

import colors from "../../config/colors";
import AppText from "../components/AppText";
import { chartConfig } from "../../config/chartConfig";

export default function HomeScreen() {
  const [toggleChart, setToggleChart] = useState(true);
  const data = {
    labels: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43, 20],
      },
    ],
  };
  const graphStyle = {
    marginVertical: height(1),
    borderRadius: width(2),
    fontFamily: "Poppins-Light",
  };

  return (
    <ScrollView style={styles.container}>
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
            width={width(94)} // from react-native
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
            chartConfig={chartConfig("#00b09b", "#96c93d", "#10D471")}
          />
        )}
      </View>

      <View style={styles.reportsContainer}>
        <AppText variant="Bold" style={styles.screenHeaderTitle}>
          Reports
        </AppText>
      </View>
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
  screenHeaderTitle: {
    fontSize: totalSize(2.5),
    marginBottom: height(0.5),
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
    alignItems: "center",
  },
});
