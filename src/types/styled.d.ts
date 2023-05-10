/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components';
import { ITheme } from 'types/theme-types';

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
