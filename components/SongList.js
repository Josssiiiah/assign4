import { FlatList, Text, StyleSheet, View, Dimensions } from "react-native";
import { Themes } from "../assets/Themes";
import Song from "./Song";

const SongList = ({ tracks }) => {
  return (
    <FlatList
      data={tracks}
      renderItem={({ item, index }) => {
        return (
          <Song
            index={index}
            imageUrl={item.imageUrl}
            songTitle={item.songTitle}
            albumName={item.albumName}
            duration={item.duration}
            songArtists={item.songArtists}
          />
        );
      }}
      keyExtractor={(item, index) => {
        return item.id;
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    paddingTop: 20,
    flex: 1,
  },
  authText: {
    color: "white",
  },
  authButton: {
    backgroundColor: Themes.colors.spotify,
    borderRadius: 999999,
    padding: 14,
  },
});

export default SongList;
