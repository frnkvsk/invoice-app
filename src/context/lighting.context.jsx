import React, { useState, createContext } from 'react';

import { useBGLightingLocalStorage } from '../hooks/useBGLighting.hook';

const LightingContext = createContext();
const { Provider } = LightingContext;

const LightingProvider = ({ children }) => {
   const { lighting, setBGLightingStorage } = useBGLightingLocalStorage();

   const [lightingState, setLightingState] = useState(lighting);

   const setLightingInfo = (bg_lighting) => {
      try {
         setBGLightingStorage({bg_lighting: bg_lighting});
         setLightingState({bg_lighting: bg_lighting});
      } catch (error) {
         console.error(error);
      }
   }

   return (
      <Provider value={
         {
            lightingState,
            setLightingState: lightingInfo => setLightingInfo(lightingInfo)
         }
      }>
         {children}
      </Provider>
   );
}

export { LightingContext, LightingProvider };