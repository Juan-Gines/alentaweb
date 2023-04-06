import { useState, useEffect } from "react";

const AnimateString = props => {
  const [string, setString] = useState(''); 

  const arrStr = props.str.split('');  

  useEffect(()=>{
    if (string.length < arrStr.length){      
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
