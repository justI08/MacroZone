import { globalStyles } from '@/styles/global';
import { Text, ScrollView } from 'react-native';

export default function AddMealsScreen() {
    return (
        <ScrollView style={globalStyles.container}>
            <Text style={globalStyles.title}>Add Meals</Text>
        </ScrollView>
    );
}