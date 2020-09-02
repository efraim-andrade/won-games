import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title?: string

    colors: {
      primary: string
      secondary: string

      textWhite: string
      textBlack: string
      white: string

      success: string
      danger: string
      warning: string
    }
  }
}
