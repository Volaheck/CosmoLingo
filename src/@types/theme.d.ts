import 'styled-components';
import { Color } from 'views/types/theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Record<Color, string>;
    fonts: {
      primary: string;
      sizes: {
        title: string;
        subtitle: string;
        input: string;
      };
    };
    gutter: {
      small: string;
      medium: string;
      elements: string;
    };
  }
}
