import React, { useState } from "react";
import {
View,
Text,
TextInput,
TouchableOpacity,
StyleSheet,
Alert
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { APP_GRADIENT } from "../constants/Colors";

export default function OTPScreen({ navigation, route }) {

const correctOTP = route?.params?.otp;

const [otp,setOtp] = useState(["","","",""]);

function handleChange(value,index){

const newOtp = [...otp];
newOtp[index] = value;
setOtp(newOtp);

}

function verifyOTP(){

const entered = otp.join("");

if(entered === String(correctOTP)){

Alert.alert("Success","OTP Verified Successfully");

navigation.navigate("KYCVerification",{role:"User"});

}else{

Alert.alert("Invalid OTP","Please enter correct OTP");

}

}

return(

<LinearGradient colors={APP_GRADIENT} style={styles.container}>

<View style={styles.card}>

<Text style={styles.title}>Enter OTP</Text>

<Text style={styles.subtitle}>
Enter the 4-digit code sent to your email
</Text>

<View style={styles.otpRow}>

{otp.map((digit,index)=>(

<TextInput
key={index}
style={styles.otpBox}
keyboardType="numeric"
maxLength={1}
value={digit}
onChangeText={(text)=>handleChange(text,index)}
/>

))}

</View>

<TouchableOpacity style={styles.button} onPress={verifyOTP}>
<Text style={styles.buttonText}>Verify OTP</Text>
</TouchableOpacity>

</View>

</LinearGradient>

)

}

const styles = StyleSheet.create({

container:{
flex:1,
justifyContent:"center",
alignItems:"center",
padding:20
},

card:{
width:"100%",
backgroundColor:"rgba(255,255,255,0.1)",
padding:25,
borderRadius:20,
borderWidth:1,
borderColor:"rgba(255,255,255,0.2)",
alignItems:"center"
},

title:{
fontSize:28,
fontWeight:"bold",
color:"#fff",
marginBottom:5
},

subtitle:{
color:"#ccc",
textAlign:"center",
marginBottom:25
},

otpRow:{
flexDirection:"row",
justifyContent:"space-between",
width:"90%",
marginBottom:25
},

otpBox:{
backgroundColor:"rgba(255,255,255,0.1)",
width:55,
height:55,
borderRadius:10,
textAlign:"center",
fontSize:22,
color:"#fff",
borderWidth:1,
borderColor:"rgba(255,255,255,0.3)"
},

button:{
backgroundColor:"#4facfe",
padding:15,
borderRadius:10,
width:"100%",
alignItems:"center"
},

buttonText:{
color:"#fff",
fontWeight:"bold",
fontSize:16
}

});