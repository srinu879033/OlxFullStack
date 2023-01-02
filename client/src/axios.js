import axios from "axios";
import BASE_URL from "./constants/apiUrl";

axios.defaults.baseURL = BASE_URL;

export default axios;
