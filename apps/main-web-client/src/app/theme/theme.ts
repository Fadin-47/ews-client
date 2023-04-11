import { createTheme, ThemeOptions } from '@mui/material';

export enum ThemeMode {
  LIGHT = 'light',
  DARK = 'dark',
}

const globalTheme: ThemeOptions = {
  spacing: 8,
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: [
      'Arial'
    ].join(','),
    fontSize: 12,
    h1: {
      fontFamily: [
        'Arial'
      ].join(','),
      marginTop: 12,
    },
    h2: {
      fontFamily: [
        'Arial'
      ].join(','),
      marginTop: 8,
    },
    h3: {
      fontFamily: [
        'Arial'
      ].join(','),
      marginTop: 7,
    },
    h4: {
      fontFamily: [
        'Arial'
      ].join(','),
      marginTop: 6,
    },
    h5: {
      fontFamily: [
        'Arial'
      ].join(','),
      marginTop: 4,
    },
    h6: {
      fontFamily: [
        'Arial'
      ].join(','),
      marginTop: 4,
    },
    button: {
      textTransform: 'none',
    }
  }
}

const lightTheme: ThemeOptions = {
  ...globalTheme
}

const darkTheme: ThemeOptions = {
  palette: {
    mode: ThemeMode.DARK,
    background: {
      default: '#607d8b',
      paper: '#607d8b',
    }
  },
  ...globalTheme
}

export const theme = (mode: ThemeMode) => createTheme(mode === ThemeMode.LIGHT ? lightTheme : darkTheme)
