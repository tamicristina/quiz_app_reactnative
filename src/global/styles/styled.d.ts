import styled from "styled-components";
import theme from "./theme";

//sobrescreve o tema padrão
declare module 'styled-components' {
  type ThemeType = typeof theme

  export interface DefaultTheme extends ThemeType { }
}