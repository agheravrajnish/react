import React, { useState } from 'react'

const Basicform = () => {
  const [email, setEmail] = useState("")
  const [password, setpassword] = useState("")

  const [allEntry, setallEntry] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();

    if (email && password) {
      const newEntry = { id: new Date().getTime().toString(), email, password };

      setallEntry([ ...allEntry, newEntry]);
      console.log(allEntry);
  
      setEmail("");
      setpassword("");
    } else {
        alert("plz fill the data");
    }

    

  }
  return (
   
    <div className='vraj'>
       <form action="" onSubmit={submitForm}>
        <div>
        <label className='hello' htmlFor='Login Form'>Login Form</label>
          <label className='inem' htmlFor="email">Email</label>
            <input className='em' type="text" name="email" id="email" autoCorrect="off"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               />
        </div>

        <div>
          <label htmlFor="password">Password</label>
           <input className='ps' type="password" name="password" id="password" autoCorrect="off"
               value={password}
               onChange={(e) => setpassword(e.target.value)}
               />
        </div>
        
        
        
        <button className='login' type="submit">Login</button>
        

       </form>

       <div className='out'>
        {
          allEntry.map((curElem) => {
            const { id, email, password } = curElem;
            
            return (
              <div className="showDataStyle" key={id}>
              <p>Email :    {email}</p>
              
               <p>Password :   {password}</p> 
              </div>
            )

          })
        }
       </div>
    </div>
   
  )
}


export default Basicform
