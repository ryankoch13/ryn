import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import UserSetup from '../screens/UserSetup'
import PinCreate from '../screens/PinCreate'
import { Screens } from '../types/navigation'
import { useTheme } from '../contexts/theme'

type OnboardingStackOptions = {

}

const OnboardingStack: React.FC<OnboardingStackOptions> = () => {
    const Stack = createStackNavigator()
    const {defaultScreenOptions} = useTheme()
    return (
        <Stack.Navigator>
            <Stack.Screen name={Screens.UserSetup} component={UserSetup} options={defaultScreenOptions} /> 
            <Stack.Screen name={Screens.PinCreate} component={PinCreate} options={defaultScreenOptions} />
        </Stack.Navigator>
    )
}

export default OnboardingStack