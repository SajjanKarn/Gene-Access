import { useState } from "react";
import { Alert, ScrollView, StyleSheet, View } from "react-native";
import { width, height, totalSize } from "react-native-dimension";

import colors from "../../config/colors";
import AppInput from "../components/AppInput";

import AppText from "../components/AppText";
import Button from "../components/Button";

import { dnaToBinary } from "../../utils/dna";

export default function BinaryScreen() {
  const [dnaUserInput, setDnaUserInput] = useState("");
  const [binary, setBinary] = useState("");

  const handleFormSubmit = () => {
    if (!dnaUserInput) {
      Alert.alert("Bad Input", "Please enter DNA sequence");
      return;
    }

    // else convert dna sequence to binary
    const binary = dnaToBinary(dnaUserInput);
    setBinary(binary);
  };

  return (
    <ScrollView style={styles.container}>
      <AppText variant="Bold" style={styles.screenHeaderTitle}>
        Convert DNA Sequence to Binary
      </AppText>

      <View style={styles.formContanier}>
        <AppText variant="Bold" style={styles.formLabel}>
          DNA Sequence
        </AppText>
        <AppInput
          placeholder="Enter DNA Sequence"
          onChangeText={(text) => setDnaUserInput(text)}
          value={dnaUserInput}
          autoCapitalize="characters"
        />

        <Button
          backgroundColor={colors.black}
          textColor={colors.white}
          onPress={handleFormSubmit}
        >
          Convert
        </Button>
      </View>

      <View style={styles.convertResultContainer}>
        <AppText variant="Bold" style={styles.formLabel}>
          Binary
        </AppText>
        <AppInput placeholder="Binary" value={binary} />
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
    fontSize: totalSize(2.3),
    marginTop: height(1),
  },
  formContanier: {
    marginTop: height(3),
  },
  formLabel: {
    fontSize: totalSize(2),
    marginBottom: height(1),
  },
  formInput: {
    fontSize: totalSize(2),
  },

  convertResultContainer: {
    marginTop: height(3),
  },
});
