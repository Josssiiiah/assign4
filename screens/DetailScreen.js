import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";

const DetailScreen = ({ route }) => {
  const params = route.params;
  return <WebView source={{ uri: params.url }} />;
};

export default DetailScreen;

const styles = StyleSheet.create({});
