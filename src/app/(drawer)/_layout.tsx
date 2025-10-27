import {Stack, Tabs} from 'expo-router';
import Drawer from 'expo-router/drawer';

export default function HomeLayout() {
    return (
        <Drawer>
            <Drawer.Screen name='(home)' options={{title: 'Home', headerShown: false}} />
            <Drawer.Screen name='about' options={{title: 'About'}} />
            {/* <Stack.Screen name='(tabs)' /> */}
        </Drawer>
    );
}