import React from 'react'

import * as SC from './styles'

interface CardProps {
  width?: number
  notification?: boolean
}

const Card: React.FC<CardProps> = ({
  children,
  width = 90,
  notification = false,
}) => {
  return (
    <SC.Container width={width} notification={notification}>
      {notification ? <SC.NotificationIcon /> : null}
      {children}
    </SC.Container>
  )
}

export default Card
