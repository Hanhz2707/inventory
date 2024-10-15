import type { Config } from "tailwindcss";
import {createThemes} from 'tw-colors';
import colors from 'tailwindcss/colors';
import { create } from "domain";


const baseColors = [
  'gray',
  'red',
  'yellow',
  'green',
  'blue',
  'indigo',
  'purple',
  'pink',

]



const shadeMapping = {
  '50': '900',
  '100': '800',
  '200': '700',
  '300': '600',
  '400': '500',
  '500': '400',
  '600': '300',
  '700': '200',
  '800': '100',
  '900': '50',
}
/*  Showing how swap shades when changing between light and dark.
    Such as: 50 in light theme is 900 in dark theme.
    ** shade = light || dark */



const generateThemeObject = (colors: any, mapping: any, invert = false) => {
  const theme: any = {};
  // Storing all the colors  mappings for the theme

  baseColors.forEach((color) => {
    theme[color] = {};
    // Creating theme object for each items in baseColors
    const entries = Object.entries(mapping);
    // entries = [ ['50', '900'], ['100', '800'], ...]
    entries.forEach(([key, value]: any) => {
      // key = 50, value = 900
      const shadeKey = invert ? value : key;
      // If invert is true, shadeKey = value, else shadeKey = key
      theme[color][key] = colors[color][shadeKey];
    });
  });
  return theme;
}

const lightTheme = generateThemeObject(colors, shadeMapping);
const darkTheme = generateThemeObject(colors, shadeMapping, true);

const themes = {
  light: {
    ...lightTheme,
    white: '#ffffff'
  },
  dark: {
    ...darkTheme,
    white: colors.gray['950'],
    black: colors.gray['50']
  }
}

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [createThemes(themes)],
};
export default config;
