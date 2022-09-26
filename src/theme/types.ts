interface ColorScale {
  1: string
  2: string
  3: string
  4: string
}

interface ColorPalette {
  light: string
  default: string
  dark: string
}

export interface ColorsTheme {
  default: {
    black: string
    white: string
    gray: string
  }
  border: {
    subtle: string,
    avatar: string
  }
  ui: ColorScale
  text: ColorScale
  primary: ColorPalette
  error: ColorPalette
  success: ColorPalette
  warning: ColorPalette
  general: ColorPalette
  secondary: ColorPalette
  gradient: any
  shadow: any
  blur: any
}

// FONT

interface Font {
  fontSize: string
  lineHeight: string
  letterSpacing: string
}

interface FontSize {
  xlarge: Font
  large: Font
  medium: Font
  small: Font
  xsmall: Font
}
interface Weight {
  light: string
  regular: string
  medium: string
  semibold: string
}
export interface FontsTheme {
  primary: string
  secondary: string
  weight: Weight
  header: FontSize
  text: FontSize
  link: FontSize
  display: FontSize
}

export interface SpacingTheme {
  nano: string
  tiny: string
  xxxs: string
  xxs: string
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
  xxl: string
  xxxl: string
  huge: string
  giga: string
}

export interface BorderTheme {
  width: {
    thin: string
    thick: string
  }
  radius: {
    pill: string
    circle: string
    xxs: string
    xs: string
    sm: string
    md: string
  }
}

export interface DefaultTheme {
  border: BorderTheme
  colors: ColorsTheme
  fonts: FontsTheme
  spacings: SpacingTheme
}
