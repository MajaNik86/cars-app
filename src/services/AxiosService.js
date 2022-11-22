import axios from "axios";

class AxiosService {
    constructor() {
        this.axiosInstanceFromLibrary = axios.create({
            baseURL: 'http://127.0.0.1:8000/api'
        })
    }
}
export const axiosInstance = new AxiosService().axiosInstanceFromLibrary


// na ovaj nacin se pravi axios koji se moze koristiti za svaki servis u aplikaciji
// kod njega u primeru se pravi samo jedan za ceo servis i ne bi mogao da se koristi za vise servisa, tako da je 
// bolja praksa ovako raditi
