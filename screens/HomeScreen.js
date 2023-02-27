import useSpotifyAuth from "../utils/useSpotifyAuth";
import SongList from "../components/SongList";
import { Themes } from "../assets/Themes";
import { StyleSheet, SafeAreaView, Text, Pressable } from "react-native";
import SpotifyAuthButton from "../components/SpotifyAuthButton";
import { getMyTopTracks, getAlbumTracks } from "../utils/apiOptions";

import AuthScreen from "./AuthScreen";
import TrackScreen from "./TrackScreen";

export default function HomeScreen({ navigation }) {
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth();

  return (
    <SafeAreaView style={styles.container}>
      {token ? (
        <TrackScreen navigation={navigation} tracks={tracks} />
      ) : (
        <AuthScreen authFn={getSpotifyAuth} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
