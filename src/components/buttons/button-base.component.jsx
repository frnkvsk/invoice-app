import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

import { theme } from '../../theme';

export const ButtonBase = ({children, clickHandler, otherStyles}) => {
   const ButtonStyled = styled(Button)({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      width: 'auto',
      height: 43,
      padding: '5px 18px 5px 18px',
      fontSize: 15,
      fontWeight: 'normal',
      textTransform: 'none',
      border: 'none',
      borderRadius: 30,
      minWidth: 75,
      ...theme.typography.body1,
      ...otherStyles
   });
   return (
      <ButtonStyled onClick={clickHandler}>
         {children}   
      </ButtonStyled>
   );
}