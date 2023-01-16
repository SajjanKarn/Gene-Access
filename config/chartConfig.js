import { width } from "react-native-dimension";

const chartConfig = (
  backgroundColor = "#e26a00",
  backgroundGradientFrom = "#fb8c00",
  backgroundGradientTo = "#ffa726",
  stroke = "#ffa726"
) => {
  return {
    backgroundColor: backgroundColor,
    backgroundGradientFrom: backgroundGradientFrom,
    backgroundGradientTo: backgroundGradientTo,
    decimalPlaces: 0, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: width(3),
    },
    propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: stroke,
    },
  };
};

export { chartConfig };
