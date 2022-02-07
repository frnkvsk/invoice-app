import React, {useContext, useEffect, useState} from 'react';

import { ButtonBase } from './button-base.component';
import { LightingContext } from '../../context/lighting.context';

const Button3 = ({children, clickHandler}) => {
   const lightingContext = useContext(LightingContext);
   const [lightingState, setLightingState] = useState(lightingContext.lightingState);

   useEffect(() => {
      setLightingState(lightingContext.lightingState);
   }, [lightingContext.lightingState]);

   return (
      <ButtonBase
         otherStyles={{
            ...lightingState.color_5,
            '&:hover': {
               ...lightingState.color_9,
            }
         }}
         clickHandler={clickHandler}
         children={children} />
   )
}

export default Button3;