import { Text, Pressable, StyleSheet } from "react-native";
import { Themes } from "../assets/Themes";

const SpotifyAuthButton = ({ authFn }) => {
  return (
    <Pressable style={styles.authButton} onPress={authFn}>
      <Text style={styles.authText}>Log in with Spotify</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
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

export default SpotifyAuthButton;
