import React, { useEffect, useContext, useState } from 'react';

import { ButtonBase } from './button-base.component';
import { LightingContext } from '../../context/lighting.context';

const Button3 = ({children, clickHandler}) => {
   const lightingContext = useContext(LightingContext);
   const [lightingState, setLightingState] = useState({});
   
   useEffect(() => {
      setLightingState(
         lightingContext.lightingState
      )
   }, [lightingContext.lightingState]);
   
   return (
      <ButtonBase
         otherStyles={lightingState.color_5}
         clickHandler={clickHandler}
         children={children} /> 
   );
   
};

export default Button3;