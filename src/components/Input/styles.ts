import { TextInput } from 'react-native'
import FEIcon from 'react-native-vector-icons/Feather'
import FAWIcon from 'react-native-vector-icons/FontAwesome'
import FA5Icon from 'react-native-vector-icons/FontAwesome5'
import IonIcon from 'react-native-vector-icons/Ionicons'
import styled, { css } from 'styled-components/native'

import colors from '../../styles/colors'

interface IContainerProps {
  focused?: boolean
  hasError?: boolean
}

interface IInputProps {
  passwordInput?: boolean
  secureTextEntry?: boolean
  leftPadding?: string
}

export const Container = styled.View<IContainerProps>`
  height: 48px;
  width: 90%;
  background-color: ${colors.dark_white};
  border-radius: 8px;
  margin-bottom: 8px;
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  border-color: ${colors.dark_grey};

  ${(props) =>
    props.focused &&
    css`
      border-color: ${colors.blue};
      border-width: 2px;
    `};

  ${(props) =>
    props.hasError &&
    css`
      border-color: ${colors.yellow};
      border-width: 2px;
    `};
`

export const InputText = styled(TextInput)<IInputProps>`
  flex: 1;
  font-size: 16px;
  height: 100%;
  flex-grow: 24;
  color: ${colors.black};

  ${(props) =>
    props.leftPadding == null
      ? css`
          padding: 0 24px;
        `
      : null};
`

export const Button = styled.Pressable`
  padding: 0 8px;
  height: 100%;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Icon = styled(IonIcon)`
  margin: 0 12px 0 18px;
`

export const FIcon = styled(FEIcon)`
  margin: 0 12px 0 18px;
`

export const FAIcon = styled(FAWIcon)`
  margin: 0 12px 0 18px;
`

export const F5Icon = styled(FA5Icon)`
  margin: 0 12px 0 18px;
`
