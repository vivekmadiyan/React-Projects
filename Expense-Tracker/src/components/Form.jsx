import React from 'react'

function Form() {
  return (
    <div>
      <h2>Add new Transction</h2>
      <form action="">
        <label htmlFor="Enter Description">Enter Description</label><br />
        <input type="text"  />
        
      </form>
      <form action="">
        <label htmlFor="Enter Amount">Enter Amount</label><br />
        <input type="number" />
        
      </form>
      <form action="">
        <input type="radio" name="" id="" /> Expenses
        <input type="radio" name="" id="" /> Income
        
      </form>
     <form>
        <input type="submit" value="Submit" />    
        </form>
      
    </div>
  )
}

export default Form
