import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { APP_GRADIENT } from "../constants/Colors";

export default function SuccessScreen({ navigation }) {

return (

<LinearGradient colors={APP_GRADIENT} style={styles.container}>

<Text style={styles.title}>Success!</Text>

<Text style={styles.subtitle}>
Your account has been created
</Text>

<View style={styles.iconBox}>
<Ionicons name="checkmark-circle" size={140} color="#4facfe" />
</View>

<TouchableOpacity
style={styles.button}
onPress={() => navigation.replace("Login")}
>
<Text style={styles.buttonText}>Continue</Text>
</TouchableOpacity>

</LinearGradient>

);
}


const styles = StyleSheet.create({

container:{
flex:1,
justifyContent:"center",
alignItems:"center",
padding:20
},

title:{
fontSize:36,
fontWeight:"bold",
color:"#fff",
marginBottom:10
},

subtitle:{
fontSize:16,
color:"#ddd",
marginBottom:40
},

iconBox:{
marginBottom:60
},

button:{
backgroundColor:"#4facfe",
paddingVertical:15,
paddingHorizontal:60,
borderRadius:12
},

buttonText:{
color:"#fff",
fontSize:18,
fontWeight:"bold"
}

});