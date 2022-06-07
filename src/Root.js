import PropTypes from 'prop-types';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import LoginPage from './views/LoginPage/index';
import MainPage from './views/MainPage';
import RegisterPage from "./views/RegisterPage/index"
import ThanksForRegister from "./views/ThanksForRegister/index"

const Root = (props) => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginPage />}/>
            <Route path="/register" element={<RegisterPage />}/>
            <Route path="/thanks" element={<ThanksForRegister />}/>
            <Route path="/main" element={<MainPage />}/>
        </Routes>
    </BrowserRouter>
);

Root.propTypes = {};

export default Root;

