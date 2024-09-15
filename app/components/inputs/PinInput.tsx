import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import {
  View,
  StyleSheet,
  useWindowDimensions,
  SafeAreaView,
  Text,
} from 'react-native'

import _theme from '../../theme'
import Keypad from './Keypad'
// import PinView from './PinView'
// import Button, { ButtonType } from '../buttons/Button'
import { useStore } from '../../contexts/reducers/store'
import { useAuth } from '../../contexts/auth'
import { useTheme } from '../../contexts/theme'

export enum PinInputType {
  create = 'Create',
  enter = 'Enter',
}

type PinInputProps = {
  setValue: Dispatch<SetStateAction<number[]>>
  value: Array<number>
  // type: PinInputType
}

const PinInput: React.FC<PinInputProps> = ({
  value,
  setValue,
  // type
}) => {
  const { spacing, fontSize, fontWeight, borderRadius } = _theme
  const { theme } = useTheme()
  const { height, width } = useWindowDimensions()
  const keypadContent = [1, 2, 3, 4, 5, 6, 7, 8, 9, '', 0, 'X']
  const keypadSize = width * 0.2
  const keypadTextSize = keypadSize * 0.3
  const pinLength = 4
  const pinSize = width / 1.6 / pinLength
  const [state] = useStore()
  const { checkBiometrics } = useAuth()
  const biometricsEnabled = checkBiometrics()

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.grayscale.white,
      justifyContent: 'space-between',
      alignItems: 'center',
      height: height,
    },
    textContainer: {
      justifyContent: 'flex-start',
      flex: 1,
      alignItems: 'center',
    },
    pinSubText: {
      fontSize: fontSize.m,
      fontWeight: fontWeight.thin,
      color: theme.grayscale.black,
      marginTop: spacing.xxxs,
      marginBottom: spacing.xl,
      textAlign: 'center',
    },
    button: {
      paddingHorizontal: spacing.xl,
      borderRadius: borderRadius.xxll,
      paddingVertical: spacing.xxs,
    },
    buttonText: {
      fontSize: fontSize.s,
    },
  })

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        {/* {type == PinInputType.create ? (
          <Text style={styles.pinSubText}>
            Welcome {state.settings.username}, please create a secure,
            four-digit PIN.
          </Text>
        ) : (
          <Text style={styles.pinSubText}>
            Welcome, {state.settings.username}
          </Text>
        )} */}

        {/* <PinView pinLength={pinLength} pinSize={pinSize} value={value} /> */}
        <Keypad
          keypadContent={keypadContent}
          keypadSize={keypadSize}
          keypadTextSize={keypadTextSize}
          pinLength={pinLength}
          setValue={setValue}
          value={value}
        />
      </View>
    </SafeAreaView>
  )
}

export default PinInput
