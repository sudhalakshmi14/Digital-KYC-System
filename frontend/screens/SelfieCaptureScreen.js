import React, { useState } from "react";
import {
View,
Text,
StyleSheet,
TouchableOpacity
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { APP_GRADIENT } from "../constants/Colors";

export default function SelfieCaptureScreen({ navigation }) {

const [selfieCaptured,setSelfieCaptured] = useState(false)

return(

<LinearGradient colors={APP_GRADIENT} style={styles.container}>


<Text style={styles.step}>Step 2 of 3</Text>

{/* Camera Box */}

<View style={styles.cameraBox}>

{selfieCaptured ? (

<View style={styles.successBox}>

<Ionicons name="checkmark" size={60} color="#fff"/>

</View>

) : (

<View style={styles.placeholder}>

<View style={styles.oval}/>

<Ionicons name="camera-outline" size={50} color="#aaa"/>

</View>

)}

</View>

{/* AFTER SELFIE */}

{selfieCaptured ? (

<>

<Text style={styles.title}>Selfie Captured!</Text>

<Text style={styles.subtitle}>
Photo looks good. Continue or retake if needed.
</Text>

<View style={styles.row}>

<TouchableOpacity
style={styles.retakeBtn}
onPress={()=>setSelfieCaptured(false)}
>

<Ionicons name="refresh" size={18} color="#fff"/>
<Text style={styles.btnText}> Retake</Text>

</TouchableOpacity>

<TouchableOpacity
style={styles.continueBtn}
onPress={()=>navigation.navigate("Verification")}
>

<Ionicons name="checkmark" size={18} color="#fff"/>
<Text style={styles.btnText}> Continue</Text>

</TouchableOpacity>

</View>

</>

) : (

<TouchableOpacity
style={styles.captureBtn}
onPress={()=>setSelfieCaptured(true)}
>

<Ionicons name="camera" size={20} color="#fff"/>

<Text style={styles.captureText}>
Capture Selfie
</Text>

</TouchableOpacity>

)}

</LinearGradient>

)

}

const styles = StyleSheet.create({

container:{
flex:1,
padding:20
},

header:{
color:"#fff",
fontSize:22,
fontWeight:"bold",
marginBottom:10
},

step:{
color:"#ccc",
marginBottom:20
},

cameraBox:{
height:320,
borderRadius:20,
overflow:"hidden",
marginBottom:20
},

placeholder:{
flex:1,
justifyContent:"center",
alignItems:"center",
backgroundColor:"rgba(255,255,255,0.1)"
},

oval:{
position:"absolute",
width:220,
height:300,
borderRadius:150,
borderWidth:2,
borderStyle:"dashed",
borderColor:"#3b82f6"
},

successBox:{
flex:1,
borderRadius:20,
justifyContent:"center",
alignItems:"center",
backgroundColor:"rgba(34,197,94,0.9)"
},

title:{
color:"#fff",
fontSize:20,
fontWeight:"bold",
textAlign:"center"
},

subtitle:{
color:"#ccc",
textAlign:"center",
marginBottom:20
},

captureBtn:{
backgroundColor:"#2563eb",
padding:15,
borderRadius:12,
flexDirection:"row",
justifyContent:"center",
alignItems:"center"
},

captureText:{
color:"#fff",
marginLeft:10,
fontWeight:"bold"
},

row:{
flexDirection:"row",
justifyContent:"space-between"
},

retakeBtn:{
flex:1,
backgroundColor:"#374151",
padding:15,
borderRadius:10,
alignItems:"center",
flexDirection:"row",
justifyContent:"center",
marginRight:10
},

continueBtn:{
flex:1,
backgroundColor:"#2563eb",
padding:15,
borderRadius:10,
alignItems:"center",
flexDirection:"row",
justifyContent:"center"
},

btnText:{
color:"#fff",
fontWeight:"bold"
}

})