import React, { useState, createContext, useEffect } from 'react';

import { useBGLightingLocalStorage } from '../hooks/useBGLighting.hook';
import { theme } from '../theme';

const LightingContext = createContext();
const { Provider } = LightingContext;


const LightingProvider = ({ children }) => {
   const { lighting, setBGLightingStorage } = useBGLightingLocalStorage();

   const [lightingState, setLightingState] = useState(
      lighting.bg_lighting === 'light' ? 
         defaultLighting.colorLight : 
         defaultLighting.colorDark
   );
   
   useEffect(() => {
      setLightingState(
         lighting.bg_lighting === 'light' ? 
            defaultLighting.colorLight : 
            defaultLighting.colorDark
      )
   }, [lighting]);

   const setLightingInfo = (bg_lighting) => {
      
      try {
         setBGLightingStorage({bg_lighting: bg_lighting});
         setLightingState(
            bg_lighting === 'light' ?
            {
               bg_lighting: bg_lighting,
               color: theme.palette.common.dark_4,
               backgroundColor: '#fff'
            } :
            {
               bg_lighting: bg_lighting,
               color: theme.palette.common.light_bg,
               backgroundColor: theme.palette.common.dark_4,   
            });
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

const defaultLighting = {
   colorLight: {
      color_1: {
         color: theme.palette.common.dark_1,
         backgroundColor: theme.palette.common.light_bg
      },
      color_2: {
         color: theme.palette.common.dark_1,
         backgroundColor: theme.palette.common.light_bg
      }, 
      color_3: {
         color: theme.palette.common.dark_3,
         backgroundColor: theme.palette.common.light_bg       
      }, 
      color_4: {
         color: theme.palette.common.light_bg,
         backgroundColor: theme.palette.common.dark_1
      }, 
      color_5: {
         color: theme.palette.secondary.main,
         backgroundColor: theme.palette.common.light_bg
      },        
      color_6: {
         color: theme.palette.common.dark_4,
         backgroundColor: '#fff'
      },        
      color_7: {
         color: theme.palette.common.dark_4,
         backgroundColor: '#fff'
      },        
      // color_8: {
      //    color: theme.palette.common.dark_4,
      //    backgroundColor: '#fff'
      // }        
   },
   colorDark: {
      color_1: {
         color: theme.palette.common.light_bg,
         backgroundColor: theme.palette.common.dark_1            
      },
      color_2: {
         color: theme.palette.common.light_bg,
         backgroundColor: theme.palette.common.dark_4     
      }, 
      color_3: {
         color: theme.palette.common.light_bg,
         backgroundColor: theme.palette.common.dark_3         
      }, 
      color_4: {
         color: '#fff',
         backgroundColor: theme.palette.common.dark_1  
      }, 
      color_5: {
         color: theme.palette.common.light_bg,
         backgroundColor: theme.palette.common.dark_4         
      },
      color_6: {
         color: '#fff',
         backgroundColor: theme.palette.common.dark_3,         
      },        
      color_7: {
         color: theme.palette.common.light_bg,
         backgroundColor: theme.palette.common.dark_3,
      }     
   },   
}; 