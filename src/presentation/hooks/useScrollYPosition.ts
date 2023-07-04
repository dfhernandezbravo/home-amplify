import { useEffect, useState } from "react";

const useScrollYPosition = ()=> {
    
    const [ positionY, setPositionY] = useState(false);
  
    useEffect(
      () => { 
        const handler = ()=> setPositionY(window.scrollY > 800);
        window.addEventListener('scroll', handler);
  
        return () => window.removeEventListener('scroll', handler);
      },
      [], 
    );
  
    return positionY;
  }
  export default useScrollYPosition;