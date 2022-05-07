import React, {
  forwardRef,
  RefObject,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react'
import { TextInput, TextInputProps } from 'react-native'

import colors from '../../styles/colors'
import * as SC from './styles'

type IconColors = 'white' | 'black' | 'blue' | 'red' | 'grey'

export interface LeftIcon {
  icon?:
    | 'mail-outline'
    | 'lock-closed-outline'
    | 'mail' // FE
    | 'lock' // FE
    | 'smartphone' // FE
    | 'person-circle-outline'
    | 'phone-portrait-outline'
    | 'birthday-cake' // FA
    | 'transgender' // FA
    | 'id-badge' // FA
    | 'search'
  color?: IconColors
}

export interface RightIcon {
  icon?:
    | 'location-sharp'
    | 'pen' // FA5
    | 'calendar-o' // FA
    | 'close-circle-outline'
  // | 'eye'
  // | 'eye-off'
  color?: IconColors
  onPress?(): void
}

interface IInputProps extends TextInputProps {
  leftIcon?: LeftIcon
  rightIcon?: RightIcon
  error?: boolean
  label?: string | undefined

  password?: boolean
  rawValue?: string
  inputType?: 'default' | 'password'
  // infoText?: string;
}

interface IInputRef {
  focus(): void
}

const Input: React.ForwardRefRenderFunction<IInputRef, IInputProps> = (
  {
    leftIcon,
    rightIcon,
    error = false,
    label = undefined,

    password = false,
    rawValue = undefined,
    inputType = 'default',
    // infoText,
    ...rest
  },
  ref
) => {
  const [showPassword, setShowPassword] = useState(inputType === 'password')
  const inputElementRef = useRef(null) as RefObject<TextInput>
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  const isMasked = useMemo(() => {
    return !!rawValue
  }, [rawValue])

  const handleOnFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current?.focus()
    },
  }))

  const handleOnBlur = useCallback(() => {
    if (isMasked) {
      setIsFilled(!!rawValue)
    }

    setIsFocused(false)
  }, [isMasked, rawValue])

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  useEffect(() => {
    const handlePasswordInput = () => {
      if (password) {
        setShowPassword(true)
      } else {
        setShowPassword(false)
      }
    }

    handlePasswordInput()
  }, [password, isFilled, setShowPassword])

  const handleColor = (color: string) => {
    if (color === 'black') {
      return colors.black
    }
    if (color === 'white') {
      return colors.white
    }
    if (color === 'blue') {
      return colors.blue
    }
    if (color === 'red') {
      return colors.red
    }
    if (color === 'grey') {
      return colors.light_black
    }
    return undefined
  }

  return (
    <SC.Container focused={isFocused || isFilled} hasError={error}>
      {!leftIcon?.icon ? null : leftIcon?.icon === 'birthday-cake' ||
        leftIcon?.icon === 'transgender' ||
        leftIcon?.icon === 'id-badge' ? (
        <SC.FAIcon
          name={leftIcon?.icon ? leftIcon?.icon : ''}
          color={leftIcon?.color ? handleColor(leftIcon?.color) : colors.black}
          size={18}
        />
      ) : leftIcon?.icon === 'smartphone' ||
        leftIcon?.icon === 'lock' ||
        leftIcon?.icon === 'mail' ? (
        <SC.FIcon
          name={leftIcon?.icon ? leftIcon?.icon : ''}
          color={leftIcon?.color ? handleColor(leftIcon?.color) : colors.black}
          size={20}
        />
      ) : (
        <SC.Icon
          name={leftIcon?.icon ? leftIcon?.icon : ''}
          color={leftIcon?.color ? handleColor(leftIcon?.color) : colors.black}
          size={24}
        />
      )}
      <SC.InputText
        ref={inputElementRef}
        // onEndEditing={handleOnEndEditing}
        // style={inputStyleConfig}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        keyboardAppearance='dark'
        placeholder={label}
        placeholderTextColor={colors.dark_grey}
        secureTextEntry={showPassword}
        passwordInput={password}
        leftPadding={leftIcon?.icon}
        {...rest}
      />
      {password ? (
        <SC.Button onPress={handleShowPassword}>
          <SC.Icon
            name={showPassword ? 'eye' : 'eye-off'}
            color={colors.darkest_white}
            size={20}
          />
        </SC.Button>
      ) : !rightIcon?.icon ? null : rightIcon?.icon === 'calendar-o' ? (
        <SC.FAIcon
          name={rightIcon?.icon ? rightIcon?.icon : ''}
          color={
            rightIcon?.color ? handleColor(rightIcon?.color) : colors.black
          }
          size={18}
        />
      ) : rightIcon?.icon === 'pen' ? (
        <SC.F5Icon
          name={rightIcon?.icon ? rightIcon?.icon : ''}
          color={
            rightIcon?.color ? handleColor(rightIcon?.color) : colors.black
          }
          size={20}
        />
      ) : (
        <SC.Icon
          name={rightIcon?.icon ? rightIcon?.icon : ''}
          color={
            rightIcon?.color ? handleColor(rightIcon?.color) : colors.black
          }
          size={20}
        />
      )}
    </SC.Container>
  )
}

export default forwardRef(Input)
