import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
import { ToastContainer, toast, Slide } from "react-toastify";
import { Form, Button } from 'react-bootstrap'
import './Login.css'
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const navigate = useNavigate()
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')
 
  const onSubmit = (event) => {
    event.preventDefault() 
    const passwordPattern =
      /^(?=.*[a-zA-Z])(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]{7,}$/;
    if (
      email === "" ||
      !email.includes("@") ||
      !email.includes(".") ||
      email.startsWith("@") ||
      email.slice(email.lastIndexOf(".") + 1).length < 2
    ) {
      toast.error("🤨 Enter a valid Email", {
        position: "top-center",
        autoClose: 1500,
        transition: Slide,
      });
    } else if (!passwordPattern.test(password)) {
      toast.error("😣 Invalid Password", {
        position: "top-center",
        autoClose: 1500,
        transition: Slide,
      });
    }else {
      Swal.fire({
        icon: 'success',
        title: 'Login success',
        text: 'Welcome to AdTech',
        showConfirmButton: false,
        timer: 2500
      });
      navigate('/home')
  }
  }

  return (
    <div className='login_wrapper'>
       <Form className='loginForm'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
          <input
            type='email'
            placeholder='Enter mail Id'
            value={email}
            onChange={(event)=> setEmail(event.target.value)}
          />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <input
            type='password'
            placeholder='Enter Password'
            value={password}
            onChange={(event)=> setPassword(event.target.value)}
          />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={onSubmit}>
        Login
      </Button>
      </Form>
      <ToastContainer />
    </div>
  )
}

export default Login
