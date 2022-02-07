import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';

import { theme } from '../../theme';
import { ReactComponent as IconPlus } from '../../assets/icon-plus.svg'
import { ButtonBase } from './button-base.component';

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

const Button1 = ({children, clickHandler}) => (
   <ButtonBase
      otherStyles={{
         color: theme.palette.common.light_bg,
         backgroundColor: theme.palette.primary.main,
         '&:hover': {
            backgroundColor: theme.palette.primary.light
         }
      }}
      clickHandler={clickHandler}
      children={children}
      >
      <IconWrapper>
         <IconPlus />
      </IconWrapper> 
         {children}
      </ButtonBase>  
);

export default Button1;