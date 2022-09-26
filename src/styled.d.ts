import 'styled-components'

import { BorderTheme, ColorsTheme, FontsTheme, SpacingTheme } from './theme/types'

declare module 'styled-components' {
  export interface DefaultTheme {
    border: BorderTheme
    colors: ColorsTheme
    fonts: FontsTheme
    spacings: SpacingTheme
  }
}
