import styles from './index.module.css';
import {email} from "../RegisterPage/index";

const ThanksForRegister = (props) => (
    <>
     <div className={styles.container}>
         <div className={styles.thanksForm}>
            <div className={styles.logoBox}>
                <div className={styles.logo}></div>
            </div>
            <div className={styles.textBox}>
                <p className={styles.title}>Thanks for register</p>
                <p className={styles.text}>Please verify your account. The verification email has been sent to:</p>
                <p className={styles.email}>krzys.szywacz@gmail.com</p>
            </div>
         </div>
    </div>
    </>
);

export default ThanksForRegister;
