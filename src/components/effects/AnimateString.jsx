import { useState, useEffect } from "react";

const AnimateString = props => {
  const [string, setString] = useState(''); 

  const arrStr = props.str.split('');  

  useEffect(()=>{
    if (string.length === 0) setTimeout(() => setString(() => string + arrStr[string.length]), 1500);
    if (string.length !== 0 && string.length < arrStr.length){      
        setTimeout(()=>setString(()=>string+arrStr[string.length]),50);
      }      
    },[string]
  )
  return (
    <span>
      {string}
    </span>
  );
}

export default AnimateString;
