import axios from 'axios'
const API_URL = 'http://localhost:8080/api'
class PersonDataService {
    retrieveAllPersons() {
        return axios.get(`${API_URL}/persons`);
    }

    deletePerson(id) {
        return axios.delete(`${API_URL}/persons?pId=${id}`);
    }
    
    retrievePerson(id) {
        return axios.get(`${API_URL}/persons/${id}`);
    }

    updatePerson(id, person) {
        return axios.put(`${API_URL}/persons/${id}`, person);
    }
    
    createPerson(person) {
        return axios.post(`${API_URL}/persons/`, person);
    }
}
export default new PersonDataService()