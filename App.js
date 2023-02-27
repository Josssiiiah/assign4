import { StyleSheet, SafeAreaView, Text, Pressable } from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";
import SpotifyAuthButton from "./components/SpotifyAuthButton";
import SongList from "./components/SongList";
import TracksScreen from "./screens/tracksScreen";
import AuthScreen from "./screens/authScreen";

export default function App() {
  // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth();

  return (
    <SafeAreaView style={styles.container}>
      {token ? (
        <TracksScreen tracks={tracks} />
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
