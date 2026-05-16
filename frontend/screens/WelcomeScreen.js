import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default function WelcomeScreen({ navigation }) {
  return (
    <LinearGradient
      colors={["#0f2027", "#1a2980", "#26d0ce", "#6a11cb"]}
      style={styles.container}
    >
      {/* Top Section */}
      <View style={styles.topContainer}>
        <View style={styles.iconBox}>
          <Ionicons name="shield-checkmark" size={45} color="#fff" />
        </View>

        <Text style={styles.title}>SecureAI KYC</Text>

        <Text style={styles.subtitle}>
          Secure Digital Identity {"\n"}
          Verification for Safe Banking {"\n"}
          Onboarding
        </Text>
      </View>

      {/* Bottom Card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Welcome Back</Text>

        <Text style={styles.cardText}>
          Secure Digital Identity Verification for Safe Banking Onboarding
        </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={styles.buttonWrapper}
        >
          <LinearGradient
            colors={["#4facfe", "#8e2de2"]}
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

container:{
flex:1,
justifyContent:"space-between",
paddingTop:120,
paddingBottom:60,
paddingHorizontal:25
},

topContainer:{
alignItems:"center"
},

iconBox:{
backgroundColor:"rgba(255,255,255,0.12)",
padding:22,
borderRadius:18,
marginBottom:20
},

title:{
fontSize:34,
fontWeight:"bold",
color:"#fff"
},

subtitle:{
color:"#dcdcdc",
fontSize:16,
textAlign:"center",
marginTop:10,
lineHeight:24
},

card:{
backgroundColor:"rgba(255,255,255,0.08)",
borderRadius:22,
padding:25,
borderWidth:1,
borderColor:"rgba(255,255,255,0.2)",
alignItems:"center"
},

cardTitle:{
fontSize:24,
fontWeight:"bold",
color:"#fff",
marginBottom:10
},

cardText:{
color:"#ccc",
textAlign:"center",
marginBottom:20
},

buttonWrapper:{
width:"80%",
borderRadius:12,
overflow:"hidden"
},

button:{
paddingVertical:16,
alignItems:"center",
borderRadius:12
},

buttonText:{
color:"#fff",
fontSize:18,
fontWeight:"bold"
}

});