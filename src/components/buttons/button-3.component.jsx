import React, { useEffect, useContext, useState } from 'react';

import { theme } from '../../theme';
import { ButtonBase } from './button-base.component';
import { LightingContext } from '../../context/lighting.context';

const Button3 = ({children, clickHandler}) => {
   const lightingContext = useContext(LightingContext);
   const [lightingState, setLightingState] = useState({});
   
   useEffect(() => {
      setLightingState(
         lightingContext.lightingState.bg_lighting === 'light' ? 
         {
            color: theme.palette.secondary.main,
            backgroundColor: theme.palette.common.light_bg,
            '&:hover': {
               backgroundColor: theme.palette.secondary.light
            }
         } :
         {
            color: theme.palette.secondary.light,
            backgroundColor: theme.palette.common.dark_1,
            '&:hover': {
               color: theme.palette.secondary.main,
               backgroundColor: theme.palette.secondary.light
            }
         }
      )
   }, [lightingContext.lightingState.bg_lighting]);
   
   return (
      <ButtonBase
         otherStyles={lightingState}
         clickHandler={clickHandler}
         children={children} /> 
   );
   
};

export default Button3;