import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react'
import RNSecureStorage, { ACCESSIBLE } from 'rn-secure-storage'

import { KeychainServices } from '../utils/constants'

export interface AuthContext {
  setPIN: (value: string) => Promise<any>
  checkPIN: (value: string) => Promise<boolean>
  setBiometrics: (value: boolean) => Promise<void>
  checkBiometrics: () => Promise<void>
  authenticated: boolean
  setAuthenticated: Dispatch<SetStateAction<boolean>>
}

export const AuthContext = createContext<AuthContext>(
  null as unknown as AuthContext,
)

export const AuthProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [authenticated, setAuthenticated] = useState<boolean>(false)

  const setPIN = async (value: string) => {
    await RNSecureStorage.setItem(KeychainServices.Pin, value, {
      accessible: ACCESSIBLE.WHEN_UNLOCKED,
    })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const checkPIN = async (value: string) => {
    await RNSecureStorage.getItem(KeychainServices.Pin)
      .then((res) => {
        if (res === value) return true
        else return false
      })
      .catch((err) => {
        console.log(err)
        return false
      })
  }

  const setBiometrics = async (value: boolean) => {
    await RNSecureStorage.setItem(KeychainServices.Pin, value.toString(), {
      accessible: ACCESSIBLE.WHEN_UNLOCKED,
    })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const checkBiometrics = async () => {
    await RNSecureStorage.getItem(KeychainServices.Pin).then((res) => {
      if (res == 'true') return true
      else return false
    })
  }
  return (
    <AuthContext.Provider
      value={{
        setPIN,
        checkPIN,
        setBiometrics,
        checkBiometrics,
        authenticated,
        setAuthenticated,
      }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
