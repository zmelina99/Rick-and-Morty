import React, {useState} from 'react'
import style from './Subscribe.module.css'

export const validate = (input) => {
  let errors = {};
  if(!input.name){
    errors.name = 'Your name is required'
  }
  if (!input.email) {
    errors.email = 'Username is required';
  } else if (!/\S+@\S+\.\S+/.test(input.email)) {
    errors.username = 'Email must be an email';
  }
  if (!input.password) {
    errors.password = 'Password is required';
  } else if (!/(?=.*[0-9])/.test(input.password)) {
    errors.password = 'Password is invalid';
  }
  if(!input.cPassword){
    errors.cPassword = 'Please, confirm your password'
  }
  else if (input.cPassword !== input.password){
    errors.cPassword = "Oops passwords don't match"
  }

  return errors;

};

export default function Form() {
  const [input, setInput] = useState({ name: '', email: '', password: '', cPassword: '' });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    setErrors( validate({ ...input, [e.target.name]: e.target.value }) );
  };
  
    
  return (

    <form className= {style.form} >
      <div>
        <label className={style.text}>
          Name:
        </label>

        <input className = {style.box}
          className={`${errors.name && 'danger'}`}
          type="text"
          name="name"
          value={input.name}
          onChange={handleInputChange}
        />
          {errors.name && (
          <p className="danger">{errors.name}</p>
        )}
         <label className={style.text}>
          Email:
        </label>

        <input className = {style.box}
          className={`${errors.email && 'danger'}`}
          type="text"
          name="email"
          value={input.email}
          onChange={handleInputChange}
        />

      
         {errors.email && (
          <p className="danger">{errors.email}</p>
        )}

      </div>
      <div>

        <label className={style.text}>
          Password:
        </label>
        <input className = {style.box}
          className={`${errors.password && 'danger'}`}
          type="password"
          name="password"
          value={input.password}
          onChange={handleInputChange}
        />
        {errors.password && (
          <p className="danger">{errors.password}</p>
        )}
         <label className={style.text}>
          Confirm password:
        </label>

        <input className = {style.box}
          className={`${errors.cPassword && 'danger'}`}
          type="password"
          name="password"
          value={input.cPassword}
          onChange={handleInputChange}
        />
        
         {errors.cPassword && (
          <p className="danger">{errors.cPassword}</p>
        )}

      </div>

      <input type="submit" />
    </form>
  )
}