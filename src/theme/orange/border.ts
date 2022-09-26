import { DefaultTheme } from '../types'
import { toRem } from '../ui-kit'

export const border: DefaultTheme['border'] = {
  radius: {
    circle: '50%',
    pill: toRem(999),
    xxs: toRem(8),
    xs: toRem(16),
    sm: toRem(24),
    md: toRem(32)
  },
  width: {
    thin: toRem(1),
    thick: toRem(2)
  }
}
