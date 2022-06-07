import { Link } from 'react-router-dom';
import styles from './index.module.css';
import { AiFillEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { useState } from 'react';

const LoginPage = () => {

const [loginFrom, setLoginForm] = useState(true);
const [text, setText] = useState("text");
const [password, setPassword] = useState("password");

const loginFormChangeHandler = () => {
    setLoginForm(!loginFrom);
}

return(    
    
    <div className={styles.background}>
        <div className={styles.logo}></div>
        <div className={styles.loginForm}>
            <div className={styles.titleBox}>
                <p className={styles.title}>Sign in</p>
                <div className={styles.secondLogo}></div>
            </div>
            <div className={styles.passwordBox}>
                <input placeholder="E-mail" className={styles.inputBorder}/>
            </div>
            <div className={styles.passwordBox}>
                <input placeholder="Password" type={loginFrom ? password : text} className={styles.input}/>
                {loginFrom ? <AiFillEyeInvisible className={styles.eye} onClick={loginFormChangeHandler}/> : <AiOutlineEye className={styles.eye} onClick={loginFormChangeHandler}/>}
            </div>
            <Link to="/main" className={styles.loginButton}>Sign in</Link>
            <div className={styles.line}></div>
            <div className={styles.registerBox}>
                <p className={styles.information}>You dont have an account yet?</p>
                <Link className={styles.registerLink} to="/register">Sign up</Link>
            </div>
        </div>
    </div>
)};

export default LoginPage;
