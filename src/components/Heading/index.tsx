import React from 'react'

import * as S from './styles'

export type HeadingProps = {
  color?: 'white' | 'black'
  lineLeft?: boolean
  lineBottom?: boolean
  children: React.ReactNode
}

const Heading = ({
  children,
  color = 'white',
  lineLeft = false,
  lineBottom = false
}: HeadingProps) => {
  return (
    <S.Container color={color} lineLeft={lineLeft} lineBottom={lineBottom}>
      {children}
    </S.Container>
  )
}

export default Heading
