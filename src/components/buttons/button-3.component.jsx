import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { theme } from '../../theme';

export const Button3 = styled(Button)({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-around',
   width: 'auto',
   height: 40,
   padding: 5,
   fontSize: 15,
   fontWeight: 'normal',
   color: theme.palette.secondary.main,
   backgroundColor: theme.palette.common.light_bg,
   textTransform: 'none',
   border: 'none',
   borderRadius: 30,
   minWidth: 75,
   '&:hover': {
      backgroundColor: theme.palette.secondary.light,
   }
});