import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { APP_GRADIENT } from "../constants/Colors";

export default function SecurityPrivacyScreen({ navigation }) {

const [consent, setConsent] = useState(false);
const [privacy, setPrivacy] = useState(false);
const [terms, setTerms] = useState(false);

const handleContinue = () => {

if (!consent || !privacy || !terms) {
Alert.alert("Incomplete", "Please accept all the policies to continue.");
return;
}

// Navigate to success screen
navigation.navigate("Success");

};

return (

<LinearGradient colors={APP_GRADIENT} style={styles.container}>


<View style={styles.iconBox}>
<Ionicons name="shield-checkmark" size={50} color="#fff" />
</View>

<Text style={styles.title}>Your Data is Secure</Text>

<Text style={styles.subtitle}>
We use industry-leading encryption to protect your information
</Text>

<View style={styles.card}>
<Text style={styles.cardTitle}>End-to-End Encryption</Text>
<Text style={styles.cardText}>
All your documents are encrypted during transmission and storage
</Text>
</View>

<View style={styles.card}>
<Text style={styles.cardTitle}>Privacy Protected</Text>
<Text style={styles.cardText}>
Your data is never shared with third parties without consent
</Text>
</View>

<View style={styles.card}>
<Text style={styles.cardTitle}>Compliance</Text>
<Text style={styles.cardText}>
We comply with GDPR, KYC regulations, and data protection laws
</Text>
</View>

<View style={styles.checkboxRow}>
<TouchableOpacity onPress={() => setConsent(!consent)}>
<Ionicons
name={consent ? "checkbox" : "square-outline"}
size={26}
color="#4facfe"
/>
</TouchableOpacity>
<Text style={styles.checkboxText}>Data Processing Consent</Text>
</View>

<View style={styles.checkboxRow}>
<TouchableOpacity onPress={() => setPrivacy(!privacy)}>
<Ionicons
name={privacy ? "checkbox" : "square-outline"}
size={26}
color="#4facfe"
/>
</TouchableOpacity>
<Text style={styles.checkboxText}>Privacy Policy</Text>
</View>

<View style={styles.checkboxRow}>
<TouchableOpacity onPress={() => setTerms(!terms)}>
<Ionicons
name={terms ? "checkbox" : "square-outline"}
size={26}
color="#4facfe"
/>
</TouchableOpacity>
<Text style={styles.checkboxText}>Terms & Conditions</Text>
</View>

<TouchableOpacity
style={styles.button}
onPress={handleContinue}
>
<Text style={styles.buttonText}>
Accept & Continue →
</Text>
</TouchableOpacity>

</LinearGradient>

);
}

const styles = StyleSheet.create({

container:{
flex:1,
padding:20
},

header:{
fontSize:20,
fontWeight:"600",
marginBottom:20,
color:"#fff"
},

iconBox:{
alignItems:"center",
marginBottom:10
},

title:{
fontSize:22,
fontWeight:"bold",
textAlign:"center",
color:"#fff"
},

subtitle:{
textAlign:"center",
color:"#ddd",
marginBottom:20
},

card:{
backgroundColor:"rgba(255,255,255,0.1)",
padding:15,
borderRadius:12,
marginBottom:12
},

cardTitle:{
fontWeight:"bold",
marginBottom:4,
color:"#fff"
},

cardText:{
color:"#ddd"
},

checkboxRow:{
flexDirection:"row",
alignItems:"center",
marginTop:15
},

checkboxText:{
marginLeft:10,
fontSize:15,
color:"#fff"
},

button:{
backgroundColor:"#2563eb",
padding:16,
borderRadius:12,
alignItems:"center",
marginTop:25
},

buttonText:{
color:"#fff",
fontWeight:"bold",
fontSize:16
}

});