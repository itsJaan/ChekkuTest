
import axios from 'axios';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Button, Div, Form, Input, Label, Title } from "../StyledComponents";



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
            if(status === 200){
                navigate("/dashboard");
            }
      }catch(error){
        alert("Usuario o contraseña incorrecto")
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
