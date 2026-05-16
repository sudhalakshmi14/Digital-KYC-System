import React from "react";
import {
View,
Text,
StyleSheet,
ScrollView
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { APP_GRADIENT } from "../constants/Colors";

export default function KYCStatusScreen(){

const today = new Date().toLocaleDateString("en-US",{
year:"numeric",
month:"long",
day:"numeric"
})

return(

<LinearGradient colors={APP_GRADIENT} style={styles.container}>

<ScrollView>



{/* KYC Approved Card */}

<View style={styles.kycCard}>

<View style={styles.row}>

<View style={styles.iconCircle}>
<Ionicons name="checkmark" size={28} color="#16a34a"/>
</View>

<View style={{flex:1}}>

<Text style={styles.title}>KYC Approved</Text>

<Text style={styles.subtitle}>
Your identity has been verified successfully
</Text>

</View>

<View style={styles.badge}>
<Text style={styles.badgeText}>APPROVED</Text>
</View>

</View>

<View style={styles.divider}/>

<Text style={styles.info}>Application ID: KYC-2026-00123</Text>

<Text style={styles.info}>Approved Date: {today}</Text>

</View>

{/* Verification Steps */}

<Text style={styles.sectionTitle}>Verification Steps</Text>


{renderItem("Personal Information","Account registration completed","person-circle-outline")}

{renderItem("Document Upload","Identity document verified","document-text-outline")}

{renderItem("Selfie Verification","Live photo captured and matched","camera-outline")}

{renderItem("Risk Assessment","Security checks passed","shield-checkmark-outline")}

</ScrollView>

</LinearGradient>

)

}


function renderItem(title,subtitle,icon){

return(

<View style={styles.stepCard}>

<View style={styles.stepRow}>

<View style={styles.stepIcon}>
<Ionicons name={icon} size={24} color="#16a34a"/>
</View>

<View style={{flex:1}}>

<Text style={styles.stepTitle}>{title}</Text>

<Text style={styles.stepSub}>{subtitle}</Text>

</View>

<Ionicons name="checkmark-circle" size={24} color="#16a34a"/>

</View>

</View>

)

}


const styles = StyleSheet.create({

container:{
flex:1,
padding:20
},

header:{
fontSize:24,
fontWeight:"bold",
color:"#fff",
marginBottom:20
},

kycCard:{
backgroundColor:"rgba(255,255,255,0.15)",
padding:20,
borderRadius:16,
marginBottom:25
},

row:{
flexDirection:"row",
alignItems:"center"
},

iconCircle:{
width:50,
height:50,
borderRadius:25,
backgroundColor:"#dcfce7",
justifyContent:"center",
alignItems:"center",
marginRight:12
},

title:{
fontSize:18,
fontWeight:"bold",
color:"#fff"
},

subtitle:{
color:"#e5e7eb",
fontSize:13
},

badge:{
backgroundColor:"#16a34a",
paddingHorizontal:12,
paddingVertical:4,
borderRadius:20
},

badgeText:{
color:"#fff",
fontWeight:"bold",
fontSize:12
},

divider:{
height:1,
backgroundColor:"#cbd5e1",
marginVertical:15
},

info:{
color:"#f1f5f9",
fontSize:14,
marginTop:2
},

sectionTitle:{
color:"#fff",
fontSize:18,
fontWeight:"bold",
marginBottom:10
},

stepCard:{
backgroundColor:"rgba(255,255,255,0.15)",
padding:15,
borderRadius:12,
marginBottom:15
},

stepRow:{
flexDirection:"row",
alignItems:"center"
},

stepIcon:{
width:40,
height:40,
borderRadius:10,
backgroundColor:"#dcfce7",
justifyContent:"center",
alignItems:"center",
marginRight:12
},

stepTitle:{
color:"#fff",
fontWeight:"bold"
},

stepSub:{
color:"#e5e7eb",
fontSize:12
}

})