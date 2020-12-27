import React, { useState } from 'react';

const StateHook = (val)=>{
  const [data,setData]=useState(val)
  const inputData=(e)=>{
    setData(e.target.value)
  }
  const clear=()=>{
    setData("")
  }

  return([data,inputData,clear])
}

export default StateHook;