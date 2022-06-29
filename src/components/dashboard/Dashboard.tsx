import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';


const Card = styled.div`
margin: 5px;
border: 1px solid #ccc;
float: left;
width: 180px;
`;

const Container = styled.div`
    padding: 2px 16px;
    text-align: center;
`;

const Dashboard:React.FC = () =>{
    const [loading, setLoading] = useState(false);
    const [checkins, setCheckins] = useState([]);
    const [cardOptions, setCardOptions] = useState([]);
    
    const getData = async() => {
        try{
            setLoading(true);
            const url = "https://app.chekku.site/api/v2/checkIns/by/pagination?excludedConditionsProps=enabled&limit=10&model=CheckIn&page=1&populate=%7B%22model%22:%22user%22%7D&populate=%7B%22model%22:%22checkInType%22%7D&populate=%7B%22model%22:%22customer%22%7D&populate=%7B%22model%22:%22form.base_form%22,%22fields%22:%22name%22%7D&sort=-date";
            
            const token = localStorage.getItem("authToken");
            const config = { headers: {
                'Authorization': 'Bearer ' + token
              }}
            const response = await axios.get(url, config);
            const data = response.data.data;
            setCheckins(data);
            if(checkins){
                let options:any = [];
                checkins.forEach((checkin:any) =>{
                    const customer = checkin.customer ? checkin.customer : undefined;
                    options.push(
                        <Card>
                            <img 
                                src={checkin.image} 
                                alt={customer ? customer.name : 'no title'} 
                                width="178px" 
                                height="150px"
                                //onClick={()=> setModalVisible(true)}
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
            }

        }catch(error){
            alert("Algo malo paso");
        }finally{
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loading]);

    return(
        <>
            {cardOptions}
        </>
    )
}
export default Dashboard;
