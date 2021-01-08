import Axios from "axios";
import authHeader from "./authHeader";

var API_URL = "http://localhost:8080/api/enterprises";

class EnterpriseService {
    getEnterprises() {
        return Axios.get(API_URL, authHeader());
    }

    getEnterprise(id) {
        return Axios.get(API_URL + "/" + id, authHeader());
    }

    createEnterprise(enterprise) {
        return Axios.post(API_URL + "/signup", enterprise, authHeader());
    }

    updateEnterprise(id, enterprise) {
        return Axios.put(API_URL + "/" + id, enterprise, authHeader());
    }

    deleteEnterprise(id) {
        return Axios.delete(API_URL + "/" + id, authHeader());
    }

    countEnterprise() {
        return Axios.get(API_URL + "/count", authHeader());
    }

    topFiveEnterprises() {
        return Axios.get(API_URL + "/chart/top-five-enterprises", authHeader());
    }
}

export default new EnterpriseService();
