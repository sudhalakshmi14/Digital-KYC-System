import React, { useState } from "react";
import {
View,
Text,
StyleSheet,
TouchableOpacity,
Switch,
Alert,
ScrollView,
TextInput
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { APP_GRADIENT } from "../constants/Colors";
import { CommonActions } from "@react-navigation/native";

export default function ProfileScreen({ navigation, route }) {

const role = route?.params?.role || "User";

const [editing,setEditing] = useState(false);

const [email,setEmail] = useState("john@gmail.com");
const [phone,setPhone] = useState("+91 98765 43210");
const [org,setOrg] = useState("Demo Bank Ltd.");

const [twoFA,setTwoFA] = useState(true);
const [biometric,setBiometric] = useState(true);

const [emailNotif,setEmailNotif] = useState(true);
const [smsNotif,setSmsNotif] = useState(false);
const [securityNotif,setSecurityNotif] = useState(true);

const [password,setPassword] = useState("");
const [showPassword,setShowPassword] = useState(false);


function saveProfile(){

setEditing(false);

Alert.alert(
"Profile Updated",
"Your profile information has been saved"
);

}


function changePassword(){

if(password.length < 4){

Alert.alert(
"Error",
"Password must be at least 4 characters"
);

return;

}

setPassword("");
setShowPassword(false);

Alert.alert(
"Success",
"Password updated successfully"
);

}

function logout(){

navigation.dispatch(
CommonActions.reset({
index:0,
routes:[{name:"Login"}]
})
);

} 

function logout(){

Alert.alert(
"Logout",
"Are you sure you want to logout?",
[
{
text:"Cancel",
style:"cancel"
},
{
text:"Logout",
style:"destructive",
onPress:()=>navigation.reset({
index:0,
routes:[{name:"Login"}]
})
}
]
);

}
function logout(){

navigation.reset({
index:0,
routes:[{name:"Login"}]

});

}

return(

<LinearGradient colors={APP_GRADIENT} style={{flex:1}}>

<ScrollView contentContainerStyle={styles.container}>

{/* USER CARD */}

<View style={styles.userCard}>

<View style={styles.avatar}>
<Ionicons name="person" size={40} color="#fff"/>
</View>

<Text style={styles.username}>{role}</Text>

</View>


{/* PERSONAL INFO */}

<Text style={styles.section}>Personal Information</Text>

<View style={styles.card}>

<Text style={styles.label}>Email</Text>

{editing ?

<TextInput
style={styles.input}
value={email}
onChangeText={setEmail}
/>

:

<Text style={styles.value}>{email}</Text>

}

<Text style={styles.label}>Phone</Text>

{editing ?

<TextInput
style={styles.input}
value={phone}
onChangeText={setPhone}
/>

:

<Text style={styles.value}>{phone}</Text>

}

<Text style={styles.label}>Organization</Text>

{editing ?

<TextInput
style={styles.input}
value={org}
onChangeText={setOrg}
/>

:

<Text style={styles.value}>{org}</Text>

}

<Text style={styles.label}>Role</Text>
<Text style={styles.value}>{role}</Text>


{editing ?

<TouchableOpacity style={styles.saveBtn} onPress={saveProfile}>
<Text style={styles.btnText}>Save Profile</Text>
</TouchableOpacity>

:

<TouchableOpacity style={styles.editBtn} onPress={()=>setEditing(true)}>
<Text style={styles.btnText}>Edit Profile</Text>
</TouchableOpacity>

}

</View>


{/* SECURITY SETTINGS */}

<Text style={styles.section}>Security Settings</Text>

<View style={styles.card}>

<View style={styles.row}>
<Text style={styles.value}>Two-Factor Authentication</Text>
<Switch value={twoFA} onValueChange={setTwoFA}/>
</View>

<View style={styles.row}>
<Text style={styles.value}>Biometric Login</Text>
<Switch value={biometric} onValueChange={setBiometric}/>
</View>


<TouchableOpacity
style={styles.changePassBtn}
onPress={()=>setShowPassword(!showPassword)}
>
<Text style={styles.btnText}>Change Password</Text>
</TouchableOpacity>


{showPassword && (

<View>

<TextInput
placeholder="New Password"
secureTextEntry
style={styles.input}
value={password}
onChangeText={setPassword}
/>

<TouchableOpacity style={styles.saveBtn} onPress={changePassword}>
<Text style={styles.btnText}>Update Password</Text>
</TouchableOpacity>

</View>

)}

</View>


{/* NOTIFICATIONS */}

<Text style={styles.section}>Notifications</Text>

<View style={styles.card}>

<View style={styles.row}>
<Text style={styles.value}>Email Notifications</Text>
<Switch value={emailNotif} onValueChange={setEmailNotif}/>
</View>

<View style={styles.row}>
<Text style={styles.value}>SMS Alerts</Text>
<Switch value={smsNotif} onValueChange={setSmsNotif}/>
</View>

<View style={styles.row}>
<Text style={styles.value}>Security Alerts</Text>
<Switch value={securityNotif} onValueChange={setSecurityNotif}/>
</View>

</View>


{/* LOGOUT */}

<TouchableOpacity style={styles.logoutBtn} onPress={logout}>
<Text style={styles.logoutText}>Logout</Text>
</TouchableOpacity>

</ScrollView>

</LinearGradient>

);

}


const styles = StyleSheet.create({

container:{
padding:20
},

userCard:{
alignItems:"center",
marginBottom:20
},

avatar:{
backgroundColor:"#3b82f6",
width:80,
height:80,
borderRadius:40,
justifyContent:"center",
alignItems:"center",
marginBottom:10
},

username:{
fontSize:18,
color:"#fff",
fontWeight:"bold"
},

section:{
color:"#fff",
fontSize:18,
fontWeight:"bold",
marginVertical:10
},

card:{
backgroundColor:"rgba(255,255,255,0.1)",
padding:15,
borderRadius:12,
marginBottom:15
},

label:{
color:"#ddd",
fontSize:12
},

value:{
color:"#fff",
fontSize:16,
marginBottom:10
},

input:{
backgroundColor:"#fff",
padding:10,
borderRadius:8,
marginBottom:10
},

row:{
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center",
marginBottom:10
},

editBtn:{
backgroundColor:"#3b82f6",
padding:12,
borderRadius:8,
alignItems:"center"
},

saveBtn:{
backgroundColor:"#22c55e",
padding:12,
borderRadius:8,
alignItems:"center"
},

changePassBtn:{
backgroundColor:"#6366f1",
padding:12,
borderRadius:8,
alignItems:"center",
marginTop:10
},

btnText:{
color:"#fff",
fontWeight:"bold"
},

logoutBtn:{
backgroundColor:"#ef4444",
padding:15,
borderRadius:10,
alignItems:"center",
marginTop:20
},

logoutText:{
color:"#fff",
fontWeight:"bold"
}

});