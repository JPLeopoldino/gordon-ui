import FaIcon from 'react-native-vector-icons/FontAwesome5'
import styled, { css } from 'styled-components/native'

import colors from '../../styles/colors'

interface ButtonProps {
  type: 'primary' | 'secondary' | 'red' | 'facebook'
  width?: number
  height?: number
  inactive: boolean
}

interface LabelProps {
  type: 'primary' | 'secondary' | 'red' | 'facebook'
  inactive: boolean
  fontSize: number
}

export const Button = styled.Pressable<ButtonProps>`
  /* height: 48px; */
  height: ${(props) => `${props.height}px`};
  width: ${(props) => `${props.width}%`};

  flex-direction: row;
  justify-content: center;
  align-items: center;

  /* padding: 16px 8px; */
  border-radius: 8px;

  elevation: 4;
  /* filter: drop-shadow(0px 4px 8px rgba(17, 81, 87, 0.15)); */

  ${(props) =>
    props.type === 'primary' &&
    css`
      border: 1.5px solid #00afc2;
      background-color: ${colors.blue};
    `};

  ${(props) =>
    props.type === 'secondary' &&
    css`
      border: 1.5px solid ${colors.darkest_blue};
      background-color: ${colors.white};
    `};

  ${(props) =>
    props.type === 'red' &&
    css`
      border: 1.5px solid ${colors.red};
      background-color: ${colors.red};
    `};

  ${(props) =>
    props.type === 'facebook' &&
    css`
      background-color: ${colors.facebook_blue};
    `};

  ${(props) =>
    props.inactive &&
    css`
      border: none;
      background-color: ${colors.grey};
    `};
`

export const Label = styled.Text<LabelProps>`
  /* font-family: 'Nunito_600SemiBold'; */
  font-size: ${(props) => `${props.fontSize}px`};
  font-weight: bold;
  text-align: center;
  /* flex: 1; */
  /* flex-wrap: wrap; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  ${(props) =>
    props.type === 'primary' &&
    css`
      color: ${colors.black};
    `};

  ${(props) =>
    props.type === 'secondary' &&
    css`
      color: ${colors.darkest_blue};
    `};

  ${(props) =>
    props.type === 'red' &&
    css`
      color: ${colors.white};
    `};

  ${(props) =>
    props.type === 'facebook' &&
    css`
      font-size: 16px;
      font-weight: normal;
      color: ${colors.white};
    `};

  ${(props) =>
    props.inactive &&
    css`
      color: ${colors.white};
    `};
`

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const Icon = styled(FaIcon)`
  margin-right: 10px;
`
