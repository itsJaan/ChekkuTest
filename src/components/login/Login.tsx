
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import axios from 'axios';

const Div = styled.div`
    margin: auto;
    width: 60%;
    background-color: #3F4E4F;
    border: 3px solid #3F4E4F;
    padding: 10px;
    height: 500px;
    margin-top: 100px;
    `;  
const Title = styled.h1`
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    color: #DCD7C9;
    `;
const Form = styled.form`
    padding-top: 50px;
    padding-left: 200px;
    `;
const Label = styled.label`
    paddign-left: 100px;
    color: #DCD7C9 ;
    `;
const Input= styled.input`
    width:75%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    `;
const Button = styled.button`
    width: 37%;
    background-color: #A27B5C;
    color: white;
    padding: 14px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    `;

const Login:React.FC = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleValue =  (e:any) =>{
        switch(e.target.name){
            case "username":
                setUsername(e.target.value);
                break;
            case "password":
                setPassword(e.target.value);
                break;
            default:
                break;
        }
    };
    type loginResponse = {
        token: string;
    };
      
    const loginValidation = async (e:any) =>{
        try{
            e.preventDefault();
            const user = {
                username: username,
                password: password,

            };
            const {data, status} = await axios.post<loginResponse>("https://app.chekku.site/api/v2/auth/login", user);
            localStorage.setItem("authToken", data.token);
            console.log({data, status});
            if(status === 200){
                console.log("open dashboard");
                navigate("/dashboard");
            }
      }catch(error){
        console.log({error});
      }
    };

    return(
         <Div>
                <Title>Login</Title>
                <Form  method="POST" onSubmit={loginValidation}>
                    <Label>Username:</Label><br/>
                    <Input placeholder="username" name="username" onChange={handleValue}/><br/>
                    <Label>Password:</Label><br/>
                    <Input placeholder="password" name="password" type="password" onChange={handleValue}/><br/>
                    <Button type="submit">Login</Button>
                </Form>
            </Div>
    );
}
export default Login;
