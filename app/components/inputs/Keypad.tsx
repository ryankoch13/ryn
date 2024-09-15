import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
   } from "react-native"
   import React, { SetStateAction } from "react"
   import Icon from 'react-native-vector-icons/Feather'

  export type KeypadProps = {
    keypadContent: Array<string | number>,
    keypadSize: number,
    keypadTextSize: number,
    pinLength: number,
    setValue: SetStateAction<Array<number>>,
    value: Array<number>,
  }

   const Keypad: React.FC<KeypadProps> = ({
    keypadContent,
    keypadSize,
    keypadTextSize,
    pinLength,
    setValue,
    value,
   }) => {

    const renderKey = (key: string) => {
        switch (key) {
            case 'X':
                if (value.length > 0) {
                  value.pop()
                }
        }
        if (key == 'X') {
            return (
                
            )
        } else if (key == '') {
            return (<></>)
        } else return (

        )
    }
   
   return (
    <FlatList
      data={keypadContent}
      numColumns={3} // set number of columns
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            disabled={item === ""} // make the empty space on the keypad content unclickable
           >
            <View
              style={[
                {
                  backgroundColor: item === "" ? "transparent" : "#fff",
                  width: keypadSize,
                  height: keypadSize,
                },
                styles.keypadContainer,
              ]}
            >
              {item === "X" ? (
                <></>
              ) : (
                <Text
                  style={[{ fontSize: keypadTextSize }, styles.keypadText]}
                >
                  {item}
                </Text>
              )}
            </View>
          </TouchableOpacity>
        )
      }}
    />
  )
   }