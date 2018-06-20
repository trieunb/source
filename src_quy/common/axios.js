import axios from 'axios';
import { BASE_URL, X_CSRF_TOKEN} from './constants';

export default axios.create({
    baseURL: BASE_URL,
    headers: {
        'X-CSRF-TOKEN': X_CSRF_TOKEN,
        'Content-Type': 'application/json'
    }
});