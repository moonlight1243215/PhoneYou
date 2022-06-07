import styles from './index.module.css';
import { Link } from 'react-router-dom';

const menuBar = (props) => (
    <div className={styles.menuBar}>
        <div className={styles.logo}></div>
        <p className={styles.add}>Post</p>
        <p className={styles.user}>User</p>
        <Link to="/" className={styles.logoutLink}>Logout</Link>
    </div>
);


export default menuBar;
