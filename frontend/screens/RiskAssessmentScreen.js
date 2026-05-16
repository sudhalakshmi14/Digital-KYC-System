import React from "react";
import {
View,
Text,
StyleSheet,
ScrollView,
TouchableOpacity
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { APP_GRADIENT } from "../constants/Colors";

export default function RiskAssessmentScreen({ navigation }){

const today = new Date().toLocaleDateString("en-US", {
year: "numeric",
month: "long",
day: "numeric"
});

return(

<LinearGradient colors={APP_GRADIENT} style={styles.container}>

<ScrollView>



<View style={styles.center}>

<View style={styles.iconCircle}>
<Ionicons name="checkmark" size={40} color="#16a34a"/>
</View>

<Text style={styles.title}>Verification Complete</Text>

<Text style={styles.subtitle}>
Your identity has been successfully verified
</Text>

</View>

{/* Risk Card */}

<View style={styles.riskCard}>

<View style={styles.riskHeader}>

<View>
<Text style={styles.riskLabel}>Risk Level</Text>
<Text style={styles.riskLow}>Low</Text>
</View>

<View style={styles.percentBadge}>
<Text style={styles.percentText}>15%</Text>
</View>

</View>

<View style={styles.progressBar}>
<View style={styles.progressFill}/>
</View>

<Text style={styles.riskNote}>
Minimal risk detected - Safe to proceed
</Text>

</View>


{/* Verification Details */}

<Text style={styles.sectionTitle}>Verification Details</Text>

<View style={styles.card}>

<View style={styles.row}>

<Ionicons name="person-outline" size={26} color="#3b82f6"/>

<View style={{flex:1}}>

<Text style={styles.cardTitle}>Face Match</Text>

<Text style={styles.cardSub}>Selfie vs Document photo</Text>

</View>

<Text style={styles.percentMatch}>98%</Text>

</View>

<View style={styles.matchBar}>
<View style={styles.matchFill}/>
</View>

</View>


<View style={styles.card}>

<View style={styles.row}>

<Ionicons name="document-text-outline" size={26} color="#9333ea"/>

<View style={{flex:1}}>

<Text style={styles.cardTitle}>Document Authenticity</Text>

<Text style={styles.cardSub}>AI-based validation</Text>

</View>

<View style={styles.verifiedBadge}>
<Text style={styles.verifiedText}>Verified</Text>
</View>

</View>

</View>


<View style={styles.card}>

<View style={styles.row}>

<Ionicons name="document-outline" size={26} color="#f59e0b"/>

<View style={{flex:1}}>

<Text style={styles.cardTitle}>OCR Data Extraction</Text>

<Text style={styles.cardSub}>Information extracted</Text>

</View>

<View style={styles.completeBadge}>
<Text style={styles.completeText}>Complete</Text>
</View>

</View>

</View>


{/* Extracted Information */}

<View style={styles.infoCard}>

<Text style={styles.sectionTitle}>Extracted Information</Text>

<View style={styles.infoRow}>
<Text style={styles.infoLabel}>Full Name:</Text>
<Text style={styles.bold}>John Doe</Text>
</View>

<View style={styles.infoRow}>
<Text style={styles.infoLabel}>Document Number:</Text>
<Text style={styles.bold}>XXXX XXXX 1234</Text>
</View>

<View style={styles.infoRow}>
<Text style={styles.infoLabel}>Date of Birth:</Text>
<Text style={styles.bold}>01/01/1990</Text>
</View>

<View style={styles.infoRow}>
<Text style={styles.infoLabel}>Verification Date:</Text>
<Text style={styles.bold}>{today}</Text>
</View>

</View>


{/* Button */}

<TouchableOpacity
style={styles.button}
onPress={()=>navigation.navigate("KYCStatus")}
>

<Text style={styles.buttonText}>
View KYC Status →
</Text>

</TouchableOpacity>

</ScrollView>

</LinearGradient>

)

}


const styles = StyleSheet.create({

container:{
flex:1,
padding:20
},

header:{
fontSize:22,
fontWeight:"bold",
color:"#fff",
marginBottom:20
},

center:{
alignItems:"center",
marginBottom:20
},

iconCircle:{
width:80,
height:80,
borderRadius:40,
backgroundColor:"#dcfce7",
justifyContent:"center",
alignItems:"center",
marginBottom:10
},

title:{
fontSize:22,
fontWeight:"bold",
color:"#fff"
},

subtitle:{
color:"#ddd",
marginBottom:20
},

riskCard:{
backgroundColor:"rgba(255,255,255,0.15)",
padding:20,
borderRadius:15,
marginBottom:20
},

riskHeader:{
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center"
},

riskLabel:{
color:"#ddd"
},

riskLow:{
fontSize:22,
color:"#22c55e",
fontWeight:"bold"
},

percentBadge:{
backgroundColor:"#16a34a",
paddingHorizontal:12,
paddingVertical:5,
borderRadius:20
},

percentText:{
color:"#fff"
},

progressBar:{
height:8,
backgroundColor:"#a7f3d0",
borderRadius:10,
marginVertical:10
},

progressFill:{
width:"15%",
height:8,
backgroundColor:"#22c55e",
borderRadius:10
},

riskNote:{
color:"#bbf7d0",
fontSize:12
},

sectionTitle:{
fontSize:18,
fontWeight:"bold",
color:"#fff",
marginBottom:10
},

card:{
backgroundColor:"rgba(255,255,255,0.15)",
padding:15,
borderRadius:12,
marginBottom:15
},

row:{
flexDirection:"row",
alignItems:"center",
gap:10
},

cardTitle:{
fontWeight:"bold",
color:"#fff"
},

cardSub:{
color:"#ddd",
fontSize:12
},

percentMatch:{
fontSize:18,
color:"#3b82f6",
fontWeight:"bold"
},

matchBar:{
height:6,
backgroundColor:"#e5e7eb",
borderRadius:10,
marginTop:10
},

matchFill:{
width:"98%",
height:6,
backgroundColor:"#3b82f6",
borderRadius:10
},

verifiedBadge:{
backgroundColor:"#bbf7d0",
paddingHorizontal:10,
paddingVertical:4,
borderRadius:10
},

verifiedText:{
color:"#16a34a"
},

completeBadge:{
backgroundColor:"#bbf7d0",
paddingHorizontal:10,
paddingVertical:4,
borderRadius:10
},

completeText:{
color:"#16a34a"
},

infoCard:{
backgroundColor:"rgba(255,255,255,0.15)",
padding:15,
borderRadius:12,
marginBottom:20
},

infoRow:{
flexDirection:"row",
justifyContent:"space-between",
marginTop:8
},

infoLabel:{
color:"#eee"
},

bold:{
fontWeight:"bold",
color:"#fff"
},

button:{
backgroundColor:"#2563eb",
padding:16,
borderRadius:12,
alignItems:"center",
marginBottom:30
},

buttonText:{
color:"#fff",
fontWeight:"bold",
fontSize:16
}

});