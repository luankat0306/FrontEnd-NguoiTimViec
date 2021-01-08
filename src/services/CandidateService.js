import Axios from "axios";
import authHeader from "./authHeader";

var API_URL = "http://localhost:8080/api/candidates";

class CandidateService {
    sendCV(cv) {
        return Axios.post(API_URL, cv, authHeader());
    }

    getCandidateByResume(idResume) {
        return Axios.get(API_URL + "/resumes/" + idResume, authHeader());
    }

    deleteCandidate(id) {
        return Axios.delete(API_URL + "/" + id, authHeader());
    }
}

export default new CandidateService();
