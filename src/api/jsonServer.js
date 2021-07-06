import axios from 'axios';

export default axios.create({
baseURL: 'http://6d2814db9838.ngrok.io/' //ngrok server has time limit. request url may change
});