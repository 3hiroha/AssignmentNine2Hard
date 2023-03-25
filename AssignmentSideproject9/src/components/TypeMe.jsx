import React, {useState} from 'react'
function TypeMe() {
    const[Focus,setFocus]=useState(false)
    const handleFocus=()=>{ setFocus(true)}
    const loseFocus=()=>{setFocus(false)}
  return (
    <div>
        <input type="text" onFocus={handleFocus} onBlur={loseFocus} placeholder="plz"/>
        {!Focus&& <p style={{color:"red"}}>Please type in here!</p>}
    </div>
  )
}
export default TypeMe
