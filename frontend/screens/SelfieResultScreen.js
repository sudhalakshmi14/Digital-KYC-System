import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SelfieResultScreen({ route, navigation }) {

const { photoUri } = route.params

return(

<View style={styles.container}>

<View style={styles.imageBox}>

<Image source={{uri:photoUri}} style={styles.image}/>

<View style={styles.tick}>
<Ionicons name="checkmark" size={40} color="#fff"/>
</View>

</View>

<Text style={styles.title}>Selfie Captured!</Text>

<Text style={styles.subtitle}>
Photo looks good. Continue or retake if needed.
</Text>

<View style={styles.row}>

<TouchableOpacity
style={styles.retake}
onPress={()=>navigation.goBack()}
>
<Text style={styles.btnText}>Retake</Text>
</TouchableOpacity>

<TouchableOpacity
style={styles.continue}
onPress={()=>navigation.navigate("Verification")}
>
<Text style={styles.btnText}>Continue</Text>
</TouchableOpacity>

</View>

</View>

)

}

const styles = StyleSheet.create({

container:{
flex:1,
justifyContent:"center",
alignItems:"center",
padding:20,
backgroundColor:"#0f172a"
},

imageBox:{
width:"100%",
height:300,
borderRadius:20,
overflow:"hidden",
marginBottom:20
},

image:{
width:"100%",
height:"100%"
},

tick:{
position:"absolute",
top:"45%",
left:"45%",
backgroundColor:"#22c55e",
padding:10,
borderRadius:50
},

title:{
color:"#fff",
fontSize:22,
fontWeight:"bold"
},

subtitle:{
color:"#ccc",
marginBottom:20
},

row:{
flexDirection:"row",
gap:20
},

retake:{
backgroundColor:"#374151",
padding:15,
borderRadius:10
},

continue:{
backgroundColor:"#2563eb",
padding:15,
borderRadius:10
},

btnText:{
color:"#fff",
fontWeight:"bold"
}

})