import { Text, StyleSheet, View, Image, Dimensions } from "react-native";
import { Themes } from "../assets/Themes";
import { millisToMinutesAndSeconds } from "../utils";

const { width: windowWidth } = Dimensions.get("window");

const Song = ({
  imageUrl,
  songTitle,
  albumName,
  duration,
  index,
  songArtists,
}) => {
  return (
    <View style={styles.songItemContainer}>
      <Text style={styles.songIndex}>{index}</Text>
      <Image style={styles.albumImage} source={{ uri: imageUrl }} />
      <View style={styles.songNameContainer}>
        <Text numberOfLines={1} style={styles.songTitle}>
          {songTitle}
        </Text>
        <Text numberOfLines={1} style={styles.songArtist}>
          {songArtists[0].name}
        </Text>
      </View>
      <Text numberOfLines={1} style={styles.albumName}>
        {albumName}
      </Text>
      <Text style={styles.duration}>{millisToMinutesAndSeconds(duration)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  songItemContainer: {
    flexDirection: "row",
    width: windowWidth,
    marginBottom: 6,
    justifyContent: "space-between",
    maxWidth: windowWidth * 0.95,
  },
  songNameContainer: {
    flexDirection: "column",
    justifyContent: "center",
    width: windowWidth * 0.28,
    overflow: "hidden",
  },
  songIndex: {
    alignSelf: "center",
    color: Themes.colors.gray,
  },
  songTitle: {
    numberOfLines: 1,
    color: Themes.colors.white,
  },
  songArtist: {
    color: Themes.colors.gray,
  },
  albumImage: {
    width: 60,
    height: 60,
  },
  albumName: {
    width: windowWidth * 0.25,
    alignSelf: "center",
    color: Themes.colors.white,
  },
  duration: {
    alignSelf: "center",
    color: Themes.colors.white,
  },
});

export default Song;
