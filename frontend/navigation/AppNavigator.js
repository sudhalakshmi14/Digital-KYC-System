import React from "react";
import { TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

// Import Screens
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import CreateAccountStep1 from "../screens/CreateAccountStep1";
import CreateAccountStep2 from "../screens/CreateAccountStep2";
import SecurityPrivacyScreen from "../screens/SecurityPrivacyScreen";
import SuccessScreen from "../screens/SuccessScreen";
import DashboardScreen from "../screens/DashboardScreen";
import KYCVerificationScreen from "../screens/KYCVerificationScreen";
import SelfieCaptureScreen from "../screens/SelfieCaptureScreen";
import SelfieResultScreen from "../screens/SelfieResultScreen";
import VerificationScreen from "../screens/VerificationScreen";
import RiskAssessmentScreen from "../screens/RiskAssessmentScreen";
import KYCStatusScreen from "../screens/KYCStatusScreen";
import OTPScreen from "../screens/OTPScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {

const profileIcon = (navigation) => (
<TouchableOpacity
onPress={() => navigation.navigate("Profile")}
style={{ marginRight: 10 }}
>
<Ionicons name="person-circle" size={30} color="#fff" />
</TouchableOpacity>
);

return (

<NavigationContainer>

<Stack.Navigator
initialRouteName="Welcome"
screenOptions={{
headerStyle:{ backgroundColor:"#1e3a8a" },
headerTintColor:"#fff",
headerTitleStyle:{ fontWeight:"bold" }
}}
>

{/* Welcome */}
<Stack.Screen
name="Welcome"
component={WelcomeScreen}
options={{ headerShown:false }}
/>
<Stack.Screen
name="OTP"
component={OTPScreen}
/>

<Stack.Screen
name="Login"
component={LoginScreen}
options={{ headerShown:false }}
/>

{/* SIGNUP FLOW */}

<Stack.Screen
name="CreateAccountStep1"
component={CreateAccountStep1}
options={{ title:"Create Account - Step 1" }}
/>

<Stack.Screen
name="CreateAccountStep2"
component={CreateAccountStep2}
options={{ title:"Create Account - Step 2" }}
/>

<Stack.Screen
name="SecurityPrivacy"
component={SecurityPrivacyScreen}
options={{ title:"Security & Privacy" }}
/>

<Stack.Screen
name="Success"
component={SuccessScreen}
options={{ headerShown:false }}
/>

<Stack.Screen
name="Dashboard"
component={DashboardScreen}
options={{ title:"Dashboard" }}
/>

{/* KYC FLOW */}
<Stack.Screen
name="KYCVerification"
component={KYCVerificationScreen}
options={({ navigation }) => ({
title:"Upload Identity Document",

headerLeft: () => (
<TouchableOpacity
onPress={() => navigation.goBack()}
style={{ marginLeft:10 }}
>
<Ionicons name="arrow-back" size={24} color="#fff"/>
</TouchableOpacity>
),

headerRight: () => (
<TouchableOpacity
onPress={() => navigation.navigate("Profile")}
style={{ marginRight:10 }}
>
<Ionicons name="person-circle" size={28} color="#fff"/>
</TouchableOpacity>
)

})}
/>

<Stack.Screen
name="SelfieCapture"
component={SelfieCaptureScreen}
options={({ navigation }) => ({
title:"Selfie Capture",
headerRight: () => profileIcon(navigation)
})}
/>

<Stack.Screen
name="SelfieResult"
component={SelfieResultScreen}
options={({ navigation }) => ({
title:"Selfie Result",
headerRight: () => profileIcon(navigation)
})}
/>

<Stack.Screen
name="Verification"
component={VerificationScreen}
options={({ navigation }) => ({
title:"Verifying Documents",
headerRight: () => profileIcon(navigation)
})}
/>

<Stack.Screen
name="RiskAssessment"
component={RiskAssessmentScreen}
options={({ navigation }) => ({
title:"Risk Assessment",
headerRight: () => profileIcon(navigation)
})}
/>

<Stack.Screen
name="KYCStatus"
component={KYCStatusScreen}
options={({ navigation }) => ({
title:"KYC Status",
headerRight: () => profileIcon(navigation)
})}
/>

{/* PROFILE */}

<Stack.Screen
name="Profile"
component={ProfileScreen}
options={{ title:"Profile & Settings" }}
/>

</Stack.Navigator>

</NavigationContainer>

);

}