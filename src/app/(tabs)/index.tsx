import {Text, View, StyleSheet, Platform, ScrollView} from "react-native";
import * as Device from 'expo-device'
import {globalStyles} from "@/styles/global";
import HomeHeader from "@/components/homeHeader";
import {Link} from "expo-router";
import MacroGrid from "@/components/MacroGrid";
import RecentMeals from "@/components/RecentMeals";

export default function HomeScreen() {
  return (
    <ScrollView style={globalStyles.container}>
        <Text style={globalStyles.title} >My App</Text>
        <HomeHeader />
        <MacroGrid />
        <RecentMeals />
    </ScrollView>
  );
}


