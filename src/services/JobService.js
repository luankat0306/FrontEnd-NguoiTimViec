import Axios from "axios";
import authHeader from "./authHeader";
const API_URL = "http://localhost:8080/api/jobs";
class JobService {
    getJobs() {
        return Axios.get(API_URL, authHeader());
    }
    getJob(id) {
        return Axios.get(API_URL + "/" + id, authHeader());
    }
    topFiveJobs() {
        return Axios.get(API_URL + "/chart/top-five-jobs", authHeader());
    }
}

export default new JobService();
