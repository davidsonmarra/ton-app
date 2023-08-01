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
      primary: {
        regular: string;
        medium: string;
        semiBold: string;
        bold: string;
      };
    };
    fontSizes: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      xxxl: string;
    };
  }
}
