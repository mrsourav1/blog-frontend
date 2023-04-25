import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';

function Login() {
    const [email,setEmail]= useState();
    const [password,setPassword] = useState()
    const navigate= useNavigate()
    const token = localStorage.getItem('token');

    // const fetchData = async({email,password})=>{
    //     const response = await axios.post("http://localhost:8000/api/v1/login",{
    //         email,
    //         password
    //     })
    //     console.log(response)
    // }


    
    
    const fetchData = async ({ email, password }) => {
        try {
            const response = await axios.post('http://localhost:8000/api/v1/login', {
                email,
                password
            });
            console.log(response);
            const {token} = response.data
            // Navigate to another page on successful login
            localStorage.setItem('token', token);
            if(token){
                navigate('/write-blog');
            }
        } catch (error) {
            console.error(error);
            if (error.response && error.response.status === 400) {
                // Show toast message for wrong email/password
                toast("Wrong Credentials")
            } else {
                // Show toast message for other errors
                toast("Wrong Credentials")
            }
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchData({ email, password });
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            navigate('/write-blog');
        }
    }, []);




  return (
    <>
        <Form className='container' style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100vh"}} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value = {password} onChange={(e)=>setPassword(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>
        <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
        />
    </>
  );
}

export default Login;

// toast.Error("Wrong Username or Password")