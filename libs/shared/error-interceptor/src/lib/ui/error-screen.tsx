import { Box, Typography } from '@mui/material';
import { Accordion, AccordionDetails, AccordionSummary } from '@ews-client/shared/ui';
import { PropsWithChildren } from 'react';

interface IErrorScreenProps {
  componentName: string;
  stackErrors: string,
}

export default function ErrorScreen(props: PropsWithChildren<IErrorScreenProps>): JSX.Element {
  console.log('stackErrors',props.stackErrors.toString())
  return(
    <Box>
      :(
      <Typography>Ошибка в компонете: {props.componentName}</Typography>
      <Accordion>
        <AccordionSummary>
          <Typography>Stack error</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ whiteSpace: "pre-line" }}> {`${props.stackErrors}`}</Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}
