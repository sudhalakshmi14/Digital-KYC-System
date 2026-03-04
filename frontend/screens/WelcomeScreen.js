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

export default function WelcomeScreen({ navigation }) {   // add navigation

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

      {/* Card Section */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Welcome Back</Text>

        <Text style={styles.cardText}>
          Secure Digital Identity Verification for Safe Banking Onboarding
        </Text>

        {/* Button */}
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