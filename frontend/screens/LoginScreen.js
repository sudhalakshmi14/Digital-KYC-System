import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

export default function WelcomeScreen({ navigation }) {

  return (
    <LinearGradient
      colors={["#0F1C5C", "#273B9A", "#7C2AE8"]}
      style={styles.container}
    >

      {/* Top Section */}
      <View style={styles.topContainer}>
        <View style={styles.iconWrapper}>
          <MaterialCommunityIcons
            name="shield-check"
            size={60}
            color="white"
          />
        </View>

        <Text style={styles.title}>SecureAI KYC</Text>

        <Text style={styles.subtitle}>
          Secure Digital Identity Verification{"\n"}
          for Safe Banking Onboarding
        </Text>
      </View>


      {/* Bottom Card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Welcome Back</Text>

        <Text style={styles.cardText}>
          Secure Digital Identity Verification for Safe Banking Onboarding
        </Text>

        {/* Get Started Button */}
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
        >
          <LinearGradient
            colors={["#3B82F6", "#D946EF"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </LinearGradient>
        </TouchableOpacity>

      </View>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingTop: 120,
    paddingBottom: 60,
    paddingHorizontal: 25
  },

  topContainer: {
    alignItems: "center"
  },

  iconWrapper: {
    backgroundColor: "rgba(255,255,255,0.15)",
    padding: 20,
    borderRadius: 30,
    marginBottom: 20
  },

  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10
  },

  subtitle: {
    fontSize: 16,
    color: "#E0E7FF",
    textAlign: "center",
    lineHeight: 24
  },

  card: {
    backgroundColor: "rgba(255,255,255,0.12)",
    borderRadius: 25,
    padding: 30,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.2)"
  },

  cardTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10
  },

  cardText: {
    color: "#E5E7EB",
    textAlign: "center",
    marginBottom: 25,
    lineHeight: 20
  },

  button: {
    width: width * 0.6,
    paddingVertical: 15,
    borderRadius: 20,
    alignItems: "center"
  },

  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold"
  }

});