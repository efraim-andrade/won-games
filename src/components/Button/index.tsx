import React from 'react'

import * as S from './styles'

export type ButtonProps = {
  children?: React.ReactNode
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  icon?: JSX.Element
  onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = ({
  children,
  size = 'medium',
  fullWidth,
  icon,
  ...props
}: ButtonProps) => {
  return (
    <S.Container fullWidth={fullWidth} size={size} hasIcon={!!icon} {...props}>
      {!!icon && icon}
      {!!children && <span>{children}</span>}
    </S.Container>
  )
}

export default Button
