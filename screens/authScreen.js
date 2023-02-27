import { View, Text } from "react-native";
import React from "react";
import SpotifyAuthButton from "../components/SpotifyAuthButton";

const authScreen = ({ authFn }) => {
  return (
    <View>
      <SpotifyAuthButton authFn={authFn} />
    </View>
  );
};

export default authScreen;
