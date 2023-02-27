import { FlatList, StyleSheet } from "react-native";
import React from "react";
import { Themes } from "../assets/Themes";
import Song from "./Song";

const SongList = ({ navigation, tracks }) => {
  return (
    <FlatList
      data={tracks}
      renderItem={({ item, index }) => {
        return (
          <Song
            navigation={navigation}
            imageUrl={item.imageUrl}
            songTitle={item.songTitle}
            albumName={item.albumName}
            duration={item.duration}
            songArtists={item.songArtists}
            previewUrl={item.previewUrl}
            externalUrl={item.externalUrl}
          />
        );
      }}
      keyExtractor={(item) => item.id}
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
