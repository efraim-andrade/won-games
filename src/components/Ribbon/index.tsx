import React from 'react'

import * as S from './styles'

export type RibbonColors = 'primary' | 'secondary'
export type RibbonSizes = 'normal' | 'small'

export type RibbonProps = {
  children: React.ReactNode
  color?: RibbonColors
  size?: RibbonSizes
}

const Ribbon = ({
  children,
  size = 'normal',
  color = 'primary'
}: RibbonProps) => {
  return (
    <S.Container color={color} size={size}>
      {children}
    </S.Container>
  )
}

export default Ribbon
