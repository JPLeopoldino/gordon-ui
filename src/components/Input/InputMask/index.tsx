import React, { forwardRef, useCallback, useEffect, useState } from 'react'
import { TextInputProps as TextInputProperties } from 'react-native'
import { TextInputMask, TextInputMaskTypeProp } from 'react-native-masked-text'

import Input, { LeftIcon, RightIcon } from '../index'

interface IInputMaskProps extends TextInputProperties {
  type: TextInputMaskTypeProp
  // icon: string | undefined;
  // label?: string | undefined;
  leftIcon?: LeftIcon
  rightIcon?: RightIcon
  error?: boolean
  label?: string | undefined
}

interface IInputRef {
  focus(): void
}

const InputMask: React.ForwardRefRenderFunction<IInputRef, IInputMaskProps> = (
  { type, ...rest },
  ref
) => {
  const [value, setValue] = useState<string | undefined>('')
  const [rawValue, setRawValue] = useState('')
  const handleOnChangeText = useCallback((maskedValue, unmaskedValue) => {
    setValue(maskedValue)
    setRawValue(unmaskedValue)
  }, [])

  useEffect(() => {
    setValue(rest.value)
  }, [rest.value])

  return (
    <TextInputMask
      type={type}
      includeRawValueInChangeText
      value={value}
      onChangeText={handleOnChangeText}
      customTextInput={Input}
      customTextInputProps={{
        rawValue,
        ref,
        ...rest,
      }}
    />
  )
}
export default forwardRef(InputMask)
