import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

import { theme } from '../../theme';
import { ReactComponent as IconPlus } from '../../assets/icon-plus.svg'
import { Box } from '@mui/system';

const ButtonStyled = styled(Button)({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-around',
   width: 'auto',
   height: 55,
   padding: 5,
   fontSize: 15,
   fontWeight: 'normal',
   color: theme.palette.common.light_bg,
   backgroundColor: theme.palette.primary.main,
   textTransform: 'none',
   border: 'none',
   borderRadius: 30,
   minWidth: 165,
   '&:hover': {
      backgroundColor: theme.palette.primary.light
   }
});

const IconWrapper = styled(Box)({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   width: '2.3em',
   height: '2.3em',
   backgroundColor: '#FFFFFF',
   borderRadius: 25,
   marginLeft: 0,
   marginRight: '0.5em' 
});

const Button1 = ({clickHandler}) => (
   <ButtonStyled
      onClick={clickHandler}>
      <IconWrapper>
         <IconPlus />
      </IconWrapper>               
      New Invoice
   </ButtonStyled>
);

export default Button1;