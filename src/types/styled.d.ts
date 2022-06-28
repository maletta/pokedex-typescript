import "styled-components";
import { ITheme } from "hooks/ThemeContext";

declare module "styled-components" {
  export interface DefaultTheme extends ITheme {}
}
