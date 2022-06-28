
import styled from "styled-components";
 
const Login:React.FC = () => {

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

    return(
         <Div>
                <Title>Login</Title>
                <Form >
                    <Label>Username:</Label><br/>
                    <Input placeholder="username"/><br/>
                    <Label>Password:</Label><br/>
                    <Input placeholder="password" type="password"/><br/>
                    <Button>Login</Button>
                </Form>
            </Div>
    )
}
export default Login;
