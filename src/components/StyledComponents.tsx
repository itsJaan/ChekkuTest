import styled from 'styled-components';

export const Div = styled.div`
    margin: auto;
    width: 60%;
    background-color: #3F4E4F;
    border: 3px solid #3F4E4F;
    padding: 10px;
    height: 500px;
    margin-top: 100px;
`;

export const Title = styled.h1`
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    color: #DCD7C9;
`;

export const Form = styled.form`
    padding-top: 50px;
    padding-left: 200px;
`;

export const Label = styled.label`
    paddign-left: 100px;
    color: #DCD7C9 ;
`;

export const Input= styled.input`
    width:75%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
`;

export const LoginButton = styled.button`
    width: 37%;
    background-color: #A27B5C;
    color: white;
    padding: 14px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`;

export const Card = styled.div`
    margin: 5px;
    border: 1px solid #ccc;
    float: left;
    width: 180px;
`;
    
export const Container = styled.div`
    padding: 2px 16px;
    text-align: center;
`;

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 700;
  width: inherit;
  outline: 0;
`;

export const StyledModal = styled.div`
  z-index: 100;
  background: white;
  position: relative;
  margin: auto;
  border-radius: 5px;
`;
export const Header = styled.div`
  border-radius: 8px 8px 0 0;
  display: flex;
  justify-content: space-between;
  padding: 0.3rem;
`;

export const HeaderText = styled.div`
  color: #fff;
  align-self: center;
  color: black;
`;

export const CloseButton = styled.button`
  font-size: 0.8rem;
  border: none;
  border-radius: 3px;
  margin-left: 0.5rem;
  background: none;
  :hover {
    cursor: pointer;
  }
`;

export const Content = styled.div`
  padding: 10px;
  max-height: 30rem;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const LogoutButton = styled.button`
  width: 180px;
  background-color: #A27B5C;
  color: white;
  padding: 15px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 14px;
`;
