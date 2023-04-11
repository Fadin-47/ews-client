import { Box, styled } from '@mui/material';

export const ErrorContainer = styled(Box)(({theme})=> ({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  flex: '1 0 80%',
  gap: theme.spacing(1),
  paddingTop: '7vw'
}))
