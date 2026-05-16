import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default function CreateAccountStep1({ navigation }) {

const [name,setName]=useState("")
const [email,setEmail]=useState("")
const [phone,setPhone]=useState("")
const [org,setOrg]=useState("")

return (

<LinearGradient
colors={["#0f2027","#1f3c88","#7b2ff7"]}
style={styles.container}
>

<View style={styles.iconBox}>
<Ionicons name="shield-outline" size={32} color="#fff"/>
</View>

<Text style={styles.title}>Create Account</Text>
<Text style={styles.subtitle}>Join our secure KYC platform</Text>

<View style={styles.progressContainer}>
<View style={styles.progressActive}/>
<View style={styles.progressInactive}/>
</View>

<View style={styles.card}>

<Text style={styles.label}>Full Name</Text>

<View style={styles.inputBox}>
<Ionicons name="person-outline" size={18} color="#ccc"/>
<TextInput
style={styles.input}
placeholder="John Doe"
placeholderTextColor="#ccc"
value={name}
onChangeText={setName}
/>
</View>

<Text style={styles.label}>Email Address</Text>

<View style={styles.inputBox}>
<Ionicons name="mail-outline" size={18} color="#ccc"/>
<TextInput
style={styles.input}
placeholder="john@example.com"
placeholderTextColor="#ccc"
value={email}
onChangeText={setEmail}
/>
</View>

<Text style={styles.label}>Phone Number</Text>

<View style={styles.inputBox}>
<Ionicons name="call-outline" size={18} color="#ccc"/>
<TextInput
style={styles.input}
placeholder="+91 98765 43210"
placeholderTextColor="#ccc"
value={phone}
onChangeText={setPhone}
/>
</View>

<Text style={styles.label}>Organization</Text>

<View style={styles.inputBox}>
<Ionicons name="business-outline" size={18} color="#ccc"/>
<TextInput
style={styles.input}
placeholder="ABC Bank Ltd."
placeholderTextColor="#ccc"
value={org}
onChangeText={setOrg}
/>
</View>

{/* Continue Button */}

<TouchableOpacity
style={styles.button}
onPress={()=>navigation.navigate("CreateAccountStep2")}
>

<LinearGradient
colors={["#4facfe","#8e2de2"]}
style={styles.gradientBtn}
>

<Text style={styles.buttonText}>Continue</Text>

</LinearGradient>

</TouchableOpacity>

<Text style={styles.signin}>
Already have an account?
<Text
style={{color:"#4facfe"}}
onPress={()=>navigation.navigate("Login")}
>
 {" "}Sign In
</Text>
</Text>

</View>

</LinearGradient>
)
}

const styles = StyleSheet.create({

container:{
flex:1,
alignItems:"center",
justifyContent:"center",
padding:20
},

iconBox:{
backgroundColor:"rgba(255,255,255,0.15)",
padding:18,
borderRadius:20,
marginBottom:15
},

title:{
fontSize:28,
color:"#fff",
fontWeight:"bold"
},

subtitle:{
color:"#ccc",
marginBottom:15
},

progressContainer:{
flexDirection:"row",
width:"80%",
marginBottom:20
},

progressActive:{
flex:1,
height:6,
backgroundColor:"#8e2de2",
borderRadius:10,
marginRight:5
},

progressInactive:{
flex:1,
height:6,
backgroundColor:"rgba(255,255,255,0.3)",
borderRadius:10
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

button:{
marginTop:10,
borderRadius:10,
overflow:"hidden"
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

signin:{
textAlign:"center",
marginTop:15,
color:"#ccc"
}

});