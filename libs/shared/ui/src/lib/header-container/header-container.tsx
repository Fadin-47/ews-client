import { AppBar, Container } from '@mui/material';
import { PropsWithChildren } from 'react';
import { styled } from '@mui/material/styles';

const BlurAppBar = styled(AppBar)(({theme}) => ({
  boxShadow: 'none',
  backdropFilter: 'blur(1.7px)',
  background: theme.palette.background.default,
  color: theme.palette.text.primary,
  position: 'sticky',
}))

const CustomizedContainer = styled(Container)(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
}))


export function HeaderContainer(props: PropsWithChildren): JSX.Element {
  return (
    <BlurAppBar>
      <CustomizedContainer maxWidth='xl'>
        {props.children}
      </CustomizedContainer>
    </BlurAppBar>
  );
}
