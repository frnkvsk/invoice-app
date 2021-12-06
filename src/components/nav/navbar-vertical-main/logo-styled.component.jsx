import * as React from 'react';

import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';

import { theme } from '../../../theme';
import { ReactComponent as IconLogo } from '../../../assets/logo.svg';

const Wrapper1 = styled(Box)({
   display: 'flex',
   alignItems: 'flex-end',
   justifyContent: 'flex-start',
   width: 100,
   height: 100,
   margin: 0,
   padding: 0,
   backgroundColor: theme.palette.primary.main,
   borderTopRightRadius: 18,
   borderBottomRightRadius: 18,   
});
const Wrapper2 = styled(Box)({
   display: 'flex',
   width: 100,
   height: 55,
   margin: 0,
   padding: 0,
   backgroundColor: theme.palette.primary.light,
   borderTopLeftRadius: 18,
   borderBottomRightRadius: 18,   
});

const IconLogoStyled = styled(IconLogo)({
   position: 'relative',
   top: -11,
   left: 38,
   margin: 0,
   padding: 0,
   transform: 'scale(1.5)'
});

export default function LogoStyled() {
  return (    
      <Wrapper1>
         <Wrapper2>
            <IconLogoStyled />
         </Wrapper2>               
      </Wrapper1>    
  );
};