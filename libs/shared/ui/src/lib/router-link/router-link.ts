import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";

export const RouterLink = styled(Link)(({theme}) => ({
  textDecoration: 'none',
  marginLeft: theme.spacing(1),
  marginRight: theme.spacing(1),
  color: theme.palette.primary.main,
  ':hover': {
    textDecoration: 'underline',
  },
}))
