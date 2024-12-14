import axios from "axios";

const API_URL = "http://127.0.0.1:8000/SPAapi/";

export const fetchTasks = () => axios.get(`${API_URL}tasks/`);
export const createTask = (task) => axios.post(`${API_URL}tasks/add/`, task)
    .then(response => console.log(response.data))
    .catch(error => console.error(error));
