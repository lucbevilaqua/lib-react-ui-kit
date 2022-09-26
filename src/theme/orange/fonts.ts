import { DefaultTheme } from 'styled-components'

import { toRem } from '../ui-kit'

export const fonts: DefaultTheme['fonts'] = {
  primary: 'Tungsten, sans-serif', // Display
  secondary: 'Akzidenz, sans-serif', // Link

  weight: {
    light: '300',
    regular: '400',
    medium: '500',
    semibold: '600'
  },

  header: {
    xlarge: {
      fontSize: toRem(32),
      lineHeight: toRem(36),
      letterSpacing: toRem(1)
    },
    large: {
      fontSize: toRem(28),
      lineHeight: toRem(32),
      letterSpacing: toRem(1)
    },
    medium: {
      fontSize: toRem(24),
      lineHeight: toRem(28),
      letterSpacing: toRem(1)
    },
    small: {
      fontSize: toRem(20),
      lineHeight: toRem(24),
      letterSpacing: toRem(1)
    },
    xsmall: {
      fontSize: toRem(17),
      lineHeight: toRem(24),
      letterSpacing: toRem(1)
    }
  },

  text: {
    xlarge: {
      fontSize: toRem(20),
      lineHeight: toRem(24),
      letterSpacing: toRem(0)
    },
    large: {
      fontSize: toRem(17),
      lineHeight: toRem(24),
      letterSpacing: toRem(0)
    },
    medium: {
      fontSize: toRem(15),
      lineHeight: toRem(24),
      letterSpacing: toRem(0)
    },
    small: {
      fontSize: toRem(13),
      lineHeight: toRem(20),
      letterSpacing: toRem(0)
    },
    xsmall: {
      fontSize: toRem(12),
      lineHeight: toRem(16),
      letterSpacing: toRem(0)
    }
  },

  link: {
    xlarge: {
      fontSize: toRem(20),
      lineHeight: toRem(24),
      letterSpacing: toRem(0)
    },
    large: {
      fontSize: toRem(17),
      lineHeight: toRem(24),
      letterSpacing: toRem(0)
    },
    medium: {
      fontSize: toRem(15),
      lineHeight: toRem(24),
      letterSpacing: toRem(0)
    },
    small: {
      fontSize: toRem(13),
      lineHeight: toRem(20),
      letterSpacing: toRem(0)
    },
    xsmall: {
      fontSize: toRem(12),
      lineHeight: toRem(16),
      letterSpacing: toRem(0)
    }
  },

  display: {
    xlarge: {
      fontSize: toRem(64),
      lineHeight: toRem(72),
      letterSpacing: toRem(1)
    },
    large: {
      fontSize: toRem(48),
      lineHeight: toRem(56),
      letterSpacing: toRem(1)
    },
    medium: {
      fontSize: toRem(40),
      lineHeight: toRem(48),
      letterSpacing: toRem(1)
    },
    small: {
      fontSize: toRem(32),
      lineHeight: toRem(36),
      letterSpacing: toRem(1)
    },
    xsmall: {
      fontSize: toRem(28),
      lineHeight: toRem(32),
      letterSpacing: toRem(1)
    }
  }
}
