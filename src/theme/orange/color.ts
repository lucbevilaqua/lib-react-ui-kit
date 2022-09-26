import { DefaultTheme } from 'styled-components'

export const colors: DefaultTheme['colors'] = {
  default: {
    black: '#262626',
    white: '#FAF9F7',
    gray: '#EAEAE7'
  },

  ui: {
    1: '#262626',
    2: '#2D2D2D',
    3: '#4F4F4F',
    4: '#747474'
  },

  text: {
    1: '#A5A5A5',
    2: '#DCDCDC',
    3: '#EAEAE7',
    4: '#F9F7F4'
  },

  border: {
    subtle: '#4F4F4F',
    avatar: '#545453'
  },

  primary: {
    dark: '#6C0D00',
    default: '#EC5F4C',
    light: '#FFAEA3'
  },

  error: {
    dark: '#A7001F',
    default: '#DE022B',
    light: '#FFB2C1'
  },
  success: {
    dark: '#006E2F',
    default: '#23CE6B',
    light: '#BCFFD8'
  },
  warning: {
    dark: '#8E6600',
    default: '#F9BD24',
    light: '#FFE7AA'
  },
  general: {
    default: '#747474',
    dark: '#4F4F4F',
    light: '#EAEAE7'
  },
  secondary: {
    default: '#60BFFF',
    dark: '#004A7C',
    light: '#A7DCFF'
  },
  gradient: {
    ui: 'linear-gradient(96.51deg, #262626 -1.07%, #1B1B1B 101.22%)',
    primary: 'linear-gradient(146.71deg, #EC5F4C 14.46%, #B95822 48.89%, #BDA44A 86.81%);',
    transparent:
      'linear-gradient(180deg, rgba(236, 95, 76, 0) 0%, rgba(236, 95, 76, 0.106) 100%), linear-gradient(180deg, rgba(13, 13, 13, 0.54) 0%, rgba(13, 13, 13, 0.9) 100%)',
    disabled: 'linear-gradient(180deg, rgba(13, 13, 13, 0.54) 0%, rgba(13, 13, 13, 0.9) 100%), #262626',
    alpha: {
      primary: 'linear-gradient(180deg, rgba(236, 95, 76, 0) 0%, rgba(236, 95, 76, 0.106) 100%), linear-gradient(180deg, rgba(13, 13, 13, 0.54) 0%, rgba(13, 13, 13, 0.9) 100%), #262626;'
    }
  },
  shadow: {},
  blur: {}
}
