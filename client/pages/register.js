import {useState} from 'react'

const register = () => {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [phone,setPhone]=useState('');
  const [password,setPassword]=useState('');
  const [Conpassword,setConfirmPassword]=useState('');
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.table({name,email,phone,password,Conpassword})
  }
  return (
    <div>

        <h1 className="jumbotron bg-primary square text-center">Register </h1>
        <div className="container col-md-4 offset-md-4 pb-5">
            <form onSubmit={handleSubmit}>
              <input type='text' className="form-control mb-4 p-4" value={name} onChange={e=>setName(e.target.value)} placeholder="Enter name"/>
              <input type='email' className="form-control mb-4 p-4" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Enter name"/>
              <input type='phone' className="form-control mb-4 p-4" value={phone} onChange={e=>setPhone(e.target.value)} placeholder="Enter Phone NO."/>
              <input type='password' className="form-control mb-4 p-4" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Enter Password"/>
              <input type='password' className="form-control mb-4 p-4" value={Conpassword} onChange={e=>setConfirmPassword(e.target.value)} placeholder="Confirm Password"/>
              <br/>
              <button type='submit' className='btn btn-block btn-primary'> Submit</button>
            </form>
        </div>
    </div>
  )
}

export default register