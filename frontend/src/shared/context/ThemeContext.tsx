import { createContext } from "react";
import type { Theme } from "../types/theme";

export interface ThemeContextValue {
  theme: Theme;
  changeTheme: (theme:Theme) => void;
} 

export const ThemeContext = createContext<ThemeContextValue | undefined>(
  undefined,
);
