import React from "react";
import {
View,
Text,
StyleSheet,
TouchableOpacity,
ScrollView
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { APP_GRADIENT } from "../constants/Colors";

export default function UserDashboardScreen({ navigation }) {

const steps = [
{ id:1, title:"Account Created", status:"completed" },
{ id:2, title:"Document Upload", status:"completed" },
{ id:3, title:"Selfie Capture", status:"completed" },
{ id:4, title:"Risk Assessment", status:"processing" },
{ id:5, title:"Verification", status:"pending" }
];

const completedSteps = steps.filter(step => step.status === "completed").length;
const progress = (completedSteps / steps.length) * 100;

return(

<LinearGradient colors={APP_GRADIENT} style={{flex:1}}>

<ScrollView contentContainerStyle={styles.container}>

{/* HEADER */}

<View style={styles.header}>

<View>
<Text style={styles.greeting}>Good Morning 👋</Text>
<Text style={styles.username}>User</Text>
<Text style={styles.subtitle}>KYC Dashboard</Text>
</View>

<View style={styles.avatar}>
<Ionicons name="person" size={28} color="#fff"/>
</View>

</View>


{/* KYC PROGRESS */}

<View style={styles.progressCard}>

<Text style={styles.cardTitle}>KYC Progress</Text>

<View style={styles.progressBar}>
<View style={[styles.progressFill,{width:`${progress}%`}]} />
</View>

<Text style={styles.progressPercent}>
{Math.round(progress)}% Completed
</Text>

{steps.map(step => (

<View key={step.id} style={styles.stepRow}>

{step.status === "completed" &&
<Ionicons name="checkmark-circle" size={20} color="#22c55e"/>}

{step.status === "processing" &&
<Ionicons name="time" size={20} color="#f59e0b"/>}

{step.status === "pending" &&
<Ionicons name="ellipse-outline" size={20} color="#ccc"/>}

<Text style={styles.stepText}>{step.title}</Text>

</View>

))}

</View>


{/* STATISTICS */}

<View style={styles.statsRow}>

<View style={styles.statCard}>
<Ionicons name="document-text" size={22} color="#22c55e"/>
<Text style={styles.statNumber}>2</Text>
<Text style={styles.statLabel}>Documents</Text>
</View>

<View style={styles.statCard}>
<Ionicons name="analytics" size={22} color="#4facfe"/>
<Text style={styles.statNumber}>Pending</Text>
<Text style={styles.statLabel}>Status</Text>
</View>

<View style={styles.statCard}>
<Ionicons name="shield-checkmark" size={22} color="#f59e0b"/>
<Text style={styles.statNumber}>Low</Text>
<Text style={styles.statLabel}>Risk</Text>
</View>

</View>


{/* QUICK ACTIONS */}

<Text style={styles.sectionTitle}>Quick Actions</Text>

<View style={styles.actionRow}>

<TouchableOpacity
style={styles.actionCard}
onPress={()=>navigation.navigate("KYCVerification")}
>

<Ionicons name="document-text-outline" size={26} color="#fff"/>
<Text style={styles.actionText}>Upload</Text>

</TouchableOpacity>

<TouchableOpacity
style={styles.actionCard}
onPress={()=>navigation.navigate("SelfieCapture")}
>

<Ionicons name="camera-outline" size={26} color="#fff"/>
<Text style={styles.actionText}>Selfie</Text>

</TouchableOpacity>

</View>


<View style={styles.actionRow}>

<TouchableOpacity
style={styles.actionCard}
onPress={()=>navigation.navigate("KYCStatus")}
>

<Ionicons name="analytics-outline" size={26} color="#fff"/>
<Text style={styles.actionText}>Status</Text>

</TouchableOpacity>

<TouchableOpacity
style={styles.actionCard}
onPress={()=>navigation.navigate("Profile")}
>

<Ionicons name="person-outline" size={26} color="#fff"/>
<Text style={styles.actionText}>Profile</Text>

</TouchableOpacity>

</View>


{/* RECENT ACTIVITY */}

<Text style={styles.sectionTitle}>Recent Activity</Text>

<View style={styles.activityCard}>

<View style={styles.activityRow}>
<Ionicons name="checkmark-circle" size={18} color="#22c55e"/>
<Text style={styles.activityText}>Aadhaar Uploaded</Text>
</View>

<View style={styles.activityRow}>
<Ionicons name="checkmark-circle" size={18} color="#22c55e"/>
<Text style={styles.activityText}>Selfie Captured</Text>
</View>

<View style={styles.activityRow}>
<Ionicons name="time" size={18} color="#f59e0b"/>
<Text style={styles.activityText}>Verification in Progress</Text>
</View>

</View>

</ScrollView>

</LinearGradient>

)

}


const styles = StyleSheet.create({

container:{
padding:20
},

header:{
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center",
marginBottom:20
},

greeting:{
color:"#ccc",
fontSize:14
},

username:{
fontSize:22,
fontWeight:"bold",
color:"#fff"
},

subtitle:{
color:"#ccc"
},

avatar:{
backgroundColor:"rgba(255,255,255,0.15)",
padding:12,
borderRadius:30
},

progressCard:{
backgroundColor:"rgba(255,255,255,0.1)",
padding:18,
borderRadius:12,
marginBottom:20
},

cardTitle:{
color:"#fff",
fontWeight:"bold",
marginBottom:10
},

progressBar:{
height:8,
backgroundColor:"rgba(255,255,255,0.2)",
borderRadius:10,
overflow:"hidden"
},

progressFill:{
height:"100%",
backgroundColor:"#22c55e"
},

progressPercent:{
color:"#ccc",
marginTop:6,
marginBottom:10
},

stepRow:{
flexDirection:"row",
alignItems:"center",
marginBottom:6
},

stepText:{
color:"#fff",
marginLeft:8
},

statsRow:{
flexDirection:"row",
justifyContent:"space-between",
marginBottom:20
},

statCard:{
backgroundColor:"rgba(255,255,255,0.1)",
width:"30%",
padding:15,
borderRadius:10,
alignItems:"center"
},

statNumber:{
color:"#fff",
fontSize:18,
fontWeight:"bold",
marginTop:5
},

statLabel:{
color:"#ccc",
fontSize:12
},

sectionTitle:{
color:"#fff",
fontSize:18,
fontWeight:"bold",
marginBottom:10
},

actionRow:{
flexDirection:"row",
justifyContent:"space-between",
marginBottom:15
},

actionCard:{
backgroundColor:"rgba(255,255,255,0.12)",
width:"48%",
padding:20,
borderRadius:12,
alignItems:"center"
},

actionText:{
color:"#fff",
marginTop:8,
fontWeight:"600"
},

activityCard:{
backgroundColor:"rgba(255,255,255,0.1)",
padding:15,
borderRadius:12
},

activityRow:{
flexDirection:"row",
alignItems:"center",
marginBottom:8
},

activityText:{
color:"#fff",
marginLeft:8
}

});