import React, { Component } from "react";
import "./App.css";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    useRouteMatch,
} from "react-router-dom";
import Home from "./Component/Home/Home";
import Login from "./Component/Login/Login";
import RegisterJobSeeker from "./Component/Register/RegisterJobSeeker";
import RegisterEmployer from "./Component/Register/RegisterEmployer";
import JobSeekerIndex from "./Component/JobSeeker/JobSeekerIndex";
import AccountManage1 from "./Component/JobSeeker/AccountManage/AccountManage1";
import JobSeekerJobSearch from "./Component/JobSeeker/JobSearch/JobSeekerJobSearch";
import AppliedCV from "./Component/JobSeeker/AppliedCV/AppliedCV";
import SavedJob from "./Component/JobSeeker/SavedJob/SavedJob";
import JobDetail from "./Component/JobSeeker/JobDetail/JobDetail";
import CompanyDetail from "./Component/JobSeeker/CompanyDetail/CompanyDetail";
import EmployerIndex from "./Component/Employer/EmployerIndex";
import AccountManage2 from "./Component/Employer/AccountManage/AccountManage2";
import JobPost from "./Component/Employer/JobPost/JobPost";
import CVReview from "./Component/Employer/CVReview/CVReview";
import CVDetail from "./Component/Employer/CVDetail/CVDetail";
import CVApproved from "./Component/Employer/CVApproved/CVApproved";
import RouterUser from "./Component/RouteUser";
import RouterEmployer from "./Component/RouterEmployer";
class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route
                        exact
                        path="/nguoi-tim-viec/tim-kiem-cong-viec"
                        component={JobSeekerJobSearch}
                    />
                    <Route exact path="/dang-nhap" component={Login} />
                    <Route
                        exact
                        path="/dang-ky/nguoi-tim-viec"
                        component={RegisterJobSeeker}
                    />
                    <Route
                        exact
                        path="/dang-ky/nha-tuyen-dung"
                        component={RegisterEmployer}
                    />
                    <Route
                        exact
                        path="/nguoi-tim-viec"
                        component={JobSeekerIndex}
                    />
                    <RouterUser
                        exact
                        path="/nguoi-tim-viec/quan-ly-tai-khoan"
                        component={AccountManage1}
                    />
                    <Route
                        exact
                        path="/nguoi-tim-viec/tim-kiem-cong-viec"
                        component={JobSeekerJobSearch}
                    />
                    <RouterUser
                        exact
                        path="/nguoi-tim-viec/ho-so-da-nop"
                        component={AppliedCV}
                    />
                    <RouterUser
                        exact
                        path="/nguoi-tim-viec/cong-viec-da-luu"
                        component={SavedJob}
                    />
                    <Route
                        path="/nguoi-tim-viec/chi-tiet-cong-viec/:id"
                        component={JobDetail}
                    />
                    <Route
                        exact
                        path="/nguoi-tim-viec/chi-tiet-cong-ty/:id"
                        component={CompanyDetail}
                    />

                    <RouterEmployer
                        exact
                        path="/nha-tuyen-dung"
                        component={EmployerIndex}
                    />
                    <RouterEmployer
                        exact
                        path="/nha-tuyen-dung/quan-ly-tai-khoan"
                        component={AccountManage2}
                    />
                    <RouterEmployer
                        exact
                        path="/nha-tuyen-dung/dang-tin"
                        component={JobPost}
                    />

                    <RouterEmployer
                        exact
                        path="/nha-tuyen-dung/kiem-duyet-ho-so"
                        component={CVReview}
                    />
                    <Route
                        exact
                        path="/nha-tuyen-dung/chi-tiet-ho-so/:id"
                        component={CVDetail}
                    />
                    <RouterEmployer
                        exact
                        path="/nha-tuyen-dung/ho-so-da-nhan"
                        component={CVApproved}
                    />
                </Switch>
            </Router>
        );
    }
}
export default App;
