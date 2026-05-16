import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { LinearGradient } from "expo-linear-gradient";
import { APP_GRADIENT } from "../constants/Colors";

export default function CreateAccountStep2({ navigation }) {

const [role, setRole] = useState(null)
const [adminId, setAdminId] = useState("")
const [password, setPassword] = useState("")
const [confirmPassword, setConfirmPassword] = useState("")

const roles = [
{ label: "User", value: "User" },
{ label: "Admin", value: "Admin" },
]

const handleCreateAccount = () => {

if(!role){
Alert.alert("Error","Please select a role")
return
}

if(role === "Admin" && adminId === ""){
Alert.alert("Admin ID Required","Please enter Admin ID")
return
}

if(password === "" || confirmPassword === ""){
Alert.alert("Error","Please enter password")
return
}

if(password !== confirmPassword){
Alert.alert("Password Incorrect","Passwords do not match")
return
}

navigation.navigate("SecurityPrivacy")

}

return (

<LinearGradient colors={APP_GRADIENT} style={styles.container}>

<Text style={styles.title}>Create Account</Text>
<Text style={styles.subtitle}>Join our secure KYC platform</Text>

<View style={styles.card}>

<Text style={styles.label}>Role</Text>

<Dropdown
style={styles.dropdown}
data={roles}
labelField="label"
valueField="value"
placeholder="Select Role"
placeholderStyle={{ color: "#ccc" }}
selectedTextStyle={{ color: "#fff" }}
value={role}
onChange={item => setRole(item.value)}
/>

{/* Admin ID Field */}

{role === "Admin" && (
<>
<Text style={styles.label}>
Admin ID <Text style={{color:"red"}}>*</Text>
</Text>

<TextInput
style={styles.input}
placeholder="Enter Admin ID"
placeholderTextColor="#ccc"
value={adminId}
onChangeText={setAdminId}
/>
</>
)}

<Text style={styles.label}>Password</Text>

<TextInput
style={styles.input}
placeholder="Create a strong password"
placeholderTextColor="#ccc"
secureTextEntry
value={password}
onChangeText={setPassword}
/>

<Text style={styles.label}>Confirm Password</Text>

<TextInput
style={styles.input}
placeholder="Confirm your password"
placeholderTextColor="#ccc"
secureTextEntry
value={confirmPassword}
onChangeText={setConfirmPassword}
/>

<View style={styles.buttonRow}>

<TouchableOpacity
style={styles.backButton}
onPress={() => navigation.goBack()}
>
<Text style={styles.backText}>Back</Text>
</TouchableOpacity>

<TouchableOpacity
style={styles.createButton}
onPress={handleCreateAccount}
>
<Text style={styles.createText}>Create Account</Text>
</TouchableOpacity>

</View>

</View>

</LinearGradient>
)
}

const styles = StyleSheet.create({

container:{
flex:1,
justifyContent:"center",
padding:20
},

title:{
fontSize:28,
color:"#fff",
fontWeight:"bold",
textAlign:"center"
},

subtitle:{
color:"#ccc",
textAlign:"center",
marginBottom:20
},

card:{
backgroundColor:"rgba(255,255,255,0.1)",
padding:20,
borderRadius:20,
borderWidth:1,
borderColor:"rgba(255,255,255,0.2)"
},

label:{
color:"#fff",
marginBottom:6,
marginTop:10
},

dropdown:{
backgroundColor:"rgba(255,255,255,0.1)",
padding:12,
borderRadius:10,
marginBottom:10
},

input:{
backgroundColor:"rgba(255,255,255,0.1)",
padding:12,
borderRadius:10,
marginBottom:10,
color:"#fff"
},

buttonRow:{
flexDirection:"row",
justifyContent:"space-between",
marginTop:20
},

backButton:{
borderWidth:1,
borderColor:"rgba(255,255,255,0.4)",
padding:14,
borderRadius:10,
width:"45%",
alignItems:"center"
},

backText:{
color:"#fff"
},

createButton:{
backgroundColor:"#7b2ff7",
padding:14,
borderRadius:10,
width:"45%",
alignItems:"center"
},

createText:{
color:"#fff",
fontWeight:"bold"
}

});