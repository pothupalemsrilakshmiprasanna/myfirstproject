import React, { useState } from 'react'

const Formexample = () => {

const[userName, setuserName]=useState("")
const[newdetails, setnewdetails]=useState("")

const getuserName=(apple)=>{

setuserName(apple.target.value)
}
const userdetails=()=>{
    setnewdetails(userName)
}












  return (
    <section className="formsection">
        <div className='inputdiv'>
            <input type="text" placeholder="enter your name"onChange={getuserName} /><br/>


            <h2>{newdetails}</h2>
            <button className="submit" onClick={userdetails}>submit</button>
        </div>
    </section>
  )
}


export default Formexample
