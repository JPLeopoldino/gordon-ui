import React from 'react'

import * as SC from './styles'

interface ButtonProps {
  // label: string;
  onPress(): void
  type?: 'primary' | 'secondary' | 'red' | 'facebook'
  width?: number
  height?: number
  inactive?: boolean
  // icon?: 'facebook';
  fontSize?: number
}

const Button: React.FC<ButtonProps> = ({
  children,
  // label,
  onPress,
  type = 'primary',
  width = 90,
  height = 48,
  inactive = false,
  // icon,
  fontSize = 18,
}) => {
  return (
    <SC.Button
      type={type}
      inactive={inactive}
      width={width}
      height={height}
      onPress={onPress}
      disabled={inactive}
    >
      <SC.Container>
        {/* {icon ? (
          <SC.Icon name={icon ? icon : ''} size={18} color="#FFF" />
        ) : null} */}
        <SC.Label fontSize={fontSize} type={type} inactive={inactive}>
          {children}
        </SC.Label>
      </SC.Container>
    </SC.Button>
  )
}

export default Button
