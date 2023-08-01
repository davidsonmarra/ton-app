import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
      label: string;
    };
    fonts: {
      primary: string;
    };
    fontSizes: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    fontWeights: {
      regular: number;
      medium: number;
      semiBold: number;
      bold: number;
    };
  }
}
