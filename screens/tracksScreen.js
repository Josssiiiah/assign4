import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import SongList from "../components/SongList";
import { Images } from "../assets/Themes";

const tracksScreen = ({ tracks }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={Images.spotify} style={styles.Logo} />
        <View style={{ width: 6 }} />
        <Text style={styles.headerText}>My Top Tracks</Text>
      </View>
      <View style={styles.listContainer}>
        <SongList tracks={tracks} />
      </View>
    </SafeAreaView>
  );
};

export default tracksScreen;

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
  Logo: {
    width: 20,
    height: 20,
  },
  listContainer: {
    marginTop: 15,
  },
});
