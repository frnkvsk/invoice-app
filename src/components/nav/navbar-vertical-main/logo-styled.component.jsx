import * as React from 'react';

import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';

import { theme } from '../../../theme';
import { ReactComponent as IconLogo } from '../../../assets/logo.svg';

const Wrapper1 = styled(Box)({
   display: 'flex',
   alignItems: 'flex-end',
   justifyContent: 'flex-start',
   width: 75,
   height: 75,
   margin: 0,
   padding: 0,
   backgroundColor: theme.palette.primary.main,
   borderTopRightRadius: 18,
   borderBottomRightRadius: 18,   
});
const Wrapper2 = styled(Box)({
   display: 'flex',
   width: 75,
   height: 37,
   margin: 0,
   padding: 0,
   backgroundColor: theme.palette.primary.light,
   borderTopLeftRadius: 18,
   borderBottomRightRadius: 18,   
});

const IconLogoStyled = styled(IconLogo)({
   position: 'relative',
   top: -13,
   left: 25,
   margin: 0,
   padding: 0,
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