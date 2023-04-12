import { HeaderContainer, ToggleColorMode } from '@ews-client/shared/ui';
import { Box, Typography } from '@mui/material';
import { useContext } from 'react';
import { ColorContext } from '@ews-client/shared/store';


export function Header() {
  const { handelColorMode } = useContext(ColorContext)
  return (
    <HeaderContainer>
      <Typography variant='h5'>Рабочее место инженера</Typography>
      <Box>Ф.А.</Box>
      <ToggleColorMode onColorMode={handelColorMode} />
    </HeaderContainer>
  );
}

export default Header;
