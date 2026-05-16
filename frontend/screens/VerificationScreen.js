import React, { useEffect, useRef, useState } from "react";
import {
View,
Text,
StyleSheet,
Animated
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { APP_GRADIENT } from "../constants/Colors";

export default function VerificationScreen({ navigation }) {

const [step,setStep] = useState(0)

const rotateAnim = useRef(new Animated.Value(0)).current
const scanAnim = useRef(new Animated.Value(0)).current

useEffect(()=>{

startRotation()
startScanning()

// verification steps
setTimeout(()=>setStep(1),3000)
setTimeout(()=>setStep(2),8000)
setTimeout(()=>setStep(3),14000)
setTimeout(()=>setStep(4),20000)

// go to next page
setTimeout(()=>{
navigation.replace("RiskAssessment")
},23000)

},[])


// CONTINUOUS ROTATION FUNCTION
const startRotation = () => {

rotateAnim.setValue(0)

Animated.timing(rotateAnim,{
toValue:1,
duration:2000,
useNativeDriver:true
}).start(() => startRotation())   // restart immediately

}


// SCANNING LINE ANIMATION
const startScanning = () => {

Animated.loop(
Animated.sequence([
Animated.timing(scanAnim,{
toValue:1,
duration:1500,
useNativeDriver:true
}),
Animated.timing(scanAnim,{
toValue:0,
duration:1500,
useNativeDriver:true
})
])
).start()

}

const rotate = rotateAnim.interpolate({
inputRange:[0,1],
outputRange:["0deg","360deg"]
})

const scanTranslate = scanAnim.interpolate({
inputRange:[0,1],
outputRange:[0,120]
})

return(

<LinearGradient colors={APP_GRADIENT} style={styles.container}>



<Text style={styles.step}>Step 3 of 3</Text>

<View style={styles.iconBox}>

<Animated.View style={{transform:[{rotate}]}}>

<Ionicons name="document-text-outline" size={90} color="#3b82f6"/>

</Animated.View>

<Animated.View
style={[
styles.scanLine,
{transform:[{translateY:scanTranslate}]}
]}
/>

</View>

<View style={styles.card}>

{renderItem("Scanning Document",step,1)}
{renderItem("Extracting Details (OCR)",step,2)}
{renderItem("Validating Information",step,3)}
{renderItem("Face Matching",step,4)}

</View>

<View style={styles.note}>

<Text style={styles.noteText}>
Please wait while we verify your documents. This usually takes 20-30 seconds.
</Text>

</View>

</LinearGradient>

)

}

function renderItem(title,currentStep,itemStep){

let icon="ellipse-outline"
let color="#9ca3af"
let status="Pending"

if(currentStep === itemStep){
icon="reload-circle"
color="#3b82f6"
status="Scanning..."
}

if(currentStep > itemStep){
icon="checkmark-circle"
color="#22c55e"
status="Completed"
}

return(

<View style={styles.item}>

<Ionicons name={icon} size={26} color={color}/>

<View>

<Text style={styles.title}>{title}</Text>

<Text style={styles.sub}>{status}</Text>

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
color:"#fff"
},

step:{
color:"#ddd",
marginBottom:20
},

iconBox:{
alignItems:"center",
justifyContent:"center",
marginBottom:20,
backgroundColor:"rgba(255,255,255,0.1)",
padding:40,
borderRadius:20,
overflow:"hidden"
},

scanLine:{
position:"absolute",
width:"80%",
height:4,
backgroundColor:"#3b82f6",
borderRadius:4,
opacity:0.9
},

card:{
backgroundColor:"rgba(255,255,255,0.1)",
padding:20,
borderRadius:15
},

item:{
flexDirection:"row",
alignItems:"center",
marginBottom:20,
gap:10
},

title:{
color:"#fff",
fontWeight:"bold"
},

sub:{
color:"#ccc",
fontSize:12
},

note:{
marginTop:20,
backgroundColor:"rgba(255,255,255,0.1)",
padding:15,
borderRadius:10
},

noteText:{
color:"#fff",
textAlign:"center"
}

})