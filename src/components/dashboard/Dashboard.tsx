import axios from 'axios';
import { useEffect, useState } from 'react';
import Modal from './Modal';
import { LogoutButton, Card, Container, Content, Title } from '../StyledComponents';
import { useNavigate } from 'react-router-dom';
import React from 'react';

const Dashboard:React.FC = () =>{
    const navigate = useNavigate();
    const [cardOptions, setCardOptions] = useState([]);
    const [selectedImage, setSelectedImage] = useState("");
    const [isShown, setIsShown] = useState(false);
    
    const toggle = (image = "") =>{
        setIsShown(!isShown);
        setSelectedImage(image);
    }
    const logout = ():void =>{
        localStorage.clear();
        navigate("/login");
    }
    const getData = async() => {
        try{
            const url = "https://app.chekku.site/api/v2/checkIns/by/pagination?excludedConditionsProps=enabled&limit=10&model=CheckIn&page=1&populate=%7B%22model%22:%22user%22%7D&populate=%7B%22model%22:%22checkInType%22%7D&populate=%7B%22model%22:%22customer%22%7D&populate=%7B%22model%22:%22form.base_form%22,%22fields%22:%22name%22%7D&sort=-date";
            
            const token = localStorage.getItem("authToken");
            const config = { headers: {
                'Authorization': 'Bearer ' + token
              }}
            const response = await axios.get(url, config);
            let options:any = [];
            response.data.data.forEach((checkin:any) =>{
                const customer = checkin.customer ? checkin.customer : undefined;
                options.push(
                    <Card>
                        <img 
                            src={checkin.image} 
                            alt={customer ? customer.name : 'no title'} 
                            width="178px" 
                            height="150px"
                            onClick={()=> toggle(checkin.image)}
                        />
                        <Container>
                            <h4>
                                {customer ? customer.name : 'no title'}
                            </h4>
                    </Container>
                    </Card>
                )
            });
            setCardOptions(options);
        }catch(error){
            alert("Algo malo paso");
        }
    };
    
    useEffect(() => {
        getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
        <>
            <Title>Dashboard</Title>
                <Content>
                    {isShown ? <Modal isShown={isShown} hide={() => toggle()} selectedImage={selectedImage}/> : null}
                    {cardOptions}
                </Content>
            <LogoutButton onClick={logout}>Logout</LogoutButton>
        </>
    )
}
export default Dashboard;
