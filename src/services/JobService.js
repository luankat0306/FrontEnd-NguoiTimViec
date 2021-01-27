import Axios from "axios";
import authHeader from "./authHeader";
const API_URL = "http://localhost:8080/api/jobs";
class JobService {
    getJobs() {
        return Axios.get(API_URL, authHeader());
    }

    getJobsByEnterprise(id) {
        return Axios.get(API_URL + "/enterprises/" + id, authHeader());
    }

    searchJobs(keywordForm) {
        return Axios.get(
            API_URL + "/search",
            {
                params: {
                    keyword: keywordForm.keyword,
                    career: keywordForm.career,
                    province: keywordForm.province,
                },
            },
            authHeader()
        );
    }

    getJob(id) {
        return Axios.get(API_URL + "/" + id, authHeader());
    }

    createJob(job) {
        return Axios.post(API_URL, job, authHeader());
    }
    topFiveJobs() {
        return Axios.get(API_URL + "/chart/top-five-jobs", authHeader());
    }

    deleteJob(id) {
        return Axios.delete(API_URL + "/" + id, authHeader());
    }
}

export default new JobService();
