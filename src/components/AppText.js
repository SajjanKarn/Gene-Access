import { Text } from "react-native";

export default function AppText({
  variant = "Regular",
  children,
  onPress,
  ...props
}) {
  return (
    <Text
      style={{
        fontFamily: `Poppins-${variant}`,
        ...props.style,
      }}
      onPress={onPress}
    >
      {children}
    </Text>
  );
}
