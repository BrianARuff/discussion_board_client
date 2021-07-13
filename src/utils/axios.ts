import 'dotenv/config';
import axios from 'axios';

const localAxios = axios.create({
	baseURL: process.env.REACT_APP_API_PATH,
});

export { localAxios };
