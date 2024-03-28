import axios from 'axios';
import { useContext, useEffect } from "react";
import Context from '../Context/Context';


const CompanyBox = () => {
    // const baseURL = import.meta.env.BASE_URL
    const { companies, setCompanies } = useContext(Context)
    console.log(companies);
    const token = localStorage.getItem('token');
    
    useEffect(() => {
        return () => {
            const axiosInstance = axios.create({
                baseURL: 'http://192.168.0.107:5274/api/', // Base URL of your backend API
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                    // other headers as needed
                }
            });
            axiosInstance.get('User/GetLicenses')
                .then(response => {
                    setCompanies( response.data)
                    
                })
                .catch(error => {
                    console.error('There was an error!', error);
                });
            // console.log(token);
            // axios.defaults.headers.common['Authorization'] = `Bearer ${token['token']}`
        };
    }, []);
    return (
            <div style={{ display: 'flex', alignItems: 'center', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)', borderRadius: '10px', padding: '0px 20px', marginBottom: '20px' }}>
                <div>
                    <p style={{fontSize: 'larger', fontWeight: 'bold'}}>Company Name</p>
                    <p style={{fontWeight: 'bold'}}>{companies.companyName}</p>
                </div>
                <div style={{ border: '2px solid #51B5C3', borderRadius: '10px', marginLeft: '20px' }}> 
                    <img src="src\assets\AGILE-SOLUTIONS-1-1024x725-1 2.png" alt="" />
                </div>
            </div>
        
       
      



    )
}

export default CompanyBox