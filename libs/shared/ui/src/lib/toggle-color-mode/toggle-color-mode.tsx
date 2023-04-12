import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import { IconButton, useTheme } from '@mui/material';
import { ThemeMode } from '@ews-client/shared/constants';

export function ToggleColorMode({ onColorMode }: {
  onColorMode: () => void
}):JSX.Element {
  const { palette: { mode } } = useTheme();
  const handleColorMode = () => {
    onColorMode();
  }

  return (
    <IconButton
      onClick={handleColorMode}
      color='inherit'
    >
      {mode === ThemeMode.LIGHT ? <DarkModeRoundedIcon/> : <LightModeRoundedIcon/>}
    </IconButton>
  );
}
