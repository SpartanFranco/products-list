import { useEffect, useState } from "react";



export const useWidthScreen=()=>{
    const [width, setWidth] = useState(innerWidth);
   

    useEffect(() => {

    const hanldeResize=()=>{
        setWidth(innerWidth)
    }
      window.addEventListener('resize',hanldeResize)
    
      return () => {
        window.removeEventListener('resize',hanldeResize)
      }
    }, [width])
    return [width]
}