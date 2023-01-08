import {
  Image,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { width, height, totalSize } from "react-native-dimension";
import { AntDesign } from "@expo/vector-icons";

import colors from "../../config/colors";
import AppText from "../components/AppText";
import Button from "../components/Button";

import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

export default function RegisterScreen() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <AppText variant="SemiBold" style={styles.headerText}>
        Register Account
      </AppText>

      {/* Form  */}
      <View style={styles.formContainer}>
        {/* Image Picker  */}
        <View style={styles.imagePickerContainer}>
          {!image ? (
            <>
              <TouchableOpacity
                style={styles.imagePicker}
                onPress={pickImage}
                activeOpacity={0.5}
              >
                <AntDesign name="camera" size={28} />
              </TouchableOpacity>

              <AppText variant="Light" style={styles.imagePickerText}>
                Choose Profile Picture
              </AppText>
            </>
          ) : (
            <TouchableOpacity onPress={pickImage} activeOpacity={0.5}>
              <Image source={{ uri: image }} style={styles.profileImage} />
            </TouchableOpacity>
          )}
        </View>

        <TextInput placeholder="John Doe" style={styles.input} />
        <TextInput placeholder="Email" style={styles.input} />
        <TextInput placeholder="Password" style={styles.input} />
        <TextInput placeholder="Confirm Password" style={styles.input} />

        <Button
          font="Poppins-SemiBold"
          activeOpacity={0.8}
          backgroundColor={colors.black}
          textColor={colors.white}
        >
          Register
        </Button>

        <AppText variant="Light" style={styles.signIn}>
          Already Have an Account? Login
        </AppText>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: width(5),
  },
  headerText: {
    fontSize: totalSize(3),
    marginTop: height(3),
  },
  formContainer: {
    marginTop: height(5),
  },
  imagePicker: {
    backgroundColor: colors.lightGray,
    width: totalSize(13),
    height: totalSize(13),
    borderRadius: totalSize(10),
    marginBottom: height(1),
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  imagePickerContainer: {
    marginBottom: height(2),
  },
  imagePickerText: {
    textAlign: "center",
  },
  profileImage: {
    width: totalSize(13),
    height: totalSize(13),
    borderRadius: totalSize(10),
    marginBottom: height(1),
    alignSelf: "center",
  },
  input: {
    backgroundColor: colors.lightGray,
    paddingHorizontal: width(5),
    paddingVertical: height(1.8),
    borderRadius: totalSize(10),
    marginBottom: height(2),
  },
  forgotPassword: {
    color: colors.black,
    fontSize: totalSize(1.5),
    marginBottom: height(2),
    marginLeft: width(2),
    marginVertical: height(1),
  },
  signIn: {
    color: colors.black,
    fontSize: totalSize(1.5),
    marginBottom: height(2),
    marginLeft: width(2),
    marginVertical: height(1),
    textAlign: "center",
  },
});
