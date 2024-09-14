import React, { createContext, Dispatch, SetStateAction, useContext, useState } from 'react'

export interface ModalContext {
    modalVisible: boolean
    setModalVisible: Dispatch<SetStateAction<boolean>>
    modalType: ModalType
    setModalType: Dispatch<SetStateAction<ModalType>>
}

export const ModalContext = createContext<ModalContext>(null as unknown as ModalContext)

export enum ModalType {
    Alert = 'Alert',
}

export const ModalProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const [modalType, setModalType] = useState<ModalType>(ModalType.Alert)

  return (
    <ModalContext.Provider
      value={{
          modalVisible,
        setModalVisible,
        modalType,
        setModalType,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export const useModal = () => useContext(ModalContext)
