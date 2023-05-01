import "styled-components";

declare module "*.ttf";
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      gray300: string;
      gray200: string;
      gray100: string;
      gray400: string;
      gray500: string;
      white: string;
      pink: string;
      skyblue: string;
      orange: string;
      mint: string;
      lightred: string;
      lightblue: string;
      purple: string;
      black: string;
      success: string;
      update: string;
      failure: string;
    };
    fontWeight: {
      normal: number;
      medium: number;
      semibold: number;
      bold: number;
      extrabold: number;
    };
  }
}
