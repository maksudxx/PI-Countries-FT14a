import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const conection = axios.create({
    baseURL: 'http://localhost:3001'
})

export default conection