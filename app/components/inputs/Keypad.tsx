import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import React, { Dispatch, SetStateAction } from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { useAuth } from '../../contexts/auth'
import { useTheme } from '../../contexts/theme'
import _theme from '../../theme'

export type KeypadProps = {
  keypadContent: Array<string | number>
  keypadSize: number
  keypadTextSize: number
  pinLength: number
  setValue: Dispatch<SetStateAction<number[]>>
  value: Array<number>
}

const Keypad: React.FC<KeypadProps> = ({
  keypadContent,
  keypadSize,
  keypadTextSize,
  pinLength,
  setValue,
  value,
}) => {
  const { theme } = useTheme()
  const { borderRadius, spacing } = _theme

  const styles = StyleSheet.create({
    keyContainerStyles: {
      width: keypadSize,
      height: keypadSize,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: borderRadius.xxll,
      margin: spacing.m,
    },
    keyStyles: {
      color: theme.grayscale.darkGrey,
    },
  })

  const renderKey = (item: string | number) => {
    switch (item) {
      case 'X':
        return (
          <Icon
            color={
              value.length > 0 ? theme.brand.primary : theme.brand.disabled
            }
            name="bluetooth"
            size={48}
          />
        )
      case '':
        return <></>
      default:
        return (
          <Text style={[{ fontSize: keypadTextSize }, styles.keyStyles]}>
            {item}
          </Text>
        )
    }
  }

  return (
    <FlatList
      data={keypadContent}
      numColumns={3} // set number of columns
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            disabled={item === ''} // make the empty space on the keypad content unclickable
            onPress={() => {
              if (item === 'X') {
                setValue(value.slice(0, -1))
              } else if (item === '') {
                console.log('hi')
              } else {
                if (value.length === pinLength) {
                  console.log('hi')
                } else {
                  console.log(item)
                  setValue([...value, item])
                }
              }
            }}>
            <View
              style={[
                {
                  backgroundColor:
                    item === '' ? theme.grayscale.white : theme.neutral.soft,
                },
                styles.keyContainerStyles,
              ]}>
              {renderKey(item)}
            </View>
          </TouchableOpacity>
        )
      }}
    />
  )
}

export default Keypad
