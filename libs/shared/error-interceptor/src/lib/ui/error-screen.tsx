import { Box, Typography } from '@mui/material';
import { Accordion, AccordionDetails, AccordionSummary, RouterLink } from '@ews-client/shared/ui';
import { PropsWithChildren } from 'react';
import { ErrorContainer } from './components/error-container';
import { RouteApp } from '@ews-client/shared/constants';

interface IErrorScreenProps {
  componentName: string;
  stackErrors: string,
}

export default function ErrorScreen(props: PropsWithChildren<IErrorScreenProps>): JSX.Element {
  return(
    <ErrorContainer>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Typography variant='h2' sx={{ color: 'text.primary' }}>:&nbsp;(</Typography>
        <Box>
          <Typography variant='h4'>Ошибка в приложении: {props.componentName}</Typography>
          <Typography>
            Мы уже оповестили отвественных за его работу сотрудников.
          </Typography>
          <Typography>
            При повторном возникновении ошибке создайте обращение обратной связи
          </Typography>
        </Box>
      </Box>
      <Accordion>
        <AccordionSummary>
          <Typography>stack error</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ whiteSpace: "pre-line" }}> {`${props.stackErrors}`}</Typography>
        </AccordionDetails>
      </Accordion>
      <RouterLink to={RouteApp.MAIN}>На главную</RouterLink>
    </ErrorContainer>
  )
}
