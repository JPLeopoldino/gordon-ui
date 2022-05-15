import styled from 'styled-components/native'

import colors from '../../styles/colors'

interface ContainerProps {
  width?: number
  notification?: boolean
}

export const Container = styled.View<ContainerProps>`
  position: relative;
  height: auto;
  width: ${(props) => props.width}%;
  padding: 20px 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.white};
  border-radius: 6px;
  z-index: 1;

  elevation: 4;
  /* filter: drop-shadow(0px 4px 8px rgba(17, 81, 87, 0.15)); */
`

export const NotificationIcon = styled.View`
  position: absolute;
  top: -5px;
  right: -5px;
  width: 20px;
  height: 20px;
  border-radius: 100px;
  border: 2.5px solid ${colors.white};
  background-color: ${colors.red};

  elevation: 4;
  /* filter: drop-shadow(0px 4px 8px rgba(17, 81, 87, 0.15)); */
`
