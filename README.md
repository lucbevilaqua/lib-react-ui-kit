# React UI Kit
Library with general components, icons and typography using react.

## 📦 Install

```bash
npm install lucbevilaqua-react-ui-kit
```

```bash
yarn add lucbevilaqua-react-ui-kit
```

## 🔨 Usage

```jsx
import { Button } from 'lucbevilaqua-react-ui-kit';

const App = () => (
  <>
    <Button shape="primary">Hello Hord</Button>
  </>
);
```

And import style theme manually in `_app.tsx`:

```jsx
import { orangeTheme } from 'lucbevilaqua-react-ui-kit';

<ThemeProvider
  theme={orangeTheme}
>
  // your code
</ThemeProvider>
```

### TypeScript

`lucbevilaqua-react-ui-kit` is written in TypeScript with complete definitions.

### Storybook

`lucbevilaqua-react-ui-kit` uses storybook for component visualization.
![image](https://user-images.githubusercontent.com/77061281/193292316-80e0c3de-676a-4e01-bf11-c77d78381e49.png)

## ⌨️ Development
Clone locally:

```bash
$ npm install
$ npm run storybook
```

Open your browser and visit http://localhost:6006 and check storybook.

