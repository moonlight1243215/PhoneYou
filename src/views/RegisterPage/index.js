import { Link } from 'react-router-dom';
import styles from './index.module.css';
import { AiFillEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { useState } from 'react';

const RegisterPage = (props) => {

const [registerForm, setRegisterForm] = useState(false);
const [registerFormSecond, setRegisterFormSecond] = useState(false);
const [text, setText] = useState("text");
const [password, setPassword] = useState("password")
const [email, setEmail] = useState('');

const registerFormChangeHandler = () => {
    setRegisterForm(!registerForm);
}

const registerFormSecondChangeHandler = () => {
    setRegisterFormSecond(!registerFormSecond);
}

const emailFunction = (props) => {
    console.log(email);
}

return(
    <div className={styles.background}>
        <div className={styles.logo}></div>
        <div className={styles.registerForm}>
            <div className={styles.titleBox}>
                <p className={styles.title}>Sing Up</p>
            </div>
            <div className={styles.passwordBox}>
                <input placeholder="E-mail" className={styles.inputBorder} onChange={event => setEmail(event.target.value)}/>
            </div>
            <div className={styles.passwordBox}>
                <input placeholder="Password" type={registerForm ? text : password} className={styles.input}/>
                {registerForm ? <AiOutlineEye className={styles.eye} onClick={registerFormChangeHandler}/> : <AiFillEyeInvisible className={styles.eye} onClick={registerFormChangeHandler}/>}
            </div>
            <div className={styles.passwordBox}>
                <input placeholder="Repeat password" type={registerFormSecond ? text : password} className={styles.input}/>
                {registerFormSecond ? <AiOutlineEye className={styles.eye} onClick={registerFormSecondChangeHandler}/> : <AiFillEyeInvisible className={styles.eye} onClick={registerFormSecondChangeHandler}/>}
            </div>
            <Link to="/thanks" className={styles.registerButton} onClick={emailFunction}>Sing up</Link>
            <div className={styles.line}></div>
            <div className={styles.registerBox}>
                <p className={styles.information}>Do you already have an account?</p>
                <Link className={styles.registerLink} to="/">Sign in</Link>
            </div>
        </div>
    </div>
)};

export default RegisterPage;