import React, { useState, useEffect } from "react";
import {
View,
Text,
StyleSheet,
TextInput,
TouchableOpacity,
Alert,
Switch
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import * as LocalAuthentication from "expo-local-authentication";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { APP_GRADIENT } from "../constants/Colors";

export default function LoginScreen({ navigation }) {

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const [remember,setRemember] = useState(false);


// Load remembered email
useEffect(() => {

async function loadEmail(){

const savedEmail = await AsyncStorage.getItem("rememberEmail");

if(savedEmail){
setEmail(savedEmail);
setRemember(true);
}

}

loadEmail();

}, []);


// LOGIN
async function handleLogin(){

if(email === "" || password === ""){
Alert.alert("Error","Please enter email and password");
return;
}

// Save email if remember enabled
if(remember){
await AsyncStorage.setItem("rememberEmail",email);
}else{
await AsyncStorage.removeItem("rememberEmail");
}

let role = email === "admin@gmail.com" ? "Admin" : "User";

navigation.navigate("Dashboard",{ role });

}


// REMEMBER TOGGLE
function toggleRemember(){
setRemember(!remember);
}


// FORGOT PASSWORD
function forgotPassword(){

if(email.trim() === ""){
Alert.alert(
"Email Required",
"Please enter your email address first."
);
return;
}

Alert.alert(
"Password Reset",
`A password reset link has been sent to:\n\n${email}`
);

}


// REQUEST OTP
function requestOTP(){

if(email === ""){
Alert.alert("Enter Email","Please enter your email first");
return;
}

Alert.alert("OTP Sent","Verification OTP sent to your email");

navigation.navigate("OTP");

}


// BIOMETRIC LOGIN
async function biometricLogin(){

const compatible = await LocalAuthentication.hasHardwareAsync();

if(!compatible){
Alert.alert("Error","Biometric authentication not supported");
return;
}

const result = await LocalAuthentication.authenticateAsync({
promptMessage:"Login with Biometrics"
});

if(result.success){

Alert.alert("Success","Biometric Authentication Successful");

navigation.navigate("Dashboard",{ role:"User" });

}

}


return(

<LinearGradient colors={APP_GRADIENT} style={styles.container}>

<View style={styles.iconBox}>
<Ionicons name="shield-outline" size={35} color="#fff"/>
</View>

<Text style={styles.title}>Welcome Back</Text>
<Text style={styles.subtitle}>Sign in to your KYC Dashboard</Text>

<View style={styles.card}>

{/* EMAIL */}

<Text style={styles.label}>Email Address</Text>

<View style={styles.inputBox}>
<Ionicons name="mail-outline" size={20} color="#ccc"/>
<TextInput
style={styles.input}
placeholder="demo@kyc.com"
placeholderTextColor="#ccc"
value={email}
onChangeText={setEmail}
/>
</View>


{/* PASSWORD */}

<Text style={styles.label}>Password</Text>

<View style={styles.inputBox}>
<Ionicons name="lock-closed-outline" size={20} color="#ccc"/>
<TextInput
style={styles.input}
placeholder="Enter your password"
placeholderTextColor="#ccc"
secureTextEntry
value={password}
onChangeText={setPassword}
/>
</View>


{/* REMEMBER + FORGOT */}

<View style={styles.row}>

<View style={{flexDirection:"row",alignItems:"center"}}>
<Switch value={remember} onValueChange={toggleRemember}/>
<Text style={styles.remember}>Remember me</Text>
</View>

<TouchableOpacity onPress={forgotPassword}>
<Text style={styles.forgot}>Forgot Password?</Text>
</TouchableOpacity>

</View>


{/* SIGN IN */}

<TouchableOpacity style={styles.button} onPress={handleLogin}>

<LinearGradient
colors={["#4facfe","#8e2de2"]}
style={styles.gradientBtn}
>
<Text style={styles.buttonText}>Sign In</Text>
</LinearGradient>

</TouchableOpacity>


{/* OTP */}

<TouchableOpacity style={styles.otpBtn} onPress={requestOTP}>
<Text style={styles.otpText}>Request OTP</Text>
</TouchableOpacity>


<View style={styles.dividerRow}>
<View style={styles.divider}/>
<Text style={styles.dividerText}>Or continue with</Text>
<View style={styles.divider}/>
</View>


{/* BIOMETRIC */}

<TouchableOpacity style={styles.bioBtn} onPress={biometricLogin}>
<Ionicons name="finger-print" size={20} color="#fff"/>
<Text style={styles.bioText}> Biometric Login</Text>
</TouchableOpacity>


{/* SIGNUP */}

<View style={styles.signupContainer}>
<Text style={styles.signupText}>
Don't have an account?
<Text
style={styles.signupLink}
onPress={()=>navigation.navigate("CreateAccountStep1")}
>
{" "}Sign Up
</Text>
</Text>
</View>

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

iconBox:{
backgroundColor:"rgba(255,255,255,0.12)",
padding:20,
borderRadius:20,
marginBottom:10
},

title:{
fontSize:28,
fontWeight:"bold",
color:"#fff"
},

subtitle:{
color:"#ccc",
marginBottom:20
},

card:{
width:"100%",
backgroundColor:"rgba(255,255,255,0.1)",
padding:20,
borderRadius:20,
borderWidth:1,
borderColor:"rgba(255,255,255,0.2)"
},

label:{
color:"#fff",
marginBottom:5
},

inputBox:{
flexDirection:"row",
alignItems:"center",
backgroundColor:"rgba(255,255,255,0.1)",
padding:12,
borderRadius:10,
marginBottom:12
},

input:{
flex:1,
marginLeft:10,
color:"#fff"
},

row:{
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center",
marginBottom:12
},

remember:{
color:"#ccc"
},

forgot:{
color:"#4facfe"
},

button:{
borderRadius:10,
overflow:"hidden",
marginTop:5
},

gradientBtn:{
padding:15,
alignItems:"center"
},

buttonText:{
color:"#fff",
fontWeight:"bold",
fontSize:16
},

otpBtn:{
marginTop:12,
borderWidth:1,
borderColor:"rgba(255,255,255,0.4)",
padding:14,
borderRadius:10,
alignItems:"center"
},

otpText:{
color:"#fff"
},

dividerRow:{
flexDirection:"row",
alignItems:"center",
marginVertical:15
},

divider:{
flex:1,
height:1,
backgroundColor:"rgba(255,255,255,0.3)"
},

dividerText:{
marginHorizontal:10,
color:"#ccc"
},

bioBtn:{
flexDirection:"row",
justifyContent:"center",
alignItems:"center"
},

bioText:{
color:"#fff"
},

signupContainer:{
alignItems:"center",
marginTop:15
},

signupText:{
color:"#ccc",
textAlign:"center"
},

signupLink:{
color:"#4facfe",
fontWeight:"600"
}

});