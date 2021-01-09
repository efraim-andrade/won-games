import SlickSlider, { Settings } from 'react-slick'

import * as S from './styles'

export type SliderSettings = Settings

export type SliderProps = {
  children: React.ReactNode
  settings: SliderSettings
}

const Slider = ({ children, settings }: SliderProps) => {
  return (
    <S.Container>
      <SlickSlider {...settings}>{children}</SlickSlider>
    </S.Container>
  )
}

export default Slider
