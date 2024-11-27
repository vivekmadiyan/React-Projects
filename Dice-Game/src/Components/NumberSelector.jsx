import React, { useState } from 'react'
import styled from "styled-components"

function NumberSelector() {
    const[selectedNumber , setselectedNumber]=useState();
    const arrNumber =[1,2,3,4,5,6];
  

  return (
    <NumberSelectorContainer>
        <div className='flex'>
        {
            arrNumber.map((value,i)=>(<Box isSelected={value==selectedNumber}
            key={i} onClick={()=>setselectedNumber(value)}
            >{value}</Box>))
        }
        </div>
        <p>Select Number</p>
  
    </NumberSelectorContainer>
  )
}

export default NumberSelector
const NumberSelectorContainer=styled.div`
.flex{
 display: flex;
 gap: 24px;
}
 `;
 const Box=styled.div `
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(props)=>props.isSelected ? "black ": "white"};
    color: ${(props)=>props.isSelected ? "white ": "black"};
 `;