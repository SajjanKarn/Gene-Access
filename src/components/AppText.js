import { Text } from "react-native";

export default function AppText({ variant = "Regular", children, ...props }) {
  return (
    <Text
      style={{
        fontFamily: `Poppins-${variant}`,
        ...props.style,
      }}
    >
      {children}
    </Text>
  );
}
