import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { useStore } from '../contexts/reducers/store'
import { useAuth } from '../contexts/auth'
import { Screens, Stacks } from '../types/navigation'
import IntroStack from './IntroStack'

const RootStack: React.FC = () => {
  const Stack = createStackNavigator()
  const { authenticated } = useAuth()
  const [state, dispatch] = useStore()

  const renderStack = () => {
    // if (state.onboarding.onboardingComplete) {
    //   if (authenticated) {
    //     return (<Stack.Screen name={Stacks.TabStack} component={TabStack} />)
    //   } else return (<Stack.Screen name={Screens.PinEnter} component={PinEnter} />)
    // } else {
    return <Stack.Screen name={Stacks.IntroStack} component={IntroStack} />
    // }
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>{renderStack()}</Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootStack
