import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

export default axios.create({
    baseURL: 'https://bd07-103-189-179-1.ngrok-free.app/',  // Replace with your current ngrok URL
    headers: {"ngrok-skip-browser-warning":"true"}
});
