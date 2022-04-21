import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      gradient: string;
      gray: string;
      gray_dark: string;
      gray_light: string;
      purple: string;
      white: string;
      white_200: string;
    };
  }
}
