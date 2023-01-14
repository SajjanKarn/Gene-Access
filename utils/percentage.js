import colors from "../config/colors";

// return colors based on percentage
const getPercentageColor = (percentage) => {
  if (percentage > 50) {
    return colors.red;
  } else if (percentage > 30) {
    return colors.lightRed2;
  } else if (percentage > 20) {
    return colors.lightRed2;
  } else if (percentage > 10 && percentage < 20) {
    return colors.lightRed;
  } else if (percentage < 10) {
    return colors.green;
  } else {
    return colors.lightGray;
  }
};

export { getPercentageColor };
