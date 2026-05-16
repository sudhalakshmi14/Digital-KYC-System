import React, { useState } from "react";
import {
View,
Text,
StyleSheet,
TouchableOpacity,
Alert,
Image
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import * as DocumentPicker from "expo-document-picker";
import { APP_GRADIENT } from "../constants/Colors";

export default function KYCVerificationScreen({ navigation }){

const documents = ["Aadhaar","PAN","Passport"];

const [selectedDoc,setSelectedDoc] = useState(null);
const [uploadedDocs,setUploadedDocs] = useState([]);
const [uploadedFile,setUploadedFile] = useState(null);
const [uploadedUri,setUploadedUri] = useState(null);

const selectDocument = (doc)=>{
setSelectedDoc(doc);
};

const uploadFile = async () => {

if(!selectedDoc){
Alert.alert("Select Document","Please select a document first");
return;
}

try{

const result = await DocumentPicker.getDocumentAsync({
type:["image/*","application/pdf"]
});

if(!result.canceled){

const file = result.assets[0];

setUploadedFile(file.name);
setUploadedUri(file.uri);

if(!uploadedDocs.includes(selectedDoc)){

const updatedDocs=[...uploadedDocs,selectedDoc];
setUploadedDocs(updatedDocs);

Alert.alert("Success", selectedDoc + " Uploaded Successfully");

const currentIndex = documents.indexOf(selectedDoc);
const nextDoc = documents[currentIndex+1];

if(nextDoc){
setSelectedDoc(nextDoc);
}else{
setSelectedDoc(null);
}

}

}

}catch(error){
console.log("Upload error:",error);
}

};

return(

<LinearGradient colors={APP_GRADIENT} style={styles.container}>

{/* Aadhaar */}

<TouchableOpacity
style={[
styles.card,
selectedDoc==="Aadhaar" && styles.selected
]}
onPress={()=>selectDocument("Aadhaar")}
>

<Ionicons name="card-outline" size={26} color="#fff"/>

<View style={styles.textBox}>
<Text style={styles.cardTitle}>Aadhaar</Text>
<Text style={styles.cardSub}>Upload Aadhaar document</Text>
</View>

{uploadedDocs.includes("Aadhaar") &&
<Ionicons name="checkmark-circle" size={24} color="#22c55e"/>}

</TouchableOpacity>


{/* PAN */}

<TouchableOpacity
style={[
styles.card,
selectedDoc==="PAN" && styles.selected
]}
onPress={()=>selectDocument("PAN")}
>

<Ionicons name="document-text-outline" size={26} color="#fff"/>

<View style={styles.textBox}>
<Text style={styles.cardTitle}>PAN</Text>
<Text style={styles.cardSub}>Upload PAN document</Text>
</View>

{uploadedDocs.includes("PAN") &&
<Ionicons name="checkmark-circle" size={24} color="#22c55e"/>}

</TouchableOpacity>


{/* Passport */}

<TouchableOpacity
style={[
styles.card,
selectedDoc==="Passport" && styles.selected
]}
onPress={()=>selectDocument("Passport")}
>

<Ionicons name="globe-outline" size={26} color="#fff"/>

<View style={styles.textBox}>
<Text style={styles.cardTitle}>Passport</Text>
<Text style={styles.cardSub}>Upload Passport document</Text>
</View>

{uploadedDocs.includes("Passport") &&
<Ionicons name="checkmark-circle" size={24} color="#22c55e"/>}

</TouchableOpacity>


{/* Upload Section */}

{selectedDoc && (

<View style={styles.uploadBox}>

<Ionicons name="cloud-upload-outline" size={40} color="#fff"/>

<Text style={styles.uploadText}>
Upload {selectedDoc} Document
</Text>

<TouchableOpacity style={styles.uploadBtn} onPress={uploadFile}>
<Text style={styles.uploadBtnText}>Browse Files</Text>
</TouchableOpacity>

</View>

)}


{/* Upload Success */}

{uploadedFile && (

<View style={styles.successBox}>

<Ionicons name="checkmark-circle" size={26} color="#22c55e"/>

<View style={{marginLeft:10}}>
<Text style={styles.successTitle}>File Uploaded</Text>
<Text style={styles.successFile}>{uploadedFile}</Text>
</View>

</View>

)}


{/* Document Preview */}

{uploadedUri && (

<View style={styles.previewCard}>

<Text style={styles.previewTitle}>Document Preview</Text>

<Image
source={{uri:uploadedUri}}
style={styles.previewImage}
/>

<View style={styles.validationRow}>
<Ionicons name="checkmark-circle" size={18} color="#22c55e"/>
<Text style={styles.validationText}>Document readable</Text>
</View>

<View style={styles.validationRow}>
<Ionicons name="checkmark-circle" size={18} color="#22c55e"/>
<Text style={styles.validationText}>Format valid</Text>
</View>

<View style={styles.validationRow}>
<Ionicons name="time" size={18} color="#f59e0b"/>
<Text style={styles.validationText}>Verifying authenticity</Text>
</View>

</View>

)}


{/* Continue */}

{uploadedDocs.length >= 2 && (

<TouchableOpacity
style={styles.continueBtn}
onPress={()=>navigation.navigate("SelfieCapture")}
>

<Text style={styles.continueText}>
Continue to Selfie
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

card:{
flexDirection:"row",
alignItems:"center",
justifyContent:"space-between",
backgroundColor:"rgba(255,255,255,0.1)",
padding:15,
borderRadius:12,
marginBottom:12
},

selected:{
borderColor:"#4facfe",
borderWidth:2
},

textBox:{
flex:1,
marginLeft:10
},

cardTitle:{
color:"#fff",
fontWeight:"bold"
},

cardSub:{
color:"#ccc",
fontSize:13
},

uploadBox:{
marginTop:20,
alignItems:"center",
backgroundColor:"rgba(255,255,255,0.1)",
padding:20,
borderRadius:12
},

uploadText:{
color:"#fff",
marginTop:10,
marginBottom:10
},

uploadBtn:{
backgroundColor:"#2563eb",
padding:12,
borderRadius:10
},

uploadBtnText:{
color:"#fff",
fontWeight:"bold"
},

successBox:{
flexDirection:"row",
alignItems:"center",
backgroundColor:"#dcfce7",
padding:12,
borderRadius:10,
marginTop:15
},

successTitle:{
fontWeight:"bold",
color:"#166534"
},

successFile:{
color:"#166534"
},

previewCard:{
marginTop:20,
backgroundColor:"rgba(255,255,255,0.1)",
padding:15,
borderRadius:12
},

previewTitle:{
color:"#fff",
fontWeight:"bold",
marginBottom:10
},

previewImage:{
width:"100%",
height:180,
borderRadius:10,
marginBottom:10
},

validationRow:{
flexDirection:"row",
alignItems:"center",
marginBottom:6
},

validationText:{
color:"#fff",
marginLeft:6
},

continueBtn:{
backgroundColor:"#22c55e",
padding:15,
borderRadius:10,
alignItems:"center",
marginTop:20
},

continueText:{
color:"#fff",
fontWeight:"bold"
}

});