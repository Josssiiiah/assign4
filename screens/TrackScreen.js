import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from "react-native";
import SongList from "../components/SongList";
import { Ionicons } from "@expo/vector-icons";

import { Images } from "../assets/Themes";

const { width: windowWidth } = Dimensions.get("window");

const TrackScreen = ({ navigation, tracks }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={Images.spotify} style={styles.headerLogo} />
        <View style={{ width: 6 }} />
        <Text style={styles.headerText}>My Top Tracks</Text>
      </View>
      <SongList navigation={navigation} tracks={tracks} />
    </SafeAreaView>
  );
};

export default TrackScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 0,
    height: 40,
  },
  headerText: {
    color: "white",
    textAlign: "center",
    fontSize: 22,
    fontStyle: "bold",
  },
  headerLogo: {
    width: 20,
    height: 20,
  },
  listContainer: {
    marginTop: 15,
  },
});
