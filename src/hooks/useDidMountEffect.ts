import { useEffect, useState } from "react"

export const useDidMountEffect = (func:()=>void, deps:any[]) => {
    const [skipCount, setSkipCount] = useState(true);

    useEffect(()=>{
        if(skipCount) setSkipCount(false);
        if(!skipCount) func(); 
    },deps)
}