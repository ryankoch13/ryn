import React, { useEffect, useState } from 'react'
import ReactNativeBiometrics from 'react-native-fold-biometrics'
import { SafeAreaView, StyleSheet, useWindowDimensions } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import PinInput from '../components/inputs/PinInput'
import { useAuth } from '../contexts/auth'

const PinCreate = () => {
  const [value, setValue] = useState<Array<number>>([])
  const { setPIN } = useAuth()

  useEffect(() => {
    if (value.length == 4) {
      const local = async () => {
        console.log(value.join(''))
        // await setPIN(value.join(''))
      }
      local()
    }
    console.log(value)
  }, [value])
  return <PinInput value={value} setValue={setValue} />
}

export default PinCreate
