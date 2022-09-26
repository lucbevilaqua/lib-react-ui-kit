import { SpacingTheme } from '../types'

import { toRem } from '../ui-kit'

export const spacings: SpacingTheme = {
  nano: toRem(2),
  tiny: toRem(4),
  xxxs: toRem(8),
  xxs: toRem(12),
  xs: toRem(16),
  sm: toRem(20),
  md: toRem(24),
  lg: toRem(32),
  xl: toRem(40),
  xxl: toRem(48),
  xxxl: toRem(64),
  huge: toRem(80),
  giga: toRem(128)
}
