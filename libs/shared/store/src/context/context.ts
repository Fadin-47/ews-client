import { createContext } from 'react';
import { ThemeMode } from '@ews-client/shared/constants';

export const ColorContext = createContext({
  mode: ThemeMode.LIGHT,
  handelColorMode: () => {
    // do nothing.
  }
});
