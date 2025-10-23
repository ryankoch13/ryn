import { Link } from 'expo-router';
import {View, Text} from 'react-native';

export default function HomeScreen() {
    return (
        <View className='flex-1 items-center justify-center'>
            <Text className='text-3xl'>Hieee</Text>
            <Link href={"/about"}>Go to about</Link>
        </View>
    )
}