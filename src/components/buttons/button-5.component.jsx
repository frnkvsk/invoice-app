import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { theme } from '../../theme';

export const Button5 = styled(Button)({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-around',
   width: 'auto',
   height: 40,
   padding: 5,
   fontSize: 15,
   fontWeight: 'normal',
   color: theme.palette.secondary.light,
   backgroundColor: theme.palette.warning.main,
   textTransform: 'none',
   border: 'none',
   borderRadius: 30,
   minWidth: 80,
   '&:hover': {
      backgroundColor: theme.palette.info.main,
   }
});