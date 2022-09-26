import { addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import { withThemes } from '@react-theming/storybook-addon';

import GlobalStyle from "../src/styles/global";
import { orangeTheme } from "../src/theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: orangeTheme.colors.ui[2],
      },
      {
        name: 'bg',
        value: orangeTheme.colors.text[4],
      },
      {
        name: 'black',
        value: '#000000',
      },
      {
        name: 'white',
        value: '#ffffff',
      },
    ],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const onThemeSwitch = context => ({
    parameters: { backgrounds: null },
  }
);

const providerFn = ({ theme, children }) => {
  return <>
    <link href="/orange-fonts.css" rel="stylesheet" />
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  </>
};

addDecorator(withThemes(null, [orangeTheme], { providerFn, onThemeSwitch }));
