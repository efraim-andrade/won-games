import React from 'react'

import Button from '~/components/Button'

import * as S from './styles'

export type BannerProps = {
  img: string
  title: string
  subtitle: string
  buttonLink: string
  buttonLabel: string
}

const Banner = ({
  img,
  title,
  subtitle,
  buttonLink,
  buttonLabel
}: BannerProps) => {
  return (
    <S.Container>
      <S.Image src={img} role="img" aria-label={title} />

      <S.Caption>
        <S.Title>{title}</S.Title>

        <S.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />

        <Button as="a" href={buttonLink} size="large">
          {buttonLabel}
        </Button>
      </S.Caption>
    </S.Container>
  )
}

export default Banner