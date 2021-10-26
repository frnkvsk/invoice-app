import { useState } from 'react';

const useBGLightingLocalStorage = () => {
   const defaultLighting = {bg_lighting: 'light'};
   let ls = JSON.parse(localStorage.getItem('bg_lighting')) || defaultLighting;

   const [lighting, setLightDark] = useState(ls);

   const setBGLightingStorage = (newBGLighting) => {      
      setLightDark(newBGLighting);
      localStorage.setItem('bg_lighting', JSON.stringify(newBGLighting) || JSON.stringify(defaultLighting));
   };
   return {lighting, setBGLightingStorage};
}

export { useBGLightingLocalStorage };