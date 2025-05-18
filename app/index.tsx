import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
export default function Index() {
  return (
    <View style={styles.container}>
      <FontAwesome  
        name="spotify"
        size={60}
        color="white"
        style={{
          marginTop: 200,
        }}
      />

      <Text style={styles.title}>Log in to Spotify</Text>

      <TouchableOpacity style={styles.mailButton}>
        <FontAwesome5 name="envelope" size={25} color="black" solid={false} />
        <Text
          style={{
            fontWeight: "bold",
            color: "black",
            fontSize: 15,
            marginLeft: 35,
          }}
        >
          Continue with email
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttons}>
        <FontAwesome5 name="mobile" size={25} color="white" solid={false} />
        <Text
          style={{
            fontWeight: "bold",
            color: "white",
            fontSize: 15,
            marginLeft: 15,
          }}
        >
          Continue with phone number
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttons}>
        <FontAwesome5 name="google" size={25} color="white" solid={false} />
        <Text
          style={{
            fontWeight: "bold",
            color: "white",
            fontSize: 15,
            marginLeft: 35,
          }}
        >
          Continue with Google
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttons}>
        <FontAwesome5 name="facebook" size={25} color="white" solid={false} />
        <Text
          style={{
            fontWeight: "bold",
            color: "white",
            fontSize: 15,
            marginLeft: 28,
          }}
        >
          Continue with Facebook
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttons}>
        <FontAwesome5 name="apple" size={25} color="white" solid={false} />
        <Text
          style={{
            fontWeight: "bold",
            color: "white",
            fontSize: 15,
            marginLeft: 35,
          }}
        >
          Continue with Apple
        </Text>
      </TouchableOpacity>

      <Text
        style={{
          fontWeight: 400,
          color: "white",
          fontSize: 15,
          marginTop: 30,
        }}
      >
        Don't have an account?
      </Text>

      <TouchableOpacity
        style={{
          marginTop: 12,
        }}
      >
        <Text style={{ color: "white", fontSize: 14, fontWeight: "bold" }}>
          Sign up
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(18, 18, 18)",
  },

  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 15,
  },
  mailButton: {
    flexDirection: "row",
    backgroundColor: "rgb(59, 228, 119)",
    width: "80%",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 50,
    alignItems: "center",
    gap: 10,
    marginTop: 20,
  },
  buttons: {
    flexDirection: "row",
    backgroundColor: "rgb(18, 18, 18)",
    width: "80%",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    alignItems: "center",
    gap: 10,
    marginTop: 20,
    borderColor: "white",
    borderWidth: 1,
  },
});
 