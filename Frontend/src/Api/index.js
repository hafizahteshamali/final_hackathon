import axios from 'axios'

const ApiClient = axios.create({
    baseURL: "http://localhost:8080/api",
    timeout: 30000,
    headers:{
        "Content-Type": "application/json"
    }
})


ApiClient.interceptors.response.use((res)=>{
    return res;
}, (error)=>{
    return error.message;
})

export default ApiClient;