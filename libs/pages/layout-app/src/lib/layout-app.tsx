import { Header } from '@ews-client/widgets/header';
import { Container } from '@mui/material';
import { Outlet } from 'react-router';
import { Fragment } from 'react';

export function LayoutApp() {
  return (
    <Fragment>
      <Header/>
      <Container maxWidth='xl'>
        <Outlet/>
      </Container>
    </Fragment>
  );
}

