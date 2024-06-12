import React, { useState } from 'react'

export default function Usesstate() {

  const [state,setState] = useState(0);


  if(state ===1){
    return(
      <div>
        <img src="data:image/jpeg;base64,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" alt="" />
      </div>
    ) 
  }
  if(state ===2){
    return(
      <div>
        <img src="https://www.bing.com/th?id=OIP.CvMAeJSHI_WeUIJD8x32QAHaEZ&w=159&h=100&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="" />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur est sit accusamus repellendus iusto, necessitatibus libero quae reiciendis ea, obcaecati fugiat illum corporis sapiente voluptates esse numquam cum aliquam quod!</p>
      </div>
    ) 
  }
  return (
    <div>
       <button
          onClick={()=>setState(1)}
       >State 1</button>
       
       <button 
          onClick={()=>setState(2)}
          
       >State 2</button>
    </div>
  )
  
}
