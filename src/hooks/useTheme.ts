import { useContext } from "react";
import { ThemeContext } from '../cotext/ThemeCotext';

export const useTheme = () => useContext(ThemeContext);